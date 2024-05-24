module "dns_zone" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-route53.git//modules/zones?ref=bc63328714550fd903d2574b263833c9ce1c867e" # v2.11.0
  zones  = var.dns_domain_name
}

module "records" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-route53.git//modules/records?ref=bc63328714550fd903d2574b263833c9ce1c867e" # v2.11.0"

  zone_id = module.dns_zone.route53_zone_zone_id[keys(var.dns_domain_name)[0]]

  records = [
    {
      name = ""
      type = "A"
      alias = {
        name                   = aws_alb.cms_load_balancer.dns_name
        zone_id                = aws_alb.cms_load_balancer.zone_id
        evaluate_target_health = false
      }
    },
    {
      name = "www"
      type = "A"
      alias = {
        name                   = aws_alb.cms_load_balancer.dns_name
        zone_id                = aws_alb.cms_load_balancer.zone_id
        evaluate_target_health = false
      }
    }
  ]

  depends_on = [module.dns_zone]
}

// This Route53 record will point at the Storybook CDN
module "storybook_records" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-route53.git//modules/records?ref=bc63328714550fd903d2574b263833c9ce1c867e" # v2.11.0"

  zone_id = module.dns_zone.route53_zone_zone_id[keys(var.dns_domain_name)[0]]

  records = [
    {
      name = "storybook"
      type = "A"
      alias = {
        name                   = aws_cloudfront_distribution.storybook.domain_name
        zone_id                = aws_cloudfront_distribution.storybook.hosted_zone_id
        evaluate_target_health = false
      }
    }
  ]

  depends_on = [module.dns_zone]
}

module "storybook_records_www" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-route53.git//modules/records?ref=bc63328714550fd903d2574b263833c9ce1c867e" # v2.11.0"

  zone_id = module.dns_zone.route53_zone_zone_id[keys(var.dns_domain_name)[0]]

  records = [
    {
      name = "www.storybook"
      type = "A"
      alias = {
        name                   = module.storybook_record.route53_record_fqdn
        zone_id                = module.dns_zone.route53_zone_zone_id[keys(var.dns_domain_name)[0]]
        evaluate_target_health = false
      }
    }
  ]

  depends_on = [module.dns_zone]
}