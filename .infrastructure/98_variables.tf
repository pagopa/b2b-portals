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

variable "cms_app_cpu" {
  description = "Fargate instance CPU units to provision (1 vCPU = 1024 CPU units)"
  default     = "1024" ##### 1 vCPU
}

variable "cms_app_memory" {
  description = "Fargate instance memory to provision (in MiB)"
  default     = "3072" ##### 3 GB RAM
}

### required for Strapi Site on AWS - to be uncommented when when available dns domain
# variable "dns_domain_name" {
#  description = "DNS domain for the B2B Portal product"
#  type        = string
# }

variable "use_custom_certificate" {
  type        = bool
  description = "Enable CDN https support with a custom certificate instead using the default one"
  default     = false # set true when available dns and custom certificate
}
