module "dns_zone" {
  source  = "terraform-aws-modules/route53/aws//modules/zones"
  version = "~> 2.0"
  zones   = var.dns_domain_name
}