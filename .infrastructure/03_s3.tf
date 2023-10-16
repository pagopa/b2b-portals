resource "random_integer" "bucket_random_integer" {
  min = 1
  max = 9999
}

### Bucket S3 for Media Library Strapi ###

resource "aws_s3_bucket" "cms_medialibrary_bucket" {
  bucket = "cms-medialibrary-${random_integer.bucket_random_integer.result}"
}

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
