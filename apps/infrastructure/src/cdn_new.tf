resource "aws_cloudfront_distribution" "my_distributions" {
  for_each = var.cdn_configs

  origin {
    domain_name = each.value.origin_domain
    origin_id   = each.value.origin_id
    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.main.cloudfront_access_identity_path
    }
    origin_path = each.value.origin_path
  }

  enabled             = true # enable CloudFront distribution
  is_ipv6_enabled     = true
  comment             = "CloudFront distribution for the static website."
  default_root_object = "index.html"

  # to be uncommented when when available dns domain
  #aliases = ["${each.value.url_tenant}"]  # Alias di dominio univoco per ogni distribuzione

  custom_error_response {
  error_code         = 404
  response_code      = 404
  response_page_path = "/404.html"
  }

  default_cache_behavior {
    # HTTPS requests we permit the distribution to serve
    allowed_methods            = ["GET", "HEAD", "OPTIONS"]
    cached_methods             = ["GET", "HEAD"]
    target_origin_id           = each.value.origin_id
    #response_headers_policy_id = aws_cloudfront_response_headers_policy.websites.id

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
    cloudfront_default_certificate = var.use_custom_certificate ? false : true
    # acm_certificate_arn            = var.use_custom_certificate ? each.value.ssl_cert_arn : null
    # ssl_support_method             = var.use_custom_certificate ? "sni-only" : null
  }
}