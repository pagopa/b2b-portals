data "aws_caller_identity" "current" {}

locals {
  account_id = data.aws_caller_identity.current.account_id
}

resource "aws_s3_bucket" "website-asset-bucket" {
  bucket = "media-library-s3-strapi-${local.account_id}"
}

resource "aws_s3_bucket_public_access_block" "website-asset-bucket" {
  bucket                  = aws_s3_bucket.website-asset-bucket.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_versioning" "website-asset-bucket" {
  bucket = aws_s3_bucket.website-asset-bucket.id
  versioning_configuration {
    status = "Enabled"
  }
}

data "aws_iam_policy_document" "website_iam_policy" {
  statement {
    actions = ["s3:GetObject", "s3:ListBucket"]
    resources = [
      "${aws_s3_bucket.website-asset-bucket.arn}",
      "${aws_s3_bucket.website-asset-bucket.arn}/*"
    ]
  }
}
