variable "aws_region" {
  type        = string
  description = "AWS region to create resources. Default Milan"
  default     = "eu-south-1"
}

variable "environment" {
  type        = string
  description = "Environment"
}

variable "github_repository" {
  type        = string
  description = "The repository where the IaC workflows will run"
}

variable "tags" {
  type = map(any)
  default = {
    CreatedBy = "Terraform"
  }
}

### required for security group ALB, ECS and RDS
variable "cms_app_port" {
  default = 1337
}

variable "fargate_cpu" {
  description = "Fargate instance CPU units to provision (1 vCPU = 1024 CPU units)"
  default     = "4096" ##### 4 vCPU
}

variable "fargate_memory" {
  description = "Fargate instance memory to provision (in MiB)"
  default     = "16384" ##### 16 GB RAM
}

variable "ecr_repository" {
  description = "Repository ECR Name for container image"
  default     = "strapi"
}