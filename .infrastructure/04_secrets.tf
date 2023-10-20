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
