output "azure_environment" {
  value = {
    app_name       = "${local.app_name}"
    client_id      = azurerm_user_assigned_identity.environment.client_id
    application_id = azurerm_user_assigned_identity.environment.client_id
    object_id      = azurerm_user_assigned_identity.environment.principal_id
  }
}