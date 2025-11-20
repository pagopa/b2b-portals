terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 5.16.2"

      configuration_aliases = [aws.us-east-1]
    }
  }
}

