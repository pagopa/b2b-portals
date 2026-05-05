resource "aws_cloudwatch_dashboard" "main" {
  dashboard_name = "Main-${each.key}"

  for_each = {
    for key, config in var.websites_configs :
    key => config
    if config.create_distribution
  }

  lifecycle {
    create_before_destroy = false
    ignore_changes        = []
  }

  depends_on = [
    aws_cloudfront_distribution.cdn_multi_website,
    aws_ecs_service.cms_multitenant_ecs_service,
    aws_alb.cms_load_balancer
  ]


  dashboard_body = templatefile("${path.module}/templates/cloudwatch_dashboard.json", {
    distribution_id        = aws_cloudfront_distribution.cdn_multi_website[each.key].id
    aws_region             = var.aws_region
    ecs_service_name       = aws_ecs_service.cms_multitenant_ecs_service[each.key].name
    ecs_cluster_name       = aws_ecs_cluster.cms_ecs_cluster.name
    rds_cluster_identifier = aws_rds_cluster.cms_database_cluster.cluster_identifier
    alb_arn_suffix         = aws_alb.cms_load_balancer.arn_suffix
  })
}