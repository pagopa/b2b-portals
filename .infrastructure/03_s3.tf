data "aws_caller_identity" "current" {}

locals {
  account_id = data.aws_caller_identity.current.account_id
}

resource "aws_s3_bucket" "cms_medialibrary_bucket" {
  bucket = "media-library-s3-strapi-${local.account_id}"
}

### Bucket S3 for Media Library Strapi ###

resource "aws_s3_bucket_public_access_block" "cms_medialibrary_bucket" {
  bucket                  = aws_s3_bucket.cms_medialibrary_bucket.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_versioning" "cms_medialibrary_bucket" {
  bucket = aws_s3_bucket.cms_medialibrary_bucket.id
  versioning_configuration {
    status = "Enabled"
  }
}
