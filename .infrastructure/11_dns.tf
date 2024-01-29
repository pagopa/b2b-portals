module "dns_zone" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-route53.git//modules/zones?ref=bc63328714550fd903d2574b263833c9ce1c867e" # v2.11.0
  zones  = var.dns_domain_name
}

# Delegation
module "records" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-route53.git//modules/records?ref=bc63328714550fd903d2574b263833c9ce1c867e" # v2.11.0"

  zone_id = module.dns_zone.route53_zone_zone_id[keys(var.dns_domain_name)[0]]

  records = [
    {
      name    = var.dns_delegate_records
      type    = "NS"
      ttl     = 3600
      records = var.dns_delegate_records.value
    },
    {
      name    = keys(var.dns_domain_name)[0]
      type    = "A"
      ttl     = 3600
      records = [aws_alb.cms_load_balancer.dns_name]
    }
  ]

  depends_on = [module.dns_zone]
}