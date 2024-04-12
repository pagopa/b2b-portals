## Certificate HTTPS for CMS Strapi
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
provider "aws" {
  alias  = "us-east-1"
  region = "us-east-1"
}

module "cdn_websites_ssl_certificate" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-acm.git?ref=8d0b22f1f242a1b36e29b8cb38aaeac9b887500d" # v5.0.0

  for_each = var.websites_configs

  providers = {
    aws = aws.us-east-1
  }

  domain_name = each.value.url_tenant

  wait_for_validation = false
  validation_method   = "DNS"
  dns_ttl             = 3600

  create_route53_records = false
}