resource "aws_route53_zone" "website_b2b" {
  name = var.dns_domain_name
}

// This Route53 record will point at our CloudFront distribution.
resource "aws_route53_record" "www_website" {
  zone_id = aws_route53_zone.website_b2b.zone_id
  name    = format("www.%s", var.dns_domain_name)
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.website.domain_name
    zone_id                = aws_cloudfront_distribution.website.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "website" {
  zone_id = aws_route53_zone.website_b2b.zone_id
  name    = var.dns_domain_name
  type    = "A"

  alias {
    name                   = aws_route53_record.www_website.name
    zone_id                = aws_route53_record.www_website.zone_id
    evaluate_target_health = false
  }
}