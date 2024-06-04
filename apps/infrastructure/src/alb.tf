resource "aws_alb" "cms_load_balancer" {
  name            = "cms-load-balancer"
  subnets         = module.vpc.public_subnets
  security_groups = [aws_security_group.cms_lb.id]
  internal        = false
}

resource "aws_alb_target_group" "cms" {
  name        = "cms-target-group"
  port        = var.cms_app_port
  protocol    = "HTTP"
  vpc_id      = module.vpc.vpc_id
  target_type = "ip"

  health_check {
    healthy_threshold   = "3"
    interval            = "30"
    protocol            = "HTTP"
    matcher             = "204"
    timeout             = "3"
    path                = "/_health"
    unhealthy_threshold = "2"
  }
}

# Redirect all traffic from the ALB to the target group
resource "aws_alb_listener" "front_end" {
  load_balancer_arn = aws_alb.cms_load_balancer.id
  port              = 80
  protocol          = "HTTP"

  default_action {
    type = "redirect"

    redirect {
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}

resource "aws_lb_listener" "front_end_https" {
  load_balancer_arn = aws_alb.cms_load_balancer.id
  port              = "443"
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"
  certificate_arn   = module.acm.acm_certificate_arn

  default_action {
    type             = "forward"
    target_group_arn = aws_alb_target_group.cms.arn
  }
}

resource "aws_lb_listener_certificate" "lb_nextjs_certificate" {
  listener_arn    = aws_lb_listener.front_end_https.arn
  certificate_arn = aws_acm_certificate.preview_strapi_ssl_certificate.arn
}

resource "aws_lb_listener_rule" "nextjs_rule" {
  listener_arn = aws_lb_listener.front_end_https.arn
  priority     = 100

  action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.nextjs.arn
  }

  condition {
    host_header {
      values = ["preview.${keys(var.dns_domain_name)[0]}", "www.preview.${keys(var.dns_domain_name)[0]}"]
    }
  }
}

resource "aws_alb_target_group" "nextjs" {
  name        = "nextjs-target-group"
  port        = var.nextjs_app_port
  protocol    = "HTTP"
  vpc_id      = module.vpc.vpc_id
  target_type = "ip"

  health_check {
    healthy_threshold   = "3"
    interval            = "30"
    protocol            = "HTTP"
    matcher             = "204"
    timeout             = "3"
    path                = "/_health"
    unhealthy_threshold = "2"
  }
}