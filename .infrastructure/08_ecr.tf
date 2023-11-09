resource "aws_ecr_repository" "strapi_image_repository" {
  name = "strapi"

  image_tag_mutability = "IMMUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}

resource "aws_ecr_lifecycle_policy" "strapi_policy" {
  repository = aws_ecr_repository.strapi_image_repository.name

  policy = <<EOF
  {
      "rules": [
          {
              "rulePriority": 1,
              "description": "Keep last 5 images",
              "selection": {
                  "tagStatus": "any",
                  "countType": "imageCountMoreThan",
                  "countNumber": 5
              },
              "action": {
                  "type": "expire"
              }
          }
      ]
  }
  EOF
}
