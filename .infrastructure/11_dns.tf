module "dns_zone" {
  source  = "git::github.com/terraform-aws-modules/terraform-aws-route53/modules/zones.git?ref=bc63328714550fd903d2574b263833c9ce1c867e" # v2.11.0"
  zones   = var.dns_domain_name
}