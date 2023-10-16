###  AWS VPC ###
data "aws_availability_zones" "available" {
  state = "available"
}

resource "aws_vpc" "cms" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
}

###  AWS Internet Gateway ### Required for Route_table cms_public_subnet
resource "aws_internet_gateway" "cms" {
  vpc_id = aws_vpc.cms.id
}

### NAT Gateway ### Required for Route Table cms_private_subnet
resource "aws_nat_gateway" "gw" {
  count         = 2
  subnet_id     = aws_subnet.cms_public[count.index].id
  depends_on    = [aws_internet_gateway.cms]
  allocation_id = aws_eip.cms.*.id[count.index]
}

###  AWS Subnets ###
resource "aws_subnet" "cms_private" {
  count             = 2
  vpc_id            = aws_vpc.cms.id
  cidr_block        = cidrsubnet("10.0.0.0/16", 8, count.index)
  availability_zone = element(data.aws_availability_zones.available.names, count.index)
}

resource "aws_subnet" "cms_public" {
  count             = 2
  vpc_id            = aws_vpc.cms.id
  cidr_block        = cidrsubnet("10.0.0.0/16", 8, count.index + 3)
  availability_zone = element(data.aws_availability_zones.available.names, count.index)
}

### AWS Routes ###
resource "aws_route_table" "cms_private_subnet" {
  count  = 2
  vpc_id = aws_vpc.cms.id

  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.gw.*.id[count.index]
  }
}

resource "aws_route_table_association" "cms_private" {
  count          = 2
  subnet_id      = aws_subnet.cms_private.*.id[count.index]
  route_table_id = aws_route_table.cms_private_subnet.*.id[count.index]
}

resource "aws_route_table" "cms_public_subnet" {
  vpc_id = aws_vpc.cms.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.cms.id
  }
}

resource "aws_route_table_association" "cms_public" {
  count          = 2
  subnet_id      = aws_subnet.cms_public.*.id[count.index]
  route_table_id = aws_route_table.cms_public_subnet.id
}


### AWS Network ACL ###
resource "aws_default_network_acl" "cms" {
  default_network_acl_id = aws_vpc.cms.default_network_acl_id

  ingress {
    protocol   = "tcp"
    rule_no    = 100
    action     = "deny"
    cidr_block = "0.0.0.0/0"
    from_port  = 22
    to_port    = 22
  }

  ingress {
    protocol   = "tcp"
    rule_no    = 200
    action     = "deny"
    cidr_block = "0.0.0.0/0"
    from_port  = 3389
    to_port    = 3389
  }

  ingress {
    protocol   = -1
    rule_no    = 300
    action     = "allow"
    cidr_block = "0.0.0.0/0"
    from_port  = 0
    to_port    = 0
  }

  egress {
    protocol   = -1
    rule_no    = 100
    action     = "allow"
    cidr_block = "0.0.0.0/0"
    from_port  = 0
    to_port    = 0
  }

  lifecycle {
    ignore_changes = [subnet_ids]
  }
}

### AWS EIP ### Required for NAT Gateway
resource "aws_eip" "cms" {
  count      = 2
  depends_on = [aws_internet_gateway.cms]
  domain     = "vpc"
}