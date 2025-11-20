output "s3_recording_bucket_name" {
  description = "The name of the S3 bucket where all recordings will be stored."
  value       = aws_s3_bucket.ivs_recordings.id
}

output "ivs_channel_details" {
  description = "A map containing the details for each created IVS channel."
  value = {
    for key, channel in aws_ivs_channel.channels : key => {
      arn                      = channel.arn
      ingest_endpoint          = "rtmps://${channel.ingest_endpoint}:443/app/"
      playback_url             = channel.playback_url
      distribution_domain_name = aws_cloudfront_distribution.s3_distribution.domain_name
    }
  }

}

output "route53_zone_id" {
  description = "The ID of the Route53 hosted zone (either existing or newly created)."
  value       = var.custom_domain_name != null ? (var.route53_zone_id != null ? var.route53_zone_id : aws_route53_zone.main[0].zone_id) : null
}

output "route53_zone_name_servers" {
  description = "The name servers for the Route53 zone (useful if a new zone was created)."
  value       = var.custom_domain_name != null && var.route53_zone_id == null ? aws_route53_zone.main[0].name_servers : null
}