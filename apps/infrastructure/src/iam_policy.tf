data "aws_caller_identity" "current" {}

data "aws_iam_policy_document" "deploy_github" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRoleWithWebIdentity"]
    principals {
      type        = "Federated"
      identifiers = ["arn:aws:iam::${data.aws_caller_identity.current.account_id}:oidc-provider/token.actions.githubusercontent.com"]
    }

    condition {
      test     = "StringLike"
      variable = "token.actions.githubusercontent.com:sub"
      values   = ["repo:${var.github_repository}:*"]
    }

    condition {
      test     = "ForAllValues:StringEquals"
      variable = "token.actions.githubusercontent.com:iss"
      values   = ["https://token.actions.githubusercontent.com"]
    }

    condition {
      test     = "ForAllValues:StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }
  }
}

data "aws_iam_policy_document" "cms_iam_policy" {
  statement {
    actions = ["s3:GetObject", "s3:ListBucket"]
    resources = [
      aws_s3_bucket.cms_medialibrary_bucket.arn,
      "${aws_s3_bucket.cms_medialibrary_bucket.arn}/*"
    ]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.main.iam_arn]
    }
  }
}

data "aws_iam_policy_document" "cms_multitenant_iam_policy" {
  for_each = {
    for key, config in var.websites_configs :
    key => config
  }
  statement {
    actions = ["s3:GetObject", "s3:ListBucket"]
    resources = [aws_s3_bucket.cms_multitenant_medialibrary_bucket[each.key].arn,
      "${aws_s3_bucket.cms_multitenant_medialibrary_bucket[each.key].arn}/*"
    ]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.main.iam_arn]
    }
  }
}

data "aws_iam_policy_document" "website_iam_policy" {
  statement {
    actions = ["s3:GetObject", "s3:ListBucket"]
    resources = [
      "${aws_s3_bucket.website.arn}",
      "${aws_s3_bucket.website.arn}/*"
    ]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.main.iam_arn]
    }
  }
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
    resources = concat(
      [aws_s3_bucket.cms_medialibrary_bucket.arn],
      [for name, bucket in aws_s3_bucket.cms_multitenant_medialibrary_bucket : bucket.arn]
    )
  }
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
    resources = concat(
      [aws_ssm_parameter.cms_database_password.arn,
        aws_ssm_parameter.cms_admin_jwt_secret.arn,
        aws_ssm_parameter.cms_app_keys.arn,
        aws_ssm_parameter.cms_api_token_salt.arn,
        aws_ssm_parameter.cms_transfer_token_salt.arn,
        aws_ssm_parameter.cms_jwt_secret.arn,
        aws_ssm_parameter.cms_access_key_id.arn,
        aws_ssm_parameter.cms_access_key_secret.arn,
        aws_ssm_parameter.cms_github_pat.arn,
        aws_ssm_parameter.strapi_api_token.arn,
      aws_ssm_parameter.preview_token.arn],
      [for name, parameter in aws_ssm_parameter.cms_multitenant_api_token_salt : parameter.arn]
    )
  }

  statement {
    effect = "Allow"
    actions = [
      "s3:GetBucketLocation"
    ]
    resources = concat(
      [aws_s3_bucket.cms_medialibrary_bucket.arn],
      [for name, bucket in aws_s3_bucket.cms_multitenant_medialibrary_bucket : bucket.arn]
    )
  }
}


resource "aws_iam_policy" "deploy_website" {
  name        = "DeployWebsite"
  description = "Policy to allow to deploy the website"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "s3:PutObject",
          "s3:GetObject",
          "s3:PutObjectAcl",
          "s3:DeleteObject"
        ]
        Effect = "Allow"
        Resource = [
          format("%s/*", aws_s3_bucket.website.arn)
        ]
      },
      {
        Action = [
          "s3:ListBucket"
        ]
        Effect = "Allow"
        Resource = [
          aws_s3_bucket.website.arn
        ]
      },
      {
        Action = [
          "cloudfront:CreateInvalidation"
        ]
        Effect = "Allow"
        Resource = concat(
          [aws_cloudfront_distribution.storybook.arn],
          [for name, distribution in aws_cloudfront_distribution.cdn_multi_website : distribution.arn]
        )
      }
    ]
  })
}

resource "aws_iam_policy" "deploy_ecs" {
  name        = "DeployECS"
  description = "Policy to allow deploy on ECS."

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "ecs:DescribeTaskDefinition",
          "ecs:RegisterTaskDefinition",
          "ecs:DescribeServices",
          "ecs:UpdateService",
          "ecr:GetAuthorizationToken",
          "ecr:CompleteLayerUpload",
          "ecr:GetAuthorizationToken",
          "ecr:UploadLayerPart",
          "ecr:InitiateLayerUpload",
          "ecr:BatchCheckLayerAvailability",
          "ecr:PutImage",
          "ecr:BatchGetImage"
        ]
        Effect   = "Allow"
        Resource = "*"
      },
      {
        Action = [
          "iam:PassRole"
        ]
        Effect = "Allow"
        Resource = [
          aws_iam_role.ecs_task_execution_role.arn,
          aws_iam_role.task_role.arn
        ]
      }
    ]
  })
}

resource "aws_iam_policy" "upload_image" {
  name        = "S3UploadImages"
  path        = "/"
  description = "Policy to allow to manage files in S3 bucket"

  # Terraform's "jsonencode" function converts a
  # Terraform expression result to valid JSON syntax.
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "s3:DeleteObject",
          "s3:GetObject",
          "s3:GetObjectAttributes",
          "s3:ListBucket",
          "s3:PutObject"
        ]
        Effect = "Allow"
        Resource = concat(
          ["${aws_s3_bucket.cms_medialibrary_bucket.arn}/*"],
          [for name, bucket in aws_s3_bucket.cms_multitenant_medialibrary_bucket : "${bucket.arn}/*"]
        )
      },
    ]
  })
}

resource "aws_iam_policy_attachment" "strapi-policy" {
  name       = "strapi-policy"
  users      = [aws_iam_user.strapi.name]
  policy_arn = aws_iam_policy.upload_image.arn
}

resource "aws_iam_policy" "ecs_task_execution" {
  name   = "CMSTaskExecutionPolicies"
  path   = "/"
  policy = data.aws_iam_policy_document.ecs_task_execution.json
}

resource "aws_iam_policy" "ecs_task_role_s3" {
  name   = "CMSTaskRolePoliciesS3"
  path   = "/"
  policy = data.aws_iam_policy_document.ecs_task_role_s3.json
}

resource "aws_iam_policy" "logs_ecs" {
  name        = "LogECS"
  description = "Policy to allow Logs in ECS."

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents",
          "logs:DescribeLogStreams"
        ]
        Effect   = "Allow"
        Resource = [aws_cloudwatch_log_group.nextjs_ecs_task.arn, aws_cloudwatch_log_group.strapi_ecs_task.arn]
      }
    ]
  })
}