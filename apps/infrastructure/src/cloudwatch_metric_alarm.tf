# ECS
module "ecs_cpu_alarm" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-cloudwatch.git//modules/metric-alarm?ref=0b4aa2b9aa19060205965a938de89a7bf0ff477b" # v5.1.0

  for_each = {
    for key, config in var.websites_configs :
    key => config
  }

  alarm_name        = "${each.key} | CMS | ECS CPU Utilization"
  actions_enabled   = true
  alarm_description = "This alarm monitors the percentage of ECS CPU Utilization"
  metric_name       = "CPUUtilization"
  namespace         = "AWS/ECS"

  comparison_operator = "GreaterThanThreshold"
  threshold           = 80
  statistic           = "Average"
  period              = 60 # 1 minute
  evaluation_periods  = 5
  datapoints_to_alarm = 5
  treat_missing_data  = "notBreaching" # No data in the period is considered as good.

  dimensions = {
    ServiceName = aws_ecs_service.cms_multitenant_ecs_service[each.key].name
    ClusterName = aws_ecs_cluster.cms_ecs_cluster.name
  }
}

module "ecs_memory_alarm" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-cloudwatch.git//modules/metric-alarm?ref=0b4aa2b9aa19060205965a938de89a7bf0ff477b" # v5.1.0

  for_each = {
    for key, config in var.websites_configs :
    key => config
  }

  alarm_name        = "${each.key} | CMS | ECS Memory Utilization"
  actions_enabled   = true
  alarm_description = "This alarm monitors the percentage of ECS Memory Utilization"
  metric_name       = "MemoryUtilization"
  namespace         = "AWS/ECS"

  comparison_operator = "GreaterThanThreshold"
  threshold           = 80
  statistic           = "Average"
  period              = 60 # 1 minute
  evaluation_periods  = 5
  datapoints_to_alarm = 5
  treat_missing_data  = "notBreaching" # No data in the period is considered as good.

  dimensions = {
    ServiceName = aws_ecs_service.cms_multitenant_ecs_service[each.key].name
    ClusterName = aws_ecs_cluster.cms_ecs_cluster.name
  }
}

# RDS
module "rds_cpu_alarm" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-cloudwatch.git//modules/metric-alarm?ref=0b4aa2b9aa19060205965a938de89a7bf0ff477b" # v5.1.0

  alarm_name        = "Strapi | CMS | RDS CPU Utilization"
  actions_enabled   = true
  alarm_description = "This alarm monitors the percentage of RDS CPU Utilization"
  metric_name       = "CPUUtilization"
  namespace         = "AWS/RDS"

  comparison_operator = "GreaterThanThreshold"
  threshold           = 80
  statistic           = "Average"
  period              = 60 # 1 minute
  evaluation_periods  = 5
  datapoints_to_alarm = 5
  treat_missing_data  = "notBreaching" # No data in the period is considered as good.

  dimensions = {
    DBClusterIdentifier = aws_rds_cluster.cms_database_cluster.cluster_identifier
  }
}

module "rds_acu_alarm" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-cloudwatch.git//modules/metric-alarm?ref=0b4aa2b9aa19060205965a938de89a7bf0ff477b" # v5.1.0

  alarm_name        = "Strapi | CMS | RDS ACU Utilization"
  actions_enabled   = true
  alarm_description = "This alarm monitors the percentage of RDS ACU Utilization"
  metric_name       = "ACUUtilization"
  namespace         = "AWS/RDS"

  comparison_operator = "GreaterThanThreshold"
  threshold           = 80
  statistic           = "Average"
  period              = 60 # 1 minute
  evaluation_periods  = 5
  datapoints_to_alarm = 5
  treat_missing_data  = "notBreaching" # No data in the period is considered as good.

  dimensions = {
    DBClusterIdentifier = aws_rds_cluster.cms_database_cluster.cluster_identifier
  }
}

# ALB
module "alb_error_5xx_alarm" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-cloudwatch.git//modules/metric-alarm?ref=0b4aa2b9aa19060205965a938de89a7bf0ff477b" # v5.1.0

  alarm_name        = "Strapi | CMS | ALB Error 5XX"
  actions_enabled   = true
  alarm_description = "This alarm monitors the percentage of 5xx error responses from ALB"
  metric_name       = "HTTPCode_ELB_5XX_Count"
  namespace         = "AWS/ApplicationELB"

  comparison_operator = "GreaterThanThreshold"
  threshold           = 30
  statistic           = "Average"
  period              = 60 # 1 minute
  evaluation_periods  = 5
  datapoints_to_alarm = 5
  treat_missing_data  = "notBreaching" # No data in the period is considered as good.

  dimensions = {
    LoadBalancer = aws_alb.cms_load_balancer.arn_suffix
  }
}

module "alb_error_4xx_alarm" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-cloudwatch.git//modules/metric-alarm?ref=0b4aa2b9aa19060205965a938de89a7bf0ff477b" # v5.1.0

  alarm_name        = "Strapi | CMS | ALB Error 4XX"
  actions_enabled   = true
  alarm_description = "This alarm monitors the percentage of 4xx error responses from ALB"
  metric_name       = "HTTPCode_ELB_4XX_Count"
  namespace         = "AWS/ApplicationELB"

  comparison_operator = "GreaterThanThreshold"
  threshold           = 30
  statistic           = "Average"
  period              = 60 # 1 minute
  evaluation_periods  = 5
  datapoints_to_alarm = 5
  treat_missing_data  = "notBreaching" # No data in the period is considered as good.

  dimensions = {
    LoadBalancer = aws_alb.cms_load_balancer.arn_suffix
  }
}

