module "dns_zone" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-route53.git//modules/zones?ref=bc63328714550fd903d2574b263833c9ce1c867e" # v2.11.0
  zones  = var.dns_domain_name
}

# Delegation
module "records" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-route53.git//modules/records?ref=bc63328714550fd903d2574b263833c9ce1c867e" # v2.11.0"

  zone_name = sort(keys(module.zones.route53_zone_zone_id))[0]
  zone_id   = module.dns_zone.route53_zone_zone_id[keys(var.dns_domain_name)[0]]

  records = [
    {
      name = "prod"
      type = "NS"
      ttl  = 3600
      records = [
        "ns-1673.awsdns-17.co.uk",
        "ns-1032.awsdns-01.org",
        "ns-921.awsdns-51.net",
        "ns-275.awsdns-34.com"
      ]
    }
  ]

  depends_on = [module.zones]
}
