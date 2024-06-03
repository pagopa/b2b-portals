resource "aws_cloudfront_origin_access_identity" "main" {
  comment = "Identity to access S3 bucket."
}

resource "aws_cloudfront_response_headers_policy" "websites" {
  name    = "websites"
  comment = "Response custom headers for public static website"

  dynamic "custom_headers_config" {
    for_each = length(var.cdn_custom_headers) > 0 ? ["dummy"] : []
    content {
      dynamic "items" {
        for_each = var.cdn_custom_headers
        content {
          header   = items.value.header
          override = items.value.override
          value    = items.value.value
        }
      }
    }
  }
}

## Function to manipulate the request
resource "aws_cloudfront_function" "website_viewer_request_handler" {
  name    = "website-viewer-request-handler"
  runtime = "cloudfront-js-2.0"
  # publish this version only if the env is true
  publish = var.publish_cloudfront_functions
  code    = file("${path.module}/../../cloudfront-functions/dist/viewer-request-handler.js")
}

resource "aws_cloudfront_distribution" "cdn_multi_website" {
  for_each = {
    for key, config in var.websites_configs :
    key => config
    if config.create_distribution
  }

  origin {
    domain_name = aws_s3_bucket.website.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.website.bucket
    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.main.cloudfront_access_identity_path
    }
    origin_path = each.value.origin_path
  }

  enabled             = true # enable CloudFront distribution
  is_ipv6_enabled     = true
  comment             = "CloudFront distribution for the static website ${each.key}"
  default_root_object = "index.html"

  aliases = each.value.cdn_use_alias ? ["${each.value.url_tenant}"] : []

  custom_error_response {
    error_code         = 404
    response_code      = 404
    response_page_path = "/404.html"
  }

  default_cache_behavior {
    # HTTPS requests we permit the distribution to serve
    allowed_methods            = ["GET", "HEAD", "OPTIONS"]
    cached_methods             = ["GET", "HEAD"]
    target_origin_id           = aws_s3_bucket.website.bucket
    response_headers_policy_id = each.value.cdn_indexing_enable ? aws_cloudfront_response_headers_policy.websites.id : null

    forwarded_values {
      query_string = false
      headers      = []
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0     # min time for objects to live in the distribution cache
    default_ttl            = 3600  # default time for objects to live in the distribution cache
    max_ttl                = 86400 # max time for objects to live in the distribution cache
    compress               = true

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.website_viewer_request_handler.arn
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    # set cdn_use_custom_certificate = true in variable "websites_configs" when tenant certificate is validated
    cloudfront_default_certificate = each.value.cdn_use_custom_certificate ? false : true
    acm_certificate_arn            = each.value.cdn_use_custom_certificate ? module.cdn_websites_ssl_certificate[each.key].acm_certificate_arn : null
    ssl_support_method             = each.value.cdn_use_custom_certificate ? "sni-only" : null
    minimum_protocol_version       = "TLSv1.2_2021"
  }
}

## MediaLibrary Strapi CDN
resource "aws_cloudfront_distribution" "cms_medialibrary" {

  origin {
    domain_name = aws_s3_bucket.cms_medialibrary_bucket.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.cms_medialibrary_bucket.bucket

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.main.cloudfront_access_identity_path
    }
  }

  enabled         = true # enable CloudFront distribution
  is_ipv6_enabled = true
  comment         = "CloudFront distribution for the medialibrary cms."

  default_cache_behavior {
    # HTTPS requests we permit the distribution to serve
    allowed_methods  = ["GET", "HEAD", "OPTIONS", "PUT", "POST", "PATCH", "DELETE"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = aws_s3_bucket.cms_medialibrary_bucket.bucket

    forwarded_values {
      query_string = false
      headers      = []
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0     # min time for objects to live in the distribution cache
    default_ttl            = 3600  # default time for objects to live in the distribution cache
    max_ttl                = 86400 # max time for objects to live in the distribution cache
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

## Storybook CDN
resource "aws_cloudfront_distribution" "storybook" {

  origin {
    domain_name = aws_s3_bucket.website.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.website.bucket

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.main.cloudfront_access_identity_path
    }
    origin_path = "/storybook"
  }

  enabled             = true # enable CloudFront distribution
  is_ipv6_enabled     = true
  comment             = "CloudFront distribution for the storybook."
  default_root_object = "index.html"

  aliases = module.cdn_storybook_ssl_certificate.distinct_domain_names

  custom_error_response {
    error_code         = 404
    response_code      = 404
    response_page_path = "/404.html"
  }

  default_cache_behavior {
    # HTTPS requests we permit the distribution to serve
    allowed_methods            = ["GET", "HEAD", "OPTIONS"]
    cached_methods             = ["GET", "HEAD"]
    target_origin_id           = aws_s3_bucket.website.bucket
    response_headers_policy_id = aws_cloudfront_response_headers_policy.websites.id

    forwarded_values {
      query_string = false
      headers      = []
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0     # min time for objects to live in the distribution cache
    default_ttl            = 3600  # default time for objects to live in the distribution cache
    max_ttl                = 86400 # max time for objects to live in the distribution cache
    compress               = true
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = false
    acm_certificate_arn            = module.cdn_storybook_ssl_certificate.acm_certificate_arn
    ssl_support_method             = "sni-only"
    minimum_protocol_version       = "TLSv1.2_2021"
  }
}
