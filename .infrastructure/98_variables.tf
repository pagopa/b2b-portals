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

# FARGATE ECS CONTAINER ##########################################################
variable "app_port" {
  default = 1337 ##### VALORE PORT eventualmente da adeguare
}

variable "health_check_path" {
  description = "Health check Path monitoring by Load Balancer"
  default     = "/"
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
  default     = "strapi-website"
}

variable "ecs_cluster" {
  description = "Name of CLuster ECS"
  default     = "strapi-website-ecs-cluster"
}

variable "ecs_task_role" {
  description = "Name of ECS Task Role"
  default     = "task_role"
}

variable "ecs_task_def" {
  description = "Family of ECS Task Definition"
  default     = "website-cms-task-def"
}

variable "ecs_serv" {
  description = "Name of ECS Service"
  default     = "strapi-website-ecs"
}

variable "ecs_clust" {
  description = "Name of ECS Cluster"
  default     = "strapi-website-ecs-cluster"
}

variable "container_name" {
  description = "Name of Container"
  default     = "cds-website-cms"
}

# DATABASE RDS ##########################################################
##variable "rds_cluster_password" {
##  description = "RDS cluster password"
##  sensitive   = true
##  type        = string
##  default     = "adminpassword" ##### VALORE DI TEST da decidere come mascherare
##}

variable "db_cluster_identifier" {
  description = "Database Cluster identifier"
  default     = "website-cms-database-cluster"
}

variable "db_name" {
  description = "Database Name"
  default     = "strapidb" ##### VALORE eventualmente da adeguare
}

variable "db_client" {
  description = "Database client"
  default     = "postgres"
}

variable "db_master_username" {
  description = "Database Master Username"
  default     = "postgres" ##### VALORE eventualmente da adeguare
}

# APP STRAPI ##########################################################
##variable "strapi_admin_jwt_secret" {
##  description = "Strapi Admin JWT Secret"
##  sensitive   = true
##  type        = string
##  default     = "admin" #####VALORE DI TEST da decidere come mascherare
##}

##variable "github_token" {
##  description = "github_token"
##  sensitive   = true
##  type        = string
##  default     = "github" ##### VALORE DI TEST da decidere come mascherare
##}

variable "product_name" {
  description = "Product"
  default     = "sitivetrina"
}

variable "cms_alb" {
  description = "Application Load Balancer Name"
  default     = "cms-load-balancer"
}

variable "cms_alb_target_group" {
  description = "Application Load Balancer Target Group"
  default     = "cms-target-group"
}
