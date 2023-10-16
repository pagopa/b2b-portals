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
variable "app_port" {
  default = 1337
}

variable "db_cluster_identifier" {
  description = "Database Cluster identifier"
  default     = "cms-database-cluster"
}

variable "db_name" {
  description = "Database Name"
  default     = "strapidb"
}

variable "db_client" {
  description = "Database client"
  default     = "postgres"
}

variable "db_master_username" {
  description = "Database Master Username"
  default     = "postgres"
}
