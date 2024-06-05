resource "aws_cloudwatch_log_group" "ecs_task" {
  name = "ecs-task"
  retention_in_days = "30"
}