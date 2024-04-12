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

variable "cdn_custom_headers" {
  type = list(object(
    {
      header   = string
      override = bool
      value    = string
    }
  ))
  default = []
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

variable "use_custom_certificate" {
  type        = bool
  description = "Enable CDN https support with a custom certificate instead using the default one"
  default     = false # set true when available dns and custom certificate
}

variable "publish_cloudfront_functions" {
  type        = bool
  description = "Defines if cloudfront functions should be published"
  default     = false
}

variable "dns_domain_name" {
  description = "DNS domain for the b2b portals"
  type        = map(any)
  default     = null
}

variable "websites_configs" {
  description = "Website configurations to create CDNs and SSL certificates for multi-tenancy"
  type = map(object({
    origin_path = string
    url_tenant  = string
  }))

  default = {
    "send" = {
      origin_path = "/send"
      url_tenant  = "notifichedigitali.pagopa.it"
    }
  }
}