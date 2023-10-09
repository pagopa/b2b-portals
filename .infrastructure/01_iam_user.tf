resource "aws_iam_user" "mauro" {
  name = "mauro"

  tags = {
    ExternalCompany = "DGS"
  }
}
