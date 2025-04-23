### Necessary to Strapi for Upload and Download object to/from Media Library S3
resource "aws_iam_user" "strapi" {
  name = "Strapi"
}
