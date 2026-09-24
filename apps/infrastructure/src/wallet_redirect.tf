resource "aws_acm_certificate" "wallet_redirect" {
  domain_name       = var.wallet_redirect_domain
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
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
  name                       = "wallet-redirect"
  internal                   = false
  load_balancer_type         = "application"
  enable_deletion_protection = true
  security_groups            = [aws_security_group.wallet_redirect.id]
  subnets                    = module.vpc.public_subnets

  lifecycle {
    prevent_destroy = true
  }
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
  certificate_arn   = aws_acm_certificate.wallet_redirect.arn
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