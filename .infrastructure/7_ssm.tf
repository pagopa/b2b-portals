resource "random_password" "database_password" {
  length           = 16
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}

resource "aws_ssm_parameter" "db_password" { ### SECRET AWS EVENTUALMENTE DA CREARE A MANO PER NON METTERLA SU REPO PUBBLICO
  name = "/website-strapi/db_password"       ### CONTENUTA ANCHE NEL FILE .env DA NON RENDERE VISIBILE
  type = "SecureString"
  ##value = var.rds_cluster_password
  value = random_password.database_password.result
}

resource "random_password" "jws_secret" {
  length           = 16
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}

resource "aws_ssm_parameter" "admin_jwt_secret" { ### SECRET AWS EVENTUALMENTE DA CREARE A MANO PER NON METTERLA SU REPO PUBBLICO
  name = "/website-strapi/admin_jwt_secret"       ### CONTENUTA ANCHE NEL FILE .env DA NON RENDERE VISIBILE
  type = "SecureString"
  ##value = var.strapi_admin_jwt_secret
  value = random_password.jws_secret.result
}

resource "random_password" "token" {
  length           = 16
  special          = true
  override_special = "!#$%&*()-_=+[]{}<>:?"
}

resource "aws_ssm_parameter" "github_token" { ### SECRET AWS EVENTUALMENTE DA CREARE A MANO PER NON METTERLA SU REPO PUBBLICO
  name = "/website-strapi/github_token"       ### CONTENUTA ANCHE NEL FILE .env DA NON RENDERE VISIBILE
  type = "SecureString"
  ##value = var.github_token
  value = random_password.token.result
}
