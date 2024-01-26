module "dns_zone" {
  source = "git::github.com/terraform-aws-modules/terraform-aws-route53.git?ref=fb53f9541723161ff39374add047dd8e60441e10" # v2.11.0
  zones  = var.dns_domain_name
}