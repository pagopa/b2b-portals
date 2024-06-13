## Certificate HTTPS for CMS Strapi ### Remove this resource once the new multitenancy is complete
module "acm" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-acm.git?ref=8d0b22f1f242a1b36e29b8cb38aaeac9b887500d" # v5.0.0

  domain_name = keys(var.dns_domain_name)[0]
  zone_id     = module.dns_zone.route53_zone_zone_id[keys(var.dns_domain_name)[0]]

  subject_alternative_names = [
    "www.${keys(var.dns_domain_name)[0]}"
  ]

  wait_for_validation = true
  validation_method   = "DNS"
  dns_ttl             = 3600
}

## Certificate HTTPS for Cloudfront Websites
module "cdn_websites_ssl_certificate" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-acm.git?ref=8d0b22f1f242a1b36e29b8cb38aaeac9b887500d" # v5.0.0

  for_each = {
    for key, config in var.websites_configs :
    key => config
    if config.create_certificate
  }

  providers = {
    aws = aws.us-east-1
  }

  domain_name = each.value.url_tenant

  wait_for_validation = false
  validation_method   = "DNS"
  dns_ttl             = 3600

  create_route53_records = false
}

## Certificate HTTPS for Storybook
module "cdn_storybook_ssl_certificate" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-acm.git?ref=8d0b22f1f242a1b36e29b8cb38aaeac9b887500d" # v5.0.0

  domain_name = "storybook.${keys(var.dns_domain_name)[0]}"
  zone_id     = module.dns_zone.route53_zone_zone_id[keys(var.dns_domain_name)[0]]

  subject_alternative_names = [
    "www.storybook.${keys(var.dns_domain_name)[0]}"
  ]

  providers = {
    aws = aws.us-east-1
  }

  wait_for_validation = true
  validation_method   = "DNS"
  dns_ttl             = 3600
}

## Certificate HTTPS for Preview Strapi
module "preview_strapi_ssl_certificate" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-acm.git?ref=8d0b22f1f242a1b36e29b8cb38aaeac9b887500d" # v5.0.0

  domain_name = "preview.${keys(var.dns_domain_name)[0]}"
  zone_id     = module.dns_zone.route53_zone_zone_id[keys(var.dns_domain_name)[0]]

  subject_alternative_names = [
    "www.preview.${keys(var.dns_domain_name)[0]}"
  ]

  wait_for_validation = true
  validation_method   = "DNS"
  dns_ttl             = 3600
}

## Certificate HTTPS for CMS Multitenant Strapi
module "cms_multitenant_ssl_certificate" {
  for_each = {
    for key, config in var.websites_configs :
    key => config
  }
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-acm.git?ref=8d0b22f1f242a1b36e29b8cb38aaeac9b887500d" # v5.0.0

  domain_name = "${each.key}.${keys(var.dns_domain_name)[0]}"
  zone_id     = module.dns_zone.route53_zone_zone_id[keys(var.dns_domain_name)[0]]

  subject_alternative_names = [
    "www.${each.key}.${keys(var.dns_domain_name)[0]}"
  ]

  wait_for_validation = true
  validation_method   = "DNS"
  dns_ttl             = 3600
}