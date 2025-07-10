resource "aws_ecs_cluster" "cms_ecs_cluster" {
  name = "cms-ecs-cluster"
}

resource "aws_ecs_task_definition" "nextjs_task_def" {
  family                   = "nextjs-task-def"
  execution_role_arn       = aws_iam_role.ecs_task_execution_role.arn
  task_role_arn            = aws_iam_role.task_role.arn
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = var.nextjs_app_cpu
  memory                   = var.nextjs_app_memory
  container_definitions = templatefile("./task-definitions/nextjs_app.json.tpl", {
    image            = aws_ecr_repository.nextjs_image_repository.repository_url
    fargate_cpu      = var.nextjs_app_cpu
    fargate_memory   = var.nextjs_app_memory
    aws_region       = var.aws_region
    container_port   = var.nextjs_app_port
    strapi_api_token = aws_ssm_parameter.strapi_api_token.arn
    strapi_api_url   = "https://${keys(var.dns_domain_name)[0]}"
    preview_token    = aws_ssm_parameter.preview_token.arn
  })
}

resource "aws_ecs_service" "nextjs_ecs_service" {
  name                              = "nextjs-ecs"
  cluster                           = aws_ecs_cluster.cms_ecs_cluster.id
  desired_count                     = 1
  launch_type                       = "FARGATE"
  force_new_deployment              = true
  task_definition                   = aws_ecs_task_definition.nextjs_task_def.arn
  health_check_grace_period_seconds = 60000

  lifecycle {
    ignore_changes = [task_definition] # CMS Deployment is managed by the "Deploy CMS" GitHub Action
  }

  network_configuration {
    security_groups  = [aws_security_group.nextjs_ecs_tasks.id]
    subnets          = module.vpc.private_subnets
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = aws_alb_target_group.nextjs.id
    container_name   = "nextjs-docker"
    container_port   = var.nextjs_app_port
  }
}

resource "aws_ecs_task_definition" "cms_multitenant_task_def" {
  for_each = {
    for key, config in var.websites_configs :
    key => config
  }
  family                   = "cms-task-def-${each.key}"
  execution_role_arn       = aws_iam_role.ecs_task_execution_role.arn
  task_role_arn            = aws_iam_role.task_role.arn
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = var.cms_app_cpu
  memory                   = var.cms_app_memory
  container_definitions = templatefile("./task-definitions/cms_app.json.tpl", {
    image                = aws_ecr_repository.strapi_image_repository.repository_url
    fargate_cpu          = var.cms_app_cpu
    fargate_memory       = var.cms_app_memory
    aws_region           = var.aws_region
    db_host              = aws_rds_cluster.cms_database_cluster.endpoint
    db_user              = aws_rds_cluster.cms_database_cluster.master_username
    db_password_arn      = aws_ssm_parameter.cms_database_password.arn
    bucket_name          = aws_s3_bucket.cms_multitenant_medialibrary_bucket[each.key].bucket
    admin_jwt_secret_arn = aws_ssm_parameter.cms_admin_jwt_secret.arn
    db_name              = aws_rds_cluster.cms_database_cluster.database_name
    db_client            = "postgres"
    container_port       = var.cms_app_port
    app_keys             = aws_ssm_parameter.cms_app_keys.arn
    api_token_salt       = aws_ssm_parameter.cms_multitenant_api_token_salt[each.key].arn
    transfer_token_salt  = aws_ssm_parameter.cms_transfer_token_salt.arn
    jwt_secret           = aws_ssm_parameter.cms_jwt_secret.arn
    access_key_id        = aws_ssm_parameter.cms_access_key_id.arn
    access_key_secret    = aws_ssm_parameter.cms_access_key_secret.arn
    bucket_full_url      = aws_s3_bucket.cms_multitenant_medialibrary_bucket[each.key].bucket_regional_domain_name
    cdn_url              = "https://${aws_cloudfront_distribution.cms_multitenant_medialibrary[each.key].domain_name}"
    aws_bucket_endpoint  = "https://s3.${var.aws_region}.amazonaws.com"
    repo_owner           = "pagopa"
    repo_name            = "b2b-portals"
    workflow_id          = "deploy_website_prod.yaml"
    target_branch        = "main"
    github_pat           = aws_ssm_parameter.cms_github_pat.arn
    preview_token        = aws_ssm_parameter.preview_token.arn
    preview_url          = "https://preview.${keys(var.dns_domain_name)[0]}/preview"
    environment          = "${each.key}"
    db_schema            = "${each.key}"
    admin_panel_url      = "https://${each.key}.${keys(var.dns_domain_name)[0]}"
  })
}

resource "aws_ecs_service" "cms_multitenant_ecs_service" {
  for_each = {
    for key, config in var.websites_configs :
    key => config
  }
  name                              = "cms-ecs-${each.key}"
  cluster                           = aws_ecs_cluster.cms_ecs_cluster.id
  desired_count                     = 1
  launch_type                       = "FARGATE"
  force_new_deployment              = true
  task_definition                   = aws_ecs_task_definition.cms_multitenant_task_def[each.key].arn
  health_check_grace_period_seconds = 60000

  lifecycle {
    ignore_changes = [task_definition] # CMS Deployment is managed by the "Deploy CMS" GitHub Action
  }

  network_configuration {
    security_groups  = [aws_security_group.ecs_tasks.id]
    subnets          = module.vpc.private_subnets
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = aws_alb_target_group.cms_multitenant[each.key].id
    container_name   = "cms-docker"
    container_port   = var.cms_app_port
  }
}