resource "aws_route53_zone" "b2b_portals" {
  name = var.dns_domain_name
}