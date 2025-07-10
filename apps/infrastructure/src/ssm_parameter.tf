resource "random_password" "cms_database_password" {
  length           = 16
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}

resource "aws_ssm_parameter" "cms_database_password" {
  name  = "/cms/database/password"
  type  = "SecureString"
  value = random_password.cms_database_password.result
}

resource "random_password" "cms_admin_jwt_secret" {
  length           = 16
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}

resource "aws_ssm_parameter" "cms_admin_jwt_secret" {
  name  = "/cms/admin_jwt_secret"
  type  = "SecureString"
  value = random_password.cms_admin_jwt_secret.result
}

resource "random_password" "cms_jwt_secret" {
  length           = 16
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}

resource "aws_ssm_parameter" "cms_jwt_secret" {
  name  = "/cms/jwt_secret"
  type  = "SecureString"
  value = random_password.cms_jwt_secret.result
}

resource "random_password" "cms_app_keys" {
  length           = 16
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}

resource "aws_ssm_parameter" "cms_app_keys" {
  name  = "/cms/app_keys"
  type  = "SecureString"
  value = random_password.cms_app_keys.result
}

resource "random_password" "cms_api_token_salt" {
  length           = 16
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}

### Remove this resource once the new multitenancy is complete
resource "aws_ssm_parameter" "cms_api_token_salt" {
  name  = "/cms/api_token_salt"
  type  = "SecureString"
  value = random_password.cms_api_token_salt.result
}

resource "random_password" "cms_transfer_token_salt" {
  length           = 16
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}

resource "aws_ssm_parameter" "cms_transfer_token_salt" {
  name  = "/cms/transfer_token_salt"
  type  = "SecureString"
  value = random_password.cms_transfer_token_salt.result
}

resource "aws_ssm_parameter" "cms_access_key_id" {
  name  = "/cms/access_key_id"
  type  = "SecureString"
  value = aws_iam_access_key.strapi.id
}

resource "aws_ssm_parameter" "cms_access_key_secret" {
  name  = "/cms/access_key_secret"
  type  = "SecureString"
  value = aws_iam_access_key.strapi.secret
}

resource "random_password" "cms_github_pat" {
  length           = 16
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}

resource "aws_ssm_parameter" "cms_github_pat" {
  name  = "/cms/github_pat"
  type  = "SecureString"
  value = random_password.cms_github_pat.result
  lifecycle {
    ignore_changes = [
      # Ignore changes to value, because the value is updated manually
      value
    ]
  }
}

resource "random_password" "strapi_api_token" {
  length           = 16
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}

resource "aws_ssm_parameter" "strapi_api_token" {
  name  = "/cms/strapi_api_token"
  type  = "SecureString"
  value = random_password.strapi_api_token.result
  lifecycle {
    ignore_changes = [
      # Ignore changes to value, because the value is updated manually
      value
    ]
  }
}

resource "random_password" "preview_token" {
  length           = 16
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}

resource "aws_ssm_parameter" "preview_token" {
  name  = "/cms/preview_token"
  type  = "SecureString"
  value = random_password.preview_token.result
  lifecycle {
    ignore_changes = [
      # Ignore changes to value, because the value is updated manually
      value
    ]
  }
}

resource "random_password" "cms_multitenant_api_token_salt" {
  for_each = {
    for key, config in var.websites_configs :
    key => config
  }
  length           = 16
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}

resource "aws_ssm_parameter" "cms_multitenant_api_token_salt" {
  for_each = {
    for key, config in var.websites_configs :
    key => config
  }
  name  = "/cms/api_token_salt_${each.key}"
  type  = "SecureString"
  value = random_password.cms_multitenant_api_token_salt[each.key].result
}

resource "random_password" "cms_multitenant_wf_notifications_bearer_token" {
  for_each = {
    for key, config in var.websites_configs :
    key => config
  }
  length           = 16
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}

resource "aws_ssm_parameter" "cms_multitenant_wf_notifications_bearer_token" {
  for_each = {
    for key, config in var.websites_configs :
    key => config
  }
  name  = "/cms/workflow_notifications_bearer_token_${each.key}"
  type  = "SecureString"
  value = random_password.cms_multitenant_wf_notifications_bearer_token[each.key].result
}