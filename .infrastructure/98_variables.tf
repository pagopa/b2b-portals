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

### required for Strapi Site on AWS
variable "dns_domain_name" {
  description = "DNS domain for the B2B Portal product"
  type        = string
}

variable "use_custom_certificate" {
  type        = bool
  description = "Enable CDN https support with a custom certificate instead using the default one"
}