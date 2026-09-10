output "terraform_backend_bucket_name" {
  value = module.identity.terraform_backend_bucket_name
}

output "terraform_lock_dynamodb_table" {
  value = module.identity.terraform_lock_dynamodb_table
}

output "cms_dns_load_balancer" {
  value = aws_alb.cms_load_balancer.dns_name
}

output "dns_zone_name" {
  value = try(module.dns_zone.route53_zone_name, null)
}

output "dns_name_servers" {
  value = try(module.dns_zone.route53_zone_name_servers, null)
}

output "video_name_servers" {
  value = try(module.video_streaming.route53_zone_name_servers, null)
}

output "wallet_global_accelerator_ip_addresses" {
  description = "Static IPv4 addresses assigned to the wallet redirect Global Accelerator"
  value = flatten([
    for ip_set in aws_globalaccelerator_accelerator.wallet_redirect.ip_sets :
    ip_set.ip_addresses
  ])
}

output "wallet_redirect_name_servers" {
  description = "Name servers for the wallet redirect hosted zone when it is managed by this configuration"
  value       = try(aws_route53_zone.wallet_redirect[0].name_servers, null)
}