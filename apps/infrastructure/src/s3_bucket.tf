resource "random_integer" "bucket_random_integer" {
  min = 1
  max = 9999
}

### Bucket S3 for Cms' Media Library ###
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

resource "aws_s3_bucket_policy" "cloudfront_cms" {
  bucket = aws_s3_bucket.cms_medialibrary_bucket.id
  policy = data.aws_iam_policy_document.cms_iam_policy.json
}

## Infra for Static Site on AWS
resource "random_integer" "website_bucket_random_integer" {
  min = 1
  max = 9999
}

resource "aws_s3_bucket" "website" {
  bucket = "website-bucket-${random_integer.website_bucket_random_integer.result}"
}

resource "aws_s3_bucket_public_access_block" "website" {
  bucket                  = aws_s3_bucket.website.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_versioning" "website" {
  bucket = aws_s3_bucket.website.id
  versioning_configuration {
    status = "Disabled"
  }
}

resource "aws_s3_bucket_policy" "cloudfront" {
  bucket = aws_s3_bucket.website.id
  policy = data.aws_iam_policy_document.website_iam_policy.json
}

