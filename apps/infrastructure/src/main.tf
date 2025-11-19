terraform {
  required_version = "1.5.7"

  backend "s3" {}

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.16.2"
    }
  }
}

provider "aws" {
  region = var.aws_region
  default_tags {
    tags = var.tags
  }
}

provider "aws" {
  alias  = "us-east-1"
  region = "us-east-1"

  default_tags {
    tags = var.tags
  }
}

provider "aws" {
  alias  = "eu-central-1"
  region = "eu-central-1"

  default_tags {
    tags = var.tags
  }
}

# Init IaC resources ##########################################################
module "identity" {
  source            = "./modules/identity"
  github_repository = var.github_repository
}


## Video straming ##############################################################
module "video_streaming" {
  source = "./modules/video_streaming"

  providers = {
    aws           = aws.eu-central-1
    aws.us-east-1 = aws.us-east-1 #
  }

  project_name = "video-streaming"
  ivs_channels = {
    "channell-01" = {
      name = "channel-01"
    }
  }

  custom_domain_name = "video.pagopa.it"
  environment        = var.environment
}


