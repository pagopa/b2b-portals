resource "aws_iam_user" "mauro_dandrea" {
  name = "mauro.dandrea@dgsspa.com"

  tags = {
    ExternalCompany = "DGS"
  }
}
