resource "aws_iam_user" "mauro" {
  name = "mauro.dandrea@dgsspa.com"

  tags = {
    ExternalCompany = "DGS"
  }
}
