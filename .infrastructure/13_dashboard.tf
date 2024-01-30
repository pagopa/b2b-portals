resource "aws_cloudwatch_dashboard" "main" {
  dashboard_name = "Main"

  dashboard_body = templatefile("${path.module}/dashboards/main.json",
    {
      aws_region              = var.aws_region
      cf_distribution_id      = aws_cloudfront_distribution.website.id,
      ecs_cluster_name        = aws_ecs_cluster.cms_ecs_cluster.name
      ecs_cms_service_name    = aws_ecs_service.cms_ecs_service.name,
      rds_aurora_cluster_name = aws_rds_cluster.cms_database_cluster.cluster_identifier
      alb_fe_arn_suffix       = ""
    }
  )
}