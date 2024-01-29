resource "aws_acm_certificate" "cms" {
  domain_name               = keys(var.dns_domain_name)[0]
  validation_method         = "DNS"
  subject_alternative_names = [format("www.%s", keys(var.dns_domain_name)[0])]

  lifecycle {
    create_before_destroy = true
  }

  provider = aws.eu-south-1
}