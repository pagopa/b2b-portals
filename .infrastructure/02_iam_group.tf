# External devs read only group
resource "aws_iam_group" "external_developers_read_only" {
  name = "external_developers_read_only"
}

# IAM Group Membership - DGS
resource "aws_iam_group_membership" "dgs" {
  name = "DGS"

  users = [
    aws_iam_user.mauro.name
  ]

  group = aws_iam_group.external_developers_read_only.name
}

resource "aws_iam_group_policy_attachment" "read_only" {
  group = aws_iam_group.external_developers_read_only.name
  # The AWS ReadOnly Access Policy
  policy_arn = "arn:aws:iam::aws:policy/ReadOnlyAccess"
}
