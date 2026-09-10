locals {
  wallet_redirect_route53_zone_id = var.wallet_redirect_route53_zone_id != null ? var.wallet_redirect_route53_zone_id : aws_route53_zone.wallet_redirect[0].zone_id
}

resource "aws_route53_zone" "wallet_redirect" {
  count = var.wallet_redirect_route53_zone_id == null ? 1 : 0

  name = var.wallet_redirect_domain
}

resource "aws_acm_certificate" "wallet_redirect" {
  domain_name       = var.wallet_redirect_domain
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "wallet_redirect_certificate_validation" {
  for_each = {
    for validation_option in aws_acm_certificate.wallet_redirect.domain_validation_options :
    validation_option.domain_name => {
      name   = validation_option.resource_record_name
      record = validation_option.resource_record_value
      type   = validation_option.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = local.wallet_redirect_route53_zone_id
}

resource "aws_acm_certificate_validation" "wallet_redirect" {
  certificate_arn         = aws_acm_certificate.wallet_redirect.arn
  validation_record_fqdns = [for record in aws_route53_record.wallet_redirect_certificate_validation : record.fqdn]
}

resource "aws_security_group" "wallet_redirect" {
  name        = "wallet-redirect-lb"
  description = "Allow public HTTP and HTTPS traffic to the wallet redirect load balancer"
  vpc_id      = module.vpc.vpc_id

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_lb" "wallet_redirect" {
  name               = "wallet-redirect"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.wallet_redirect.id]
  subnets            = module.vpc.public_subnets
}

resource "aws_lb_listener" "wallet_redirect_http" {
  load_balancer_arn = aws_lb.wallet_redirect.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type = "redirect"

    redirect {
      host        = var.wallet_redirect_target_domain
      path        = "/#{path}"
      port        = "443"
      protocol    = "HTTPS"
      query       = "#{query}"
      status_code = "HTTP_301"
    }
  }
}

resource "aws_lb_listener" "wallet_redirect_https" {
  load_balancer_arn = aws_lb.wallet_redirect.arn
  port              = 443
  protocol          = "HTTPS"
  certificate_arn   = aws_acm_certificate_validation.wallet_redirect.certificate_arn
  ssl_policy        = "ELBSecurityPolicy-TLS13-1-2-Res-2021-06"

  default_action {
    type = "redirect"

    redirect {
      host        = var.wallet_redirect_target_domain
      path        = "/#{path}"
      port        = "443"
      protocol    = "HTTPS"
      query       = "#{query}"
      status_code = "HTTP_301"
    }
  }
}

resource "aws_globalaccelerator_accelerator" "wallet_redirect" {
  name            = "wallet-redirect"
  enabled         = true
  ip_address_type = "IPV4"
}

resource "aws_globalaccelerator_listener" "wallet_redirect" {
  accelerator_arn = aws_globalaccelerator_accelerator.wallet_redirect.arn
  client_affinity = "NONE"
  protocol        = "TCP"

  port_range {
    from_port = 80
    to_port   = 80
  }

  port_range {
    from_port = 443
    to_port   = 443
  }
}

resource "aws_globalaccelerator_endpoint_group" "wallet_redirect" {
  endpoint_group_region         = var.aws_region
  health_check_interval_seconds = 30
  health_check_port             = 443
  health_check_protocol         = "TCP"
  listener_arn                  = aws_globalaccelerator_listener.wallet_redirect.arn
  threshold_count               = 3
  traffic_dial_percentage       = 100

  endpoint_configuration {
    client_ip_preservation_enabled = false
    endpoint_id                    = aws_lb.wallet_redirect.arn
    weight                         = 100
  }

  depends_on = [
    aws_lb_listener.wallet_redirect_http,
    aws_lb_listener.wallet_redirect_https,
  ]
}

resource "aws_route53_record" "wallet_redirect" {
  name    = var.wallet_redirect_domain
  type    = "A"
  zone_id = local.wallet_redirect_route53_zone_id

  alias {
    evaluate_target_health = false
    name                   = aws_globalaccelerator_accelerator.wallet_redirect.dns_name
    zone_id                = aws_globalaccelerator_accelerator.wallet_redirect.hosted_zone_id
  }
}
