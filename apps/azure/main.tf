terraform {

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.0"
    }

    azuread = {
      source  = "hashicorp/azuread"
      version = "<= 2.50.0"
    }

  }

}

provider "azurerm" {
  features {}
  #storage_use_azuread = true
  subscription_id = "ec285037-c673-4f58-b594-d7c480da4e8b"
}



locals {
  app_name = "github-${var.github.org}-${var.github.repository}-${var.env}"
}

data "azurerm_subscription" "current" {}

data "azurerm_client_config" "current" {}

resource "azurerm_resource_group" "identity" {
  name     = "identity-rg"
  location = var.location
}

resource "azurerm_user_assigned_identity" "environment" {
  location            = azurerm_resource_group.identity.location
  name                = local.app_name
  resource_group_name = azurerm_resource_group.identity.name
}

resource "azurerm_federated_identity_credential" "environment" {
  name                = "github-federated"
  resource_group_name = azurerm_resource_group.identity.name
  audience            = ["api://AzureADTokenExchange"]
  issuer              = "https://token.actions.githubusercontent.com"
  parent_id           = azurerm_user_assigned_identity.environment.id
  subject             = "repo:${var.github.org}/${var.github.repository}:environment:${var.env}"
}