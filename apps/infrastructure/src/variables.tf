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
  default = [
    {
      header   = "Server"
      override = true
      value    = "None"
    }
  ]
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
  default     = true
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
    origin_path                = string
    url_tenant                 = string
    create_certificate         = bool
    create_route53_records     = optional(bool, false)
    create_distribution        = bool
    cdn_use_custom_certificate = bool
    cdn_use_alias              = bool
    cdn_indexing_enable        = bool
    custom_headers = optional(list(object({
      header   = string
      override = optional(bool, true)
      value    = string
    })), [])
    content_security_policy = optional(string, null)
  }))

  default = {
    "send" = {
      origin_path                = "/send"
      url_tenant                 = "notifichedigitali.it"
      create_certificate         = true
      create_distribution        = true
      cdn_use_custom_certificate = true
      cdn_use_alias              = true
      cdn_indexing_enable        = false
    },
    "appio" = {
      origin_path                = "/appio"
      url_tenant                 = "ioapp.it"
      create_certificate         = true
      create_distribution        = true
      cdn_use_custom_certificate = true
      cdn_use_alias              = true
      cdn_indexing_enable        = false
      content_security_policy    = "script-src-elem 'self' 'unsafe-inline' https://cdn.mxpnl.com https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js https://cdn.cookielaw.org/scripttemplates/otSDKStub.js https://cdn.cookielaw.org https://recaptcha.net https://www.gstatic.com; img-src 'self' https://d3qjb3tf4m0ri0.cloudfront.net https://cdn.cookielaw.org data:; frame-src https://recaptcha.net https://io.italia.it https://io.italia.it/enti-embeddable https://d2ekco8qmvzmh1.cloudfront.net https://d3qjb3tf4m0ri0.cloudfront.net;"
    },
    "demo" = {
      origin_path                = "/demo"
      url_tenant                 = "demowebsite.b2bportals.pagopa.it"
      create_certificate         = true
      create_route53_records     = true
      create_distribution        = true
      cdn_use_custom_certificate = true
      cdn_use_alias              = true
      cdn_indexing_enable        = false
    },
    "interop" = {
      origin_path                = "/interop"
      url_tenant                 = "interop.b2bportals.pagopa.it"
      create_certificate         = false
      create_distribution        = true
      cdn_use_custom_certificate = false
      cdn_use_alias              = false
      cdn_indexing_enable        = false
    }
  }
}

variable "nextjs_app_port" {
  default = 3000
}

variable "nextjs_app_cpu" {
  description = "Fargate instance CPU units to provision (1 vCPU = 1024 CPU units)"
  default     = "1024" ##### 1 vCPU
}

variable "nextjs_app_memory" {
  description = "Fargate instance memory to provision (in MiB)"
  default     = "3072" ##### 3 GB RAM
}

# set here the image tag for the Next.js application due to this issue: https://github.com/hashicorp/terraform-provider-aws/issues/20121
variable "nextjs_app_image_tag" {
  description = "Docker image tag for the Next.js application"
  type        = string
}

variable "cms_app_image_tag" {
  description = "Docker image tag for the CMS application"
  type        = string
}
