resource "aws_ecs_cluster" "cms_ecs_cluster" {
  name = var.ecs_cluster
}

data "template_file" "cms_app" {
  template = file("./task-definitions/cms_app.json.tpl")

  vars = {
    image                = aws_ecr_repository.image_repository.repository_url
    fargate_cpu          = var.fargate_cpu
    fargate_memory       = var.fargate_memory
    aws_region           = var.aws_region
    db_host              = aws_rds_cluster.cms_database_cluster.endpoint
    db_user              = aws_rds_cluster.cms_database_cluster.master_username
    db_password_arn      = aws_ssm_parameter.cms_database_password.arn
    bucket_name          = aws_s3_bucket.cms_medialibrary_bucket.bucket
    admin_jwt_secret_arn = aws_ssm_parameter.cms_admin_jwt_secret.arn
    db_name              = aws_rds_cluster.cms_database_cluster.database_name
    db_client            = "postgres"
  }
}

resource "aws_ecs_task_definition" "cms_task_def" {
  family                   = "cms-task-def"
  execution_role_arn       = aws_iam_role.ecs_task_execution_role.arn
  task_role_arn            = aws_iam_role.task_role.arn
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = var.fargate_cpu
  memory                   = var.fargate_memory
  container_definitions    = data.template_file.cms_app.rendered
}

resource "aws_ecs_service" "cms_ecs_service" {
  name                              = "cms-ecs"
  cluster                           = "cms-ecs-cluster"
  desired_count                     = 1
  launch_type                       = "FARGATE"
  force_new_deployment              = true
  task_definition                   = aws_ecs_task_definition.cms_task_def.arn
  health_check_grace_period_seconds = 60000

  network_configuration {
    security_groups  = [aws_security_group.ecs_tasks.id]
    subnets          = module.vpc.private_subnets
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = aws_alb_target_group.cms.id
    container_name   = "cms-docker"
    container_port   = var.cms_app_port
  }
}
