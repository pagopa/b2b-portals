resource "aws_iam_role" "ecs-task-execution-role" {
  name = "ecs_task_execution_role"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "ecs-tasks.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF

  tags = {
    tag-key = "tag-value"
  }
}

resource "aws_iam_role_policy_attachment" "ecs-task-execution" {
  role       = aws_iam_role.ecs-task-execution-role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

resource "aws_iam_role_policy_attachment" "ec2_container_registery_policies" {
  role       = aws_iam_role.ecs-task-execution-role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
}

resource "aws_iam_role_policy_attachment" "ecs-task-execution-policy" {
  role       = aws_iam_role.ecs-task-execution-role.name
  policy_arn = aws_iam_policy.ecs-task-execution.arn
}

data "aws_iam_policy_document" "ecs-task-execution" {
  statement {
    effect = "Allow"
    actions = [
      "ssm:DescribeParameters"
    ]
    resources = ["*"]
  }

  statement {
    effect = "Allow"
    actions = [
      "ssm:GetParameters"
    ]
    resources = [
      aws_ssm_parameter.db_password.arn,
      aws_ssm_parameter.github_token.arn,
      aws_ssm_parameter.admin_jwt_secret.arn,
    ]
  }

  statement {
    effect = "Allow"
    actions = [
      "s3:GetObject"
    ]
    resources = [
      "${aws_s3_bucket.website-asset-bucket.arn}/.env"
    ]
  }

  statement {
    effect = "Allow"
    actions = [
      "s3:GetBucketLocation"
    ]
    resources = [
      "${aws_s3_bucket.website-asset-bucket.arn}"
    ]
  }
}

resource "aws_iam_policy" "ecs-task-execution" {
  name   = "WebsiteTaskExecutionPolicies"
  path   = "/"
  policy = data.aws_iam_policy_document.ecs-task-execution.json
}