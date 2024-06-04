### AWS Security Group ###
# Traffic to the DB should only come from ECS
# Traffic to the ECS cluster should only come from the ALB
resource "aws_security_group" "cms_lb" {
  name        = "cms-lb"
  description = "Ingress - Load Balancer"
  vpc_id      = module.vpc.vpc_id

  ingress {
    protocol    = "tcp"
    from_port   = 80
    to_port     = 80
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    protocol    = "tcp"
    from_port   = 443
    to_port     = 443
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    protocol    = "tcp"
    from_port   = var.cms_app_port
    to_port     = var.cms_app_port
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  lifecycle {
    create_before_destroy = true
  }
}

### AWS ECS Security Group ###
# Traffic to the ECS cluster should only come from the ALB
resource "aws_security_group" "ecs_tasks" {
  name        = "cms-ecs-tasks"
  description = "allow inbound access from the ALB only"
  vpc_id      = module.vpc.vpc_id

  ingress {
    protocol        = "tcp"
    from_port       = var.cms_app_port
    to_port         = var.cms_app_port
    security_groups = [aws_security_group.cms_lb.id]
  }

  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }
}

### AWS RDS Security Group ###
# Traffic to the DB should only come from ECS
resource "aws_security_group" "cms_database" {
  name        = "cms-database"
  description = "Ingress - RDS instance"
  vpc_id      = module.vpc.vpc_id

  ingress {
    protocol  = "tcp"
    from_port = 5432
    to_port   = 5432
    security_groups = [
      aws_security_group.ecs_tasks.id
    ]
  }

  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Traffic to the ECS NextJS should only come from the ALB
resource "aws_security_group" "nextjs_lb" {
  name        = "nextjs-lb"
  description = "Ingress - Load Balancer"
  vpc_id      = module.vpc.vpc_id

  ingress {
    protocol    = "tcp"
    from_port   = 80
    to_port     = 80
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    protocol    = "tcp"
    from_port   = 443
    to_port     = 443
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    protocol    = "tcp"
    from_port   = var.nextjs_app_port
    to_port     = var.nextjs_app_port
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_security_group" "nextjs_ecs_tasks" {
  name        = "nextjs-ecs-tasks"
  description = "allow inbound access from the ALB only"
  vpc_id      = module.vpc.vpc_id

  ingress {
    protocol        = "tcp"
    from_port       = var.nextjs_app_port
    to_port         = var.nextjs_app_port
    security_groups = [aws_security_group.nextjs_lb.id]
  }

  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }
}
