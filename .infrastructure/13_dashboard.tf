resource "aws_cloudwatch_dashboard" "main" {
  dashboard_name = "Main"

  dashboard_body = jsonencode({
    widgets = [
      {
        "height" : 1,
        "width" : 16,
        "y" : 0,
        "x" : 0,
        "type" : "text",
        "properties" : {
          "markdown" : "## Cloudfront\n"
        }
      },
      {
        "height" : 6,
        "width" : 6,
        "y" : 1,
        "x" : 0,
        "type" : "metric",
        "properties" : {
          "view" : "timeSeries",
          "stacked" : false,
          "metrics" : [
            ["AWS/CloudFront", "Requests", "Region", "Global", "DistributionId", aws_cloudfront_distribution.website.id, { "region" : "eu-south-1" }]
          ],
          "region" : var.aws_region,
          "title" : "# Requests"
        }
      },
      {
        "height" : 6,
        "width" : 6,
        "y" : 1,
        "x" : 6,
        "type" : "metric",
        "properties" : {
          "view" : "timeSeries",
          "stacked" : false,
          "region" : var.aws_region,
          "stat" : "Average",
          "period" : 300,
          "metrics" : [
            ["AWS/CloudFront", "TotalErrorRate", "Region", "Global", "DistributionId", aws_cloudfront_distribution.website.id, { "region" : "eu-south-1" }],
            [".", "4xxErrorRate", ".", ".", ".", ".", { "region" : "eu-south-1" }],
            [".", "5xxErrorRate", ".", ".", ".", ".", { "region" : "eu-south-1" }]
          ],
          "title" : "Error Rate"
        }
      },
      {
        "height" : 6,
        "width" : 4,
        "y" : 1,
        "x" : 12,
        "type" : "metric",
        "properties" : {
          "view" : "singleValue",
          "stacked" : false,
          "region" : var.aws_region,
          "stat" : "Average",
          "period" : 300,
          "metrics" : [
            ["AWS/CloudFront", "FunctionInvocations", "FunctionName", "rewrite-request", "Region", "Global", "DistributionId", aws_cloudfront_distribution.website.id, { "region" : "eu-south-1" }]
          ],
          "title" : "Rewrite Function"
        }
      },
      {
        "height" : 1,
        "width" : 12,
        "y" : 14,
        "x" : 0,
        "type" : "text",
        "properties" : {
          "markdown" : "## ECS (Fargate) Strapi CMS\n"
        }
      },
      {
        "height" : 6,
        "width" : 6,
        "y" : 15,
        "x" : 0,
        "type" : "metric",
        "properties" : {
          "metrics" : [
            [{ "expression" : "ANOMALY_DETECTION_BAND(m1, 2)", "label" : "BandAnomalyDetection", "id" : "e1" }],
            ["AWS/ECS", "CPUUtilization", "ServiceName", aws_ecs_service.cms_ecs_service.name, "ClusterName", aws_ecs_cluster.cms_ecs_cluster.name, { "id" : "m1" }]
          ],
          "view" : "timeSeries",
          "stacked" : false,
          "region" : var.aws_region,
          "stat" : "Average",
          "period" : 300,
          "title" : "CPU Utilization"
        }
      },
      {
        "height" : 6,
        "width" : 6,
        "y" : 15,
        "x" : 6,
        "type" : "metric",
        "properties" : {
          "metrics" : [
            [{ "expression" : "ANOMALY_DETECTION_BAND(m1, 2)", "label" : "BandAnomalyDetection", "id" : "e1" }],
            ["AWS/ECS", "MemoryUtilization", "ServiceName", aws_ecs_service.cms_ecs_service.name, "ClusterName", aws_ecs_cluster.cms_ecs_cluster.name, { "id" : "m1" }]
          ],
          "view" : "timeSeries",
          "stacked" : false,
          "region" : var.aws_region,
          "stat" : "Average",
          "period" : 300,
          "title" : "Memory Utilization"
        }
      },
      {
        "height" : 1,
        "width" : 12,
        "y" : 7,
        "x" : 12,
        "type" : "text",
        "properties" : {
          "markdown" : "## Aurora RDS (PostgreSql)\n"
        }
      },
      {
        "height" : 6,
        "width" : 6,
        "y" : 8,
        "x" : 12,
        "type" : "metric",
        "properties" : {
          "metrics" : [
            [{ "expression" : "ANOMALY_DETECTION_BAND(m1, 2)", "label" : "Anomaly Detection", "id" : "e1", "region" : var.aws_region }],
            ["AWS/RDS", "CPUUtilization", "DBClusterIdentifier", aws_rds_cluster.cms_database_cluster.cluster_identifier, { "id" : "m1" }]
          ],
          "view" : "timeSeries",
          "stacked" : false,
          "region" : var.aws_region,
          "stat" : "Average",
          "period" : 300,
          "title" : "CPU Utilization"
        }
      },
      {
        "height" : 6,
        "width" : 6,
        "y" : 14,
        "x" : 18,
        "type" : "metric",
        "properties" : {
          "metrics" : [
            [{ "expression" : "ANOMALY_DETECTION_BAND(m1, 2)", "label" : "AnomalyDetection", "id" : "e1" }],
            ["AWS/RDS", "ACUUtilization", "DBClusterIdentifier", aws_rds_cluster.cms_database_cluster.cluster_identifier, { "id" : "m1" }]
          ],
          "view" : "timeSeries",
          "stacked" : false,
          "region" : var.aws_region,
          "stat" : "Average",
          "period" : 300,
          "title" : "ACU Utilization"
        }
      },
      {
        "height" : 6,
        "width" : 6,
        "y" : 14,
        "x" : 12,
        "type" : "metric",
        "properties" : {
          "view" : "timeSeries",
          "stacked" : false,
          "metrics" : [
            ["AWS/RDS", "VolumeBytesUsed", "DBClusterIdentifier", aws_rds_cluster.cms_database_cluster.cluster_identifier]
          ],
          "region" : var.aws_region,
          "title" : "Volume Bytes Used"
        }
      },
      {
        "height" : 6,
        "width" : 6,
        "y" : 8,
        "x" : 18,
        "type" : "metric",
        "properties" : {
          "metrics" : [
            ["AWS/RDS", "DatabaseConnections", "DBClusterIdentifier", aws_rds_cluster.cms_database_cluster.cluster_identifier]
          ],
          "view" : "timeSeries",
          "stacked" : false,
          "region" : var.aws_region,
          "stat" : "Average",
          "period" : 300,
          "title" : "DatabaseConnections"
        }
      },
      {
        "height" : 6,
        "width" : 6,
        "y" : 8,
        "x" : 0,
        "type" : "metric",
        "properties" : {
          "view" : "timeSeries",
          "stacked" : false,
          "metrics" : [
            ["AWS/ApplicationELB", "HTTP_Redirect_Count", "LoadBalancer", aws_alb.cms_load_balancer.name]
          ],
          "region" : var.aws_region,
          "title" : "HTTP Redirect Count"
        }
      },
      {
        "height" : 1,
        "width" : 12,
        "y" : 7,
        "x" : 0,
        "type" : "text",
        "properties" : {
          "markdown" : "##  Application Loadbalancer \n"
        }
      },
      {
        "height" : 6,
        "width" : 6,
        "y" : 8,
        "x" : 6,
        "type" : "metric",
        "properties" : {
          "view" : "timeSeries",
          "stacked" : false,
          "region" : var.aws_region,
          "metrics" : [
            ["AWS/ApplicationELB", "ActiveConnectionCount", "LoadBalancer", aws_alb.cms_load_balancer.name]
          ],
          "title" : "ActiveConnectionCount"
        }
      }
    ]
  })
}