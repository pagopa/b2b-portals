module "dns_zone" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-route53.git//modules/zones?ref=bc63328714550fd903d2574b263833c9ce1c867e" # v2.11.0
  zones  = var.dns_domain_name
}

### Remove this resource once the new multitenancy is complete
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
    },
    {
      name = "www.storybook"
      type = "A"
      alias = {
        name                   = "storybook.${keys(var.dns_domain_name)[0]}"
        zone_id                = module.dns_zone.route53_zone_zone_id[keys(var.dns_domain_name)[0]]
        evaluate_target_health = false
      }
    }
  ]

  depends_on = [module.dns_zone]
}

module "preview_strapi_records" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-route53.git//modules/records?ref=bc63328714550fd903d2574b263833c9ce1c867e" # v2.11.0"

  zone_id = module.dns_zone.route53_zone_zone_id[keys(var.dns_domain_name)[0]]

  records = [
    {
      name = "preview"
      type = "A"
      alias = {
        name                   = aws_alb.cms_load_balancer.dns_name
        zone_id                = aws_alb.cms_load_balancer.zone_id
        evaluate_target_health = false
      }
    },
    {
      name = "www.preview"
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

module "cms_multitenant_records" {
  for_each = {
    for key, config in var.websites_configs :
    key => config
  }
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-route53.git//modules/records?ref=bc63328714550fd903d2574b263833c9ce1c867e" # v2.11.0"

  zone_id = module.dns_zone.route53_zone_zone_id[keys(var.dns_domain_name)[0]]

  records = [
    {
      name = "${each.key}"
      type = "A"
      alias = {
        name                   = aws_alb.cms_load_balancer.dns_name
        zone_id                = aws_alb.cms_load_balancer.zone_id
        evaluate_target_health = false
      }
    },
    {
      name = "www.${each.key}"
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


module "website_staging_records" {
  for_each = {
    for key, config in var.websites_configs :
    key => config
  }
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-route53.git//modules/records?ref=bc63328714550fd903d2574b263833c9ce1c867e" # v2.11.0"

  zone_id = module.dns_zone.route53_zone_zone_id[keys(var.dns_domain_name)[0]]

  records = [
    {
      name = "staging.${each.key}"
      type = "A"
      alias = {
        name                   = aws_cloudfront_distribution.cdn_multi_website_staging[each.key].domain_name
        zone_id                = aws_cloudfront_distribution.cdn_multi_website_staging[each.key].hosted_zone_id
        evaluate_target_health = false
      }
    },
    {
      name = "www.staging.${each.key}"
      type = "A"
      alias = {
        name                   = "staging.${each.key}.${keys(var.dns_domain_name)[0]}"
        zone_id                = module.dns_zone.route53_zone_zone_id[keys(var.dns_domain_name)[0]]
        evaluate_target_health = false
      }
    }
  ]

  depends_on = [module.dns_zone]
}