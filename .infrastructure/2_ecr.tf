resource "aws_ecr_repository" "image-repository" {
  name = var.ecr_repository

  image_scanning_configuration {
    scan_on_push = true
  }
}

resource "aws_ecr_lifecycle_policy" "policy" {
  repository = aws_ecr_repository.image-repository.name

  policy = <<EOF
  {
      "rules": [
          {
              "rulePriority": 1,
              "description": "Keep last 5 images",
              "selection": {
                  "tagStatus": "tagged",
                  "tagPrefixList": ["v"],
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
