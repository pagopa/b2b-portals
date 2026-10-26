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

output "wallet_redirect_certificate_validation_records" {
  description = "CNAME records to publish in external DNS to validate the additional wallet redirect certificates"
  value = flatten([
    for key, certificate in aws_acm_certificate.wallet_redirect_additional : [
      for record in certificate.domain_validation_options : {
        certificate = key
        domain_name = record.domain_name
        name        = record.resource_record_name
        type        = record.resource_record_type
        value       = record.resource_record_value
      }
    ]
  ])
}