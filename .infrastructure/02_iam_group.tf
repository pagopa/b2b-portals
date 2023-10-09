# External devs read only group
resource "aws_iam_group" "external_developers_read_only" {
  name = "external_developers_read_only"
}

# IAM Group Policy Read Only
resource "aws_iam_group_policy" "external_developers" {
  name  = "external_developers_policy"
  group = aws_iam_group.external_developers_read_only.name

  # Terraform's "jsonencode" function converts a
  # Terraform expression result to valid JSON syntax.
  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Effect" : "Allow",
        "Action" : [
          # S3
          "s3:ListBucket",
          "s3:GetObject*"
        ],
        "Resource" : [
          # Here we are going to list the S3 buckets
          "*"
        ]
      }
    ]
  })
}

# IAM Group Membership - DGS
resource "aws_iam_group_membership" "dgs" {
  name = "DGS"

  users = [
    aws_iam_user.mauro.name
  ]

  group = aws_iam_group.external_developers_read_only.name
}
