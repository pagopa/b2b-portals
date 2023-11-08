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

  default_action {
    target_group_arn = aws_alb_target_group.cms.id
    type             = "forward"
  }
}