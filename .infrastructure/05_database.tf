resource "aws_db_subnet_group" "cms_db_subnet" {
  name       = "cms-database"
  subnet_ids = module.vpc.database_subnets
}

resource "aws_rds_cluster" "cms_database_cluster" {
  cluster_identifier     = "cms-database-cluster"
  engine                 = "aurora-postgresql"
  engine_mode            = "provisioned"
  engine_version         = "14.6"
  database_name          = "strapidb"
  master_username        = "postgres"
  master_password        = aws_ssm_parameter.cms_database_password.value
  skip_final_snapshot    = true
  vpc_security_group_ids = [aws_security_group.cms_database.id]
  db_subnet_group_name   = aws_db_subnet_group.cms_db_subnet.name

  serverlessv2_scaling_configuration {
    max_capacity = 1.0
    min_capacity = 0.5
  }
}

resource "aws_rds_cluster_instance" "cms_database_instance" {
  cluster_identifier   = aws_rds_cluster.cms_database_cluster.id
  instance_class       = "db.serverless"
  engine               = aws_rds_cluster.cms_database_cluster.engine
  engine_version       = aws_rds_cluster.cms_database_cluster.engine_version
  db_subnet_group_name = aws_db_subnet_group.cms_db_subnet.name
}