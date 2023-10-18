variable "aws_region" {
  type        = string
  description = "AWS region to create resources. Default Milan"
  default     = "eu-south-1"
}

variable "environment" {
  type        = string
  description = "Environment"
  default     = "prod"
}

variable "github_repository" {
  type        = string
  description = "The repository where the IaC workflows will run"
  default     = "repo"
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
  default     = "strapi"
}

variable "ecs_task_role" {
  description = "Name of ECS Task Role"
  default     = "ecs-task-role"
}

variable "ecs_task_def" {
  description = "Family of ECS Task Definition"
  default     = "cms-task-def"
}

variable "ecs_serv" {
  description = "Name of ECS Service"
  default     = "cms-ecs"
}

variable "ecs_cluster" {
  description = "Name of ECS Cluster"
  default     = "cms-ecs-cluster"
}

variable "container_name" {
  description = "Name of Container"
  default     = "cms-docker"
}

### required for LOAD BALANCER ###
variable "cms_alb" {
  description = "Application Load Balancer Name"
  default     = "cms-load-balancer"
}

variable "cms_alb_target_group" {
  description = "Application Load Balancer Target Group"
  default     = "cms-target-group"
}