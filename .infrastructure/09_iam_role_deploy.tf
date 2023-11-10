data "aws_caller_identity" "current" {}

###############################################################################
#                      IAM Role to use on deploy website                       #
###############################################################################
resource "aws_iam_role" "deploy_website" {
  name        = "GitHubActionDeployWebsite"
  description = "Role to assume to deploy the website"
}

resource "aws_iam_policy" "deploy_github" {
  name        = "DeployGitHub"
  description = "Policy to allow to deploy from GitHub"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow",
        Principal = {
          "Federated" : "arn:aws:iam::${data.aws_caller_identity.current.account_id}:oidc-provider/token.actions.githubusercontent.com"
        },
        Action = "sts:AssumeRoleWithWebIdentity",
        Condition = {
          StringLike = {
            "token.actions.githubusercontent.com:sub" : "repo:${var.github_repository}:*"
          },
          "ForAllValues:StringEquals" = {
            "token.actions.githubusercontent.com:iss" : "https://token.actions.githubusercontent.com",
            "token.actions.githubusercontent.com:aud" : "sts.amazonaws.com"
          }
        }
      }
    ]
  })
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
        Resource = [
          aws_cloudfront_distribution.website.arn
        ]
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "deploy_website" {
  role       = aws_iam_role.deploy_website.name
  policy_arn = aws_iam_policy.deploy_website.arn
}

resource "aws_iam_role_policy_attachment" "deploy_website_github" {
  role       = aws_iam_role.deploy_website.name
  policy_arn = aws_iam_policy.deploy_github.arn
}

###############################################################################
#                      IAM Role to use on deploy CMS                       #
###############################################################################
resource "aws_iam_role" "deploy_ecs" {
  name        = "GitHubActionDeployECS"
  description = "Role to assume to deploy on ECS."
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
            "ecs:UpdateService"
        ]
        Effect = "Allow"
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

resource "aws_iam_role_policy_attachment" "deploy_ecs" {
  role       = aws_iam_role.deploy_ecs.name
  policy_arn = aws_iam_policy.deploy_ecs.arn
}

resource "aws_iam_role_policy_attachment" "deploy_ecs_github" {
  role       = aws_iam_role.deploy_ecs.name
  policy_arn = aws_iam_policy.deploy_github.arn
}