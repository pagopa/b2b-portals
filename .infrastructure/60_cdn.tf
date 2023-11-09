resource "aws_cloudfront_origin_access_identity" "main" {
  comment = "Identity to access S3 bucket."
}

## Static website CDN
resource "aws_cloudfront_distribution" "website" {

  origin {
    domain_name = aws_s3_bucket.website.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.website.bucket

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.main.cloudfront_access_identity_path
    }
  }

  enabled             = true # enable CloudFront distribution
  is_ipv6_enabled     = true
  comment             = "CloudFront distribution for the static website."
  default_root_object = "index.html"

  # to be uncommented when when available dns domain
  # aliases = var.use_custom_certificate && var.dns_domain_name != "" ? [format("www.%s", var.dns_domain_name), var.dns_domain_name] : []

  custom_error_response {
    error_code         = 404
    response_code      = 404
    response_page_path = "/404.html"
  }

  default_cache_behavior {
    # HTTPS requests we permit the distribution to serve
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = aws_s3_bucket.website.bucket

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
    cloudfront_default_certificate = var.use_custom_certificate ? false : true
    # acm_certificate_arn            = var.use_custom_certificate ? aws_acm_certificate.website.arn : null
    # ssl_support_method             = var.use_custom_certificate ? "sni-only" : null
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