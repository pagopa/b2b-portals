module "dns_zone" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-route53.git//modules/zones?ref=bc63328714550fd903d2574b263833c9ce1c867e" # v2.11.0
  zones  = var.dns_domain_name
}

# Delegation
resource "aws_route53_record" "cms_delegate" {
  for_each = var.dns_delegate_records

  allow_overwrite = true
  name            = each.key
  ttl             = 3600
  type            = "NS"
  zone_id         = module.dns_zone.route53_zone_zone_id[keys(var.dns_domain_name)[0]]

  records = each.value
}

#Validation
resource "aws_route53_record" "certificate" {
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
  zone_id         = keys(var.dns_domain_name)[0]
}