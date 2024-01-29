module "acm" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-acm.git?ref=8d0b22f1f242a1b36e29b8cb38aaeac9b887500d" # v5.0.0

  domain_name = keys(var.dns_domain_name)[0]
  zone_id     = module.dns_zone.route53_zone_zone_id[keys(var.dns_domain_name)[0]]

  subject_alternative_names = [
    "www.${keys(var.dns_domain_name)[0]}"
  ]

  wait_for_validation = true

  validation_method = "DNS"
}