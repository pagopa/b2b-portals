## resource "aws_route53_zone" "b2b_portals" {
##   name = var.dns_domain_name
## }

module "dns_zone" {
  source  = "terraform-aws-modules/route53/aws//modules/zones"
  version = "~> 2.0"
  
  zones = {
    var.dns_domain_name = {
      comment = "terraform-aws-modules-examples.com (production)"
    }
  }
}