# CDN
module "cloudfront_5xx_error_rate_alarm" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-cloudwatch.git//modules/metric-alarm?ref=0b4aa2b9aa19060205965a938de89a7bf0ff477b" # v5.1.0

  for_each = {
    for key, config in var.websites_configs :
    key => config
    if config.create_distribution
  }

  alarm_name        = "${each.key} | Website | CloudFront 5xxErrorRate"
  actions_enabled   = true
  alarm_description = "This alarm monitors the percentage of 5xx error responses from origin server"
  metric_name       = "5xxErrorRate"
  namespace         = "AWS/CloudFront"

  comparison_operator = "GreaterThanThreshold"
  threshold           = 30 # 30%
  statistic           = "Average"
  period              = 60 # 1 minute
  evaluation_periods  = 5
  datapoints_to_alarm = 5
  treat_missing_data  = "notBreaching" # No data in the period is considered as good.

  dimensions = {
    DistributionId = aws_cloudfront_distribution.cdn_multi_website[each.key].id
    Region         = "Global" # Global because CloudFront is a global service
  }
}

module "cloudfront_origin_latency_alarm" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-cloudwatch.git//modules/metric-alarm?ref=0b4aa2b9aa19060205965a938de89a7bf0ff477b" # v5.1.0

  for_each = {
    for key, config in var.websites_configs :
    key => config
    if config.create_distribution
  }

  alarm_name        = "${each.key} | Website | CloudFront Origin Latency"
  actions_enabled   = true
  alarm_description = "This alarm is used to detect problems with the origin server taking too long to respond"
  metric_name       = "OriginLatency"
  namespace         = "AWS/CloudFront"

  comparison_operator = "GreaterThanThreshold"
  threshold           = 24 # 80% of 30. 30s is the default value. 80% is the threshold suggested by AWS
  extended_statistic  = "p90"
  period              = 60 # 1 minute
  evaluation_periods  = 5
  datapoints_to_alarm = 5
  treat_missing_data  = "notBreaching" # No data in the period is considered as good.

  dimensions = {
    DistributionId = aws_cloudfront_distribution.cdn_multi_website[each.key].id
    Region         = "Global" # Global because CloudFront is a global service
  }
}

module "cloudfront_function_validation_errors_alarm" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-cloudwatch.git//modules/metric-alarm?ref=0b4aa2b9aa19060205965a938de89a7bf0ff477b" # v5.1.0

  for_each = {
    for key, config in var.websites_configs :
    key => config
    if config.create_distribution
  }

  alarm_name        = "${each.key} | Website | CloudFront Function | FunctionValidationErrors"
  actions_enabled   = true
  alarm_description = "This alarm is used to detect validation errors from CloudFront functions"
  metric_name       = "FunctionValidationErrors"
  namespace         = "AWS/CloudFront"

  comparison_operator = "GreaterThanThreshold"
  threshold           = 0.0
  statistic           = "Sum"
  period              = 60 # 1 minute
  evaluation_periods  = 2
  datapoints_to_alarm = 2
  treat_missing_data  = "notBreaching" # No data in the period is considered as good.

  dimensions = {
    DistributionId = aws_cloudfront_distribution.cdn_multi_website[each.key].id
    Region         = "Global" # Global because CloudFront is a global service
    FunctionName   = aws_cloudfront_function.website_viewer_request_handler.name
  }
}

module "cloudfront_function_execution_errors_alarm" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-cloudwatch.git//modules/metric-alarm?ref=0b4aa2b9aa19060205965a938de89a7bf0ff477b" # v5.1.0

  for_each = {
    for key, config in var.websites_configs :
    key => config
    if config.create_distribution
  }

  alarm_name        = "${each.key} | Website | CloudFront Function | Execution Errors"
  actions_enabled   = true
  alarm_description = "This alarm is used to detect execution errors from CloudFront functions"
  metric_name       = "FunctionExecutionErrors"
  namespace         = "AWS/CloudFront"

  comparison_operator = "GreaterThanThreshold"
  threshold           = 0.0
  statistic           = "Sum"
  period              = 60 # 1 minute
  evaluation_periods  = 5
  datapoints_to_alarm = 5
  treat_missing_data  = "notBreaching" # No data in the period is considered as good.

  dimensions = {
    DistributionId = aws_cloudfront_distribution.cdn_multi_website[each.key].id
    Region         = "Global" # Global because CloudFront is a global service
    FunctionName   = aws_cloudfront_function.website_viewer_request_handler.name
  }
}

module "cloudfront_function_throttled_alarm" {
  source = "git::https://github.com/terraform-aws-modules/terraform-aws-cloudwatch.git//modules/metric-alarm?ref=0b4aa2b9aa19060205965a938de89a7bf0ff477b" # v5.1.0

  for_each = {
    for key, config in var.websites_configs :
    key => config
    if config.create_distribution
  }

  alarm_name        = "${each.key} | Website | CloudFront Function | Throttle"
  actions_enabled   = true
  alarm_description = "This alarm can detect when the CloudFront function is taking too long to respond"
  metric_name       = "FunctionThrottles"
  namespace         = "AWS/CloudFront"

  comparison_operator = "GreaterThanThreshold"
  threshold           = 0.0
  statistic           = "Sum"
  period              = 60 # 1 minute
  evaluation_periods  = 5
  datapoints_to_alarm = 5
  treat_missing_data  = "notBreaching" # No data in the period is considered as good.

  dimensions = {
    DistributionId = aws_cloudfront_distribution.cdn_multi_website[each.key].id
    Region         = "Global" # Global because CloudFront is a global service
    FunctionName   = aws_cloudfront_function.website_viewer_request_handler.name
  }
}