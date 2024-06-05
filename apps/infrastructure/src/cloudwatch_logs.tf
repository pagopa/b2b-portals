resource "aws_cloudwatch_log_group" "nextjs_ecs_task" {
  name              = "nextjs-ecs-task"
  retention_in_days = "30"
}

resource "aws_cloudwatch_log_group" "strapi_ecs_task" {
  name              = "strapi-ecs-task"
  retention_in_days = "30"
}