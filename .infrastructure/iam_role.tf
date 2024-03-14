resource "aws_iam_role" "ecs_task_execution_role" {
  name = "ecs-task-execution-role"

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

}

resource "aws_iam_role_policy_attachment" "ecs_task_execution" {
  role       = aws_iam_role.ecs_task_execution_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

resource "aws_iam_role_policy_attachment" "ec2_container_registery_policies" {
  role       = aws_iam_role.ecs_task_execution_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
}

resource "aws_iam_role_policy_attachment" "ecs_task_execution_policy" {
  role       = aws_iam_role.ecs_task_execution_role.name
  policy_arn = aws_iam_policy.ecs_task_execution.arn
}

data "aws_iam_policy_document" "ecs_task_execution" {
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
      aws_ssm_parameter.cms_database_password.arn,
      aws_ssm_parameter.cms_admin_jwt_secret.arn,
      aws_ssm_parameter.cms_app_keys.arn,
      aws_ssm_parameter.cms_api_token_salt.arn,
      aws_ssm_parameter.cms_transfer_token_salt.arn,
      aws_ssm_parameter.cms_jwt_secret.arn,
      aws_ssm_parameter.cms_access_key_id.arn,
      aws_ssm_parameter.cms_access_key_secret.arn,
      aws_ssm_parameter.cms_github_pat.arn
    ]
  }

  statement {
    effect = "Allow"
    actions = [
      "s3:GetBucketLocation"
    ]
    resources = [
      "${aws_s3_bucket.cms_medialibrary_bucket.arn}"
    ]
  }
}

resource "aws_iam_policy" "ecs_task_execution" {
  name   = "CMSTaskExecutionPolicies"
  path   = "/"
  policy = data.aws_iam_policy_document.ecs_task_execution.json
}

resource "aws_iam_role" "task_role" {
  name               = "ecs-task-role"
  assume_role_policy = data.aws_iam_policy_document.task_role.json
}

data "aws_iam_policy_document" "task_role" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
  }
}

resource "aws_iam_role_policy_attachment" "ecs_container_ec2" {
  role       = aws_iam_role.task_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role"
}

data "aws_iam_policy_document" "ecs_task_role_s3" {
  statement {
    effect = "Allow"
    actions = [
      "s3:DeleteObject",
      "s3:GetObject",
      "s3:GetObjectAttributes",
      "s3:ListBucket",
      "s3:PutObject",
      "s3:PutObjectAcl"
    ]
    resources = [
      "${aws_s3_bucket.cms_medialibrary_bucket.arn}"
    ]
  }
}

resource "aws_iam_policy" "ecs_task_role_s3" {
  name   = "CMSTaskRolePoliciesS3"
  path   = "/"
  policy = data.aws_iam_policy_document.ecs_task_role_s3.json
}

resource "aws_iam_role_policy_attachment" "ecs_container_s3" {
  role       = aws_iam_role.task_role.name
  policy_arn = aws_iam_policy.ecs_task_role_s3.arn
}

###############################################################################
#                      IAM Role to use on deploy CMS                       #
###############################################################################
resource "aws_iam_role" "deploy_ecs" {
  name               = "GitHubActionDeployECS"
  description        = "Role to assume to deploy on ECS."
  assume_role_policy = data.aws_iam_policy_document.deploy_github.json
}

resource "aws_iam_role_policy_attachment" "deploy_ecs" {
  role       = aws_iam_role.deploy_ecs.name
  policy_arn = aws_iam_policy.deploy_ecs.arn
}

###############################################################################
#                      IAM Role to use on deploy website                       #
###############################################################################
resource "aws_iam_role" "deploy_website" {
  name               = "GitHubActionDeployWebsite"
  description        = "Role to assume to deploy the website"
  assume_role_policy = data.aws_iam_policy_document.deploy_github.json
}

resource "aws_iam_role_policy_attachment" "deploy_website" {
  role       = aws_iam_role.deploy_website.name
  policy_arn = aws_iam_policy.deploy_website.arn
}
