resource "random_password" "database_password" {
  length           = 16
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}

resource "aws_ssm_parameter" "db_password" {
  name  = "/website-strapi/db_password"
  type  = "SecureString"
  value = random_password.database_password.result
}

resource "random_password" "jws_secret" {
  length           = 16
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}

resource "aws_ssm_parameter" "admin_jwt_secret" {
  name  = "/website-strapi/admin_jwt_secret"
  type  = "SecureString"
  value = random_password.jws_secret.result
}
