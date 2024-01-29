resource "aws_acm_certificate" "cms" {
  domain_name               = keys(var.dns_domain_name)[0]
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
  
  provider = aws.eu-south-1
}

resource "aws_route53_record" "cms" {
  for_each = {
    for dvo in aws_acm_certificate.cms.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 3600 # 1 hour
  type            = each.value.type
  zone_id         = module.dns_zone.route53_zone_zone_id[keys(var.dns_domain_name)[0]]
  depends_on = [
    aws_acm_certificate.cms
  ]
}