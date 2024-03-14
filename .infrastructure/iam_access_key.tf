resource "aws_iam_access_key" "strapi" {
  user = aws_iam_user.strapi.name
}
