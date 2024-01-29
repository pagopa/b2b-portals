resource "aws_route53_record" "cms" {
  zone_id = module.dns_zone.route53_zone_zone_id[keys(var.dns_domain_name)[0]]
  name    = "cms"
  type    = "CNAME"
  records = [aws_alb.cms_load_balancer.dns_name]
  ttl     = 3600
}