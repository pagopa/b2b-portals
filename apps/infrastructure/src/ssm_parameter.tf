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