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
  port              = 443

  default_action {
    target_group_arn = aws_alb_target_group.cms.id
    type             = "forward"
  }
}

### AWS CloudFront distribution ###
resource "aws_cloudfront_distribution" "cms_dist" {
  enabled = true
  origin {
    domain_name = aws_alb.cms_load_balancer.dns_name
    origin_id   = aws_alb.cms_load_balancer.dns_name
    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS", "PUT", "POST", "PATCH", "DELETE"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
    target_origin_id       = aws_alb.cms_load_balancer.dns_name
    viewer_protocol_policy = "redirect-to-https" # other options - https only, http
    forwarded_values {
      query_string = false
      headers      = []
      cookies {
        forward = "none"
      }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}