## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | 1.5.7 |
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | 5.16.2 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | 5.16.2 |
| <a name="provider_random"></a> [random](#provider\_random) | 3.7.2 |

## Modules

| Name | Source | Version |
|------|--------|---------|
| <a name="module_acm"></a> [acm](#module\_acm) | git::https://github.com/terraform-aws-modules/terraform-aws-acm.git | 8d0b22f1f242a1b36e29b8cb38aaeac9b887500d |
| <a name="module_alb_error_4xx_alarm"></a> [alb\_error\_4xx\_alarm](#module\_alb\_error\_4xx\_alarm) | git::https://github.com/terraform-aws-modules/terraform-aws-cloudwatch.git//modules/metric-alarm | 0b4aa2b9aa19060205965a938de89a7bf0ff477b |
| <a name="module_alb_error_5xx_alarm"></a> [alb\_error\_5xx\_alarm](#module\_alb\_error\_5xx\_alarm) | git::https://github.com/terraform-aws-modules/terraform-aws-cloudwatch.git//modules/metric-alarm | 0b4aa2b9aa19060205965a938de89a7bf0ff477b |
| <a name="module_cdn_storybook_ssl_certificate"></a> [cdn\_storybook\_ssl\_certificate](#module\_cdn\_storybook\_ssl\_certificate) | git::https://github.com/terraform-aws-modules/terraform-aws-acm.git | 8d0b22f1f242a1b36e29b8cb38aaeac9b887500d |
| <a name="module_cdn_websites_ssl_certificate"></a> [cdn\_websites\_ssl\_certificate](#module\_cdn\_websites\_ssl\_certificate) | git::https://github.com/terraform-aws-modules/terraform-aws-acm.git | 8d0b22f1f242a1b36e29b8cb38aaeac9b887500d |
| <a name="module_cdn_websites_staging_ssl_certificate"></a> [cdn\_websites\_staging\_ssl\_certificate](#module\_cdn\_websites\_staging\_ssl\_certificate) | git::https://github.com/terraform-aws-modules/terraform-aws-acm.git | 8d0b22f1f242a1b36e29b8cb38aaeac9b887500d |
| <a name="module_cloudfront_5xx_error_rate_alarm"></a> [cloudfront\_5xx\_error\_rate\_alarm](#module\_cloudfront\_5xx\_error\_rate\_alarm) | git::https://github.com/terraform-aws-modules/terraform-aws-cloudwatch.git//modules/metric-alarm | 0b4aa2b9aa19060205965a938de89a7bf0ff477b |
| <a name="module_cloudfront_function_execution_errors_alarm"></a> [cloudfront\_function\_execution\_errors\_alarm](#module\_cloudfront\_function\_execution\_errors\_alarm) | git::https://github.com/terraform-aws-modules/terraform-aws-cloudwatch.git//modules/metric-alarm | 0b4aa2b9aa19060205965a938de89a7bf0ff477b |
| <a name="module_cloudfront_function_throttled_alarm"></a> [cloudfront\_function\_throttled\_alarm](#module\_cloudfront\_function\_throttled\_alarm) | git::https://github.com/terraform-aws-modules/terraform-aws-cloudwatch.git//modules/metric-alarm | 0b4aa2b9aa19060205965a938de89a7bf0ff477b |
| <a name="module_cloudfront_function_validation_errors_alarm"></a> [cloudfront\_function\_validation\_errors\_alarm](#module\_cloudfront\_function\_validation\_errors\_alarm) | git::https://github.com/terraform-aws-modules/terraform-aws-cloudwatch.git//modules/metric-alarm | 0b4aa2b9aa19060205965a938de89a7bf0ff477b |
| <a name="module_cloudfront_origin_latency_alarm"></a> [cloudfront\_origin\_latency\_alarm](#module\_cloudfront\_origin\_latency\_alarm) | git::https://github.com/terraform-aws-modules/terraform-aws-cloudwatch.git//modules/metric-alarm | 0b4aa2b9aa19060205965a938de89a7bf0ff477b |
| <a name="module_cms_multitenant_records"></a> [cms\_multitenant\_records](#module\_cms\_multitenant\_records) | git::https://github.com/terraform-aws-modules/terraform-aws-route53.git//modules/records | bc63328714550fd903d2574b263833c9ce1c867e |
| <a name="module_cms_multitenant_ssl_certificate"></a> [cms\_multitenant\_ssl\_certificate](#module\_cms\_multitenant\_ssl\_certificate) | git::https://github.com/terraform-aws-modules/terraform-aws-acm.git | 8d0b22f1f242a1b36e29b8cb38aaeac9b887500d |
| <a name="module_demowebsite_records"></a> [demowebsite\_records](#module\_demowebsite\_records) | git::https://github.com/terraform-aws-modules/terraform-aws-route53.git//modules/records | bc63328714550fd903d2574b263833c9ce1c867e |
| <a name="module_dns_zone"></a> [dns\_zone](#module\_dns\_zone) | git::https://github.com/terraform-aws-modules/terraform-aws-route53.git//modules/zones | bc63328714550fd903d2574b263833c9ce1c867e |
| <a name="module_ecs_cpu_alarm"></a> [ecs\_cpu\_alarm](#module\_ecs\_cpu\_alarm) | git::https://github.com/terraform-aws-modules/terraform-aws-cloudwatch.git//modules/metric-alarm | 0b4aa2b9aa19060205965a938de89a7bf0ff477b |
| <a name="module_ecs_memory_alarm"></a> [ecs\_memory\_alarm](#module\_ecs\_memory\_alarm) | git::https://github.com/terraform-aws-modules/terraform-aws-cloudwatch.git//modules/metric-alarm | 0b4aa2b9aa19060205965a938de89a7bf0ff477b |
| <a name="module_identity"></a> [identity](#module\_identity) | ./modules/identity | n/a |
| <a name="module_preview_strapi_records"></a> [preview\_strapi\_records](#module\_preview\_strapi\_records) | git::https://github.com/terraform-aws-modules/terraform-aws-route53.git//modules/records | bc63328714550fd903d2574b263833c9ce1c867e |
| <a name="module_preview_strapi_ssl_certificate"></a> [preview\_strapi\_ssl\_certificate](#module\_preview\_strapi\_ssl\_certificate) | git::https://github.com/terraform-aws-modules/terraform-aws-acm.git | 8d0b22f1f242a1b36e29b8cb38aaeac9b887500d |
| <a name="module_rds_acu_alarm"></a> [rds\_acu\_alarm](#module\_rds\_acu\_alarm) | git::https://github.com/terraform-aws-modules/terraform-aws-cloudwatch.git//modules/metric-alarm | 0b4aa2b9aa19060205965a938de89a7bf0ff477b |
| <a name="module_rds_cpu_alarm"></a> [rds\_cpu\_alarm](#module\_rds\_cpu\_alarm) | git::https://github.com/terraform-aws-modules/terraform-aws-cloudwatch.git//modules/metric-alarm | 0b4aa2b9aa19060205965a938de89a7bf0ff477b |
| <a name="module_records"></a> [records](#module\_records) | git::https://github.com/terraform-aws-modules/terraform-aws-route53.git//modules/records | bc63328714550fd903d2574b263833c9ce1c867e |
| <a name="module_storybook_records"></a> [storybook\_records](#module\_storybook\_records) | git::https://github.com/terraform-aws-modules/terraform-aws-route53.git//modules/records | bc63328714550fd903d2574b263833c9ce1c867e |
| <a name="module_video_streaming"></a> [video\_streaming](#module\_video\_streaming) | ./modules/video_streaming | n/a |
| <a name="module_vpc"></a> [vpc](#module\_vpc) | terraform-aws-modules/vpc/aws | 5.1.2 |
| <a name="module_website_staging_records"></a> [website\_staging\_records](#module\_website\_staging\_records) | git::https://github.com/terraform-aws-modules/terraform-aws-route53.git//modules/records | bc63328714550fd903d2574b263833c9ce1c867e |

## Resources

| Name | Type |
|------|------|
| [aws_alb.cms_load_balancer](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/alb) | resource |
| [aws_alb_listener.front_end](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/alb_listener) | resource |
| [aws_alb_target_group.cms_multitenant](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/alb_target_group) | resource |
| [aws_alb_target_group.nextjs](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/alb_target_group) | resource |
| [aws_cloudfront_distribution.cdn_multi_website](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/cloudfront_distribution) | resource |
| [aws_cloudfront_distribution.cdn_multi_website_staging](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/cloudfront_distribution) | resource |
| [aws_cloudfront_distribution.cms_multitenant_medialibrary](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/cloudfront_distribution) | resource |
| [aws_cloudfront_distribution.storybook](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/cloudfront_distribution) | resource |
| [aws_cloudfront_function.website_viewer_request_handler](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/cloudfront_function) | resource |
| [aws_cloudfront_origin_access_identity.main](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/cloudfront_origin_access_identity) | resource |
| [aws_cloudfront_response_headers_policy.custom](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/cloudfront_response_headers_policy) | resource |
| [aws_cloudfront_response_headers_policy.websites](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/cloudfront_response_headers_policy) | resource |
| [aws_cloudwatch_dashboard.main](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/cloudwatch_dashboard) | resource |
| [aws_cloudwatch_log_group.nextjs_ecs_task](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/cloudwatch_log_group) | resource |
| [aws_cloudwatch_log_group.strapi_ecs_task](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/cloudwatch_log_group) | resource |
| [aws_db_subnet_group.cms_db_subnet](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/db_subnet_group) | resource |
| [aws_ecr_lifecycle_policy.nextjs_policy](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/ecr_lifecycle_policy) | resource |
| [aws_ecr_lifecycle_policy.strapi_policy](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/ecr_lifecycle_policy) | resource |
| [aws_ecr_repository.nextjs_image_repository](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/ecr_repository) | resource |
| [aws_ecr_repository.strapi_image_repository](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/ecr_repository) | resource |
| [aws_ecs_cluster.cms_ecs_cluster](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/ecs_cluster) | resource |
| [aws_ecs_service.cms_multitenant_ecs_service](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/ecs_service) | resource |
| [aws_ecs_service.nextjs_ecs_service](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/ecs_service) | resource |
| [aws_ecs_task_definition.cms_multitenant_task_def](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/ecs_task_definition) | resource |
| [aws_ecs_task_definition.nextjs_task_def](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/ecs_task_definition) | resource |
| [aws_iam_access_key.strapi](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_access_key) | resource |
| [aws_iam_group.developers_read_only](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_group) | resource |
| [aws_iam_group_policy_attachment.read_only](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_group_policy_attachment) | resource |
| [aws_iam_policy.deploy_ecs](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_policy) | resource |
| [aws_iam_policy.deploy_website](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_policy) | resource |
| [aws_iam_policy.ecs_task_execution](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_policy) | resource |
| [aws_iam_policy.ecs_task_role_s3](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_policy) | resource |
| [aws_iam_policy.logs_ecs](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_policy) | resource |
| [aws_iam_policy.send_email](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_policy) | resource |
| [aws_iam_policy.upload_image](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_policy) | resource |
| [aws_iam_policy_attachment.ses-strapi-policy](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_policy_attachment) | resource |
| [aws_iam_policy_attachment.strapi-policy](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_policy_attachment) | resource |
| [aws_iam_role.deploy_ecs](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_role) | resource |
| [aws_iam_role.deploy_website](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_role) | resource |
| [aws_iam_role.ecs_task_execution_role](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_role) | resource |
| [aws_iam_role.task_role](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_role) | resource |
| [aws_iam_role_policy_attachment.deploy_ecs](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_role_policy_attachment) | resource |
| [aws_iam_role_policy_attachment.deploy_website](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_role_policy_attachment) | resource |
| [aws_iam_role_policy_attachment.ec2_container_registery_policies](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_role_policy_attachment) | resource |
| [aws_iam_role_policy_attachment.ecs_container_ec2](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_role_policy_attachment) | resource |
| [aws_iam_role_policy_attachment.ecs_container_s3](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_role_policy_attachment) | resource |
| [aws_iam_role_policy_attachment.ecs_task_execution](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_role_policy_attachment) | resource |
| [aws_iam_role_policy_attachment.ecs_task_execution_policy](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_role_policy_attachment) | resource |
| [aws_iam_role_policy_attachment.logs_ecs](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_role_policy_attachment) | resource |
| [aws_iam_user.strapi](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/iam_user) | resource |
| [aws_lb_listener.front_end_https](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/lb_listener) | resource |
| [aws_lb_listener_certificate.lb_cms_certificate](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/lb_listener_certificate) | resource |
| [aws_lb_listener_certificate.lb_nextjs_certificate](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/lb_listener_certificate) | resource |
| [aws_lb_listener_rule.cms_rule](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/lb_listener_rule) | resource |
| [aws_lb_listener_rule.nextjs_rule](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/lb_listener_rule) | resource |
| [aws_rds_cluster.cms_database_cluster](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/rds_cluster) | resource |
| [aws_rds_cluster_instance.cms_database_instance](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/rds_cluster_instance) | resource |
| [aws_s3_bucket.cms_multitenant_medialibrary_bucket](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/s3_bucket) | resource |
| [aws_s3_bucket.website](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/s3_bucket) | resource |
| [aws_s3_bucket.website_staging](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/s3_bucket) | resource |
| [aws_s3_bucket_policy.cloudfront](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/s3_bucket_policy) | resource |
| [aws_s3_bucket_policy.cloudfront_cms_multitenant](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/s3_bucket_policy) | resource |
| [aws_s3_bucket_policy.cloudfront_staging](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/s3_bucket_policy) | resource |
| [aws_s3_bucket_public_access_block.cms_multitenant_medialibrary_bucket](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/s3_bucket_public_access_block) | resource |
| [aws_s3_bucket_public_access_block.website](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/s3_bucket_public_access_block) | resource |
| [aws_s3_bucket_public_access_block.website_staging](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/s3_bucket_public_access_block) | resource |
| [aws_s3_bucket_versioning.cms_multitenant_medialibrary_bucket](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/s3_bucket_versioning) | resource |
| [aws_s3_bucket_versioning.website](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/s3_bucket_versioning) | resource |
| [aws_s3_bucket_versioning.website_staging](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/s3_bucket_versioning) | resource |
| [aws_security_group.cms_database](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/security_group) | resource |
| [aws_security_group.cms_lb](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/security_group) | resource |
| [aws_security_group.ecs_tasks](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/security_group) | resource |
| [aws_security_group.nextjs_ecs_tasks](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/security_group) | resource |
| [aws_security_group.nextjs_lb](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/security_group) | resource |
| [aws_sns_topic.alerts](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/sns_topic) | resource |
| [aws_sns_topic_policy.alerts](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/sns_topic_policy) | resource |
| [aws_ssm_parameter.cms_access_key_id](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/ssm_parameter) | resource |
| [aws_ssm_parameter.cms_access_key_secret](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/ssm_parameter) | resource |
| [aws_ssm_parameter.cms_admin_jwt_secret](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/ssm_parameter) | resource |
| [aws_ssm_parameter.cms_api_token_salt](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/ssm_parameter) | resource |
| [aws_ssm_parameter.cms_app_keys](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/ssm_parameter) | resource |
| [aws_ssm_parameter.cms_database_password](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/ssm_parameter) | resource |
| [aws_ssm_parameter.cms_github_pat](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/ssm_parameter) | resource |
| [aws_ssm_parameter.cms_jwt_secret](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/ssm_parameter) | resource |
| [aws_ssm_parameter.cms_multitenant_api_token_salt](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/ssm_parameter) | resource |
| [aws_ssm_parameter.cms_multitenant_wf_notifications_bearer_token](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/ssm_parameter) | resource |
| [aws_ssm_parameter.cms_transfer_token_salt](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/ssm_parameter) | resource |
| [aws_ssm_parameter.preview_token](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/ssm_parameter) | resource |
| [aws_ssm_parameter.strapi_api_token](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/resources/ssm_parameter) | resource |
| [random_integer.bucket_multitenant_random_integer](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/integer) | resource |
| [random_integer.bucket_random_integer](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/integer) | resource |
| [random_integer.website_bucket_random_integer](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/integer) | resource |
| [random_password.cms_admin_jwt_secret](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) | resource |
| [random_password.cms_api_token_salt](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) | resource |
| [random_password.cms_app_keys](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) | resource |
| [random_password.cms_database_password](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) | resource |
| [random_password.cms_github_pat](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) | resource |
| [random_password.cms_jwt_secret](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) | resource |
| [random_password.cms_multitenant_api_token_salt](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) | resource |
| [random_password.cms_multitenant_wf_notifications_bearer_token](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) | resource |
| [random_password.cms_transfer_token_salt](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) | resource |
| [random_password.preview_token](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) | resource |
| [random_password.strapi_api_token](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) | resource |
| [aws_availability_zones.available](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/availability_zones) | data source |
| [aws_caller_identity.current](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/caller_identity) | data source |
| [aws_iam_policy_document.cms_multitenant_iam_policy](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.deploy_github](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.ecs_task_execution](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.ecs_task_role_s3](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.task_role](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.website_iam_policy](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.website_staging_iam_policy](https://registry.terraform.io/providers/hashicorp/aws/5.16.2/docs/data-sources/iam_policy_document) | data source |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_cms_app_image_tag"></a> [cms\_app\_image\_tag](#input\_cms\_app\_image\_tag) | Docker image tag for the CMS application | `string` | n/a | yes |
| <a name="input_environment"></a> [environment](#input\_environment) | Environment | `string` | n/a | yes |
| <a name="input_github_repository"></a> [github\_repository](#input\_github\_repository) | The repository where the IaC workflows will run | `string` | n/a | yes |
| <a name="input_nextjs_app_image_tag"></a> [nextjs\_app\_image\_tag](#input\_nextjs\_app\_image\_tag) | Docker image tag for the Next.js application | `string` | n/a | yes |
| <a name="input_aws_region"></a> [aws\_region](#input\_aws\_region) | AWS region to create resources. Default Milan | `string` | `"eu-south-1"` | no |
| <a name="input_cdn_custom_headers"></a> [cdn\_custom\_headers](#input\_cdn\_custom\_headers) | n/a | <pre>list(object(<br/>    {<br/>      header   = string<br/>      override = bool<br/>      value    = string<br/>    }<br/>  ))</pre> | <pre>[<br/>  {<br/>    "header": "Server",<br/>    "override": true,<br/>    "value": "None"<br/>  }<br/>]</pre> | no |
| <a name="input_cms_app_cpu"></a> [cms\_app\_cpu](#input\_cms\_app\_cpu) | Fargate instance CPU units to provision (1 vCPU = 1024 CPU units) | `string` | `"1024"` | no |
| <a name="input_cms_app_memory"></a> [cms\_app\_memory](#input\_cms\_app\_memory) | Fargate instance memory to provision (in MiB) | `string` | `"3072"` | no |
| <a name="input_cms_app_port"></a> [cms\_app\_port](#input\_cms\_app\_port) | ## required for security group ALB, ECS and RDS | `number` | `1337` | no |
| <a name="input_dns_domain_name"></a> [dns\_domain\_name](#input\_dns\_domain\_name) | DNS domain for the b2b portals | `map(any)` | `null` | no |
| <a name="input_nextjs_app_cpu"></a> [nextjs\_app\_cpu](#input\_nextjs\_app\_cpu) | Fargate instance CPU units to provision (1 vCPU = 1024 CPU units) | `string` | `"1024"` | no |
| <a name="input_nextjs_app_memory"></a> [nextjs\_app\_memory](#input\_nextjs\_app\_memory) | Fargate instance memory to provision (in MiB) | `string` | `"3072"` | no |
| <a name="input_nextjs_app_port"></a> [nextjs\_app\_port](#input\_nextjs\_app\_port) | n/a | `number` | `3000` | no |
| <a name="input_publish_cloudfront_functions"></a> [publish\_cloudfront\_functions](#input\_publish\_cloudfront\_functions) | Defines if cloudfront functions should be published | `bool` | `false` | no |
| <a name="input_tags"></a> [tags](#input\_tags) | n/a | `map(any)` | <pre>{<br/>  "CreatedBy": "Terraform"<br/>}</pre> | no |
| <a name="input_use_custom_certificate"></a> [use\_custom\_certificate](#input\_use\_custom\_certificate) | Enable CDN https support with a custom certificate instead using the default one | `bool` | `true` | no |
| <a name="input_websites_configs"></a> [websites\_configs](#input\_websites\_configs) | Website configurations to create CDNs and SSL certificates for multi-tenancy | <pre>map(object({<br/>    origin_path                = string<br/>    url_tenant                 = string<br/>    create_certificate         = bool<br/>    create_route53_records     = optional(bool, false)<br/>    create_distribution        = bool<br/>    cdn_use_custom_certificate = bool<br/>    cdn_use_alias              = bool<br/>    cdn_indexing_enable        = bool<br/>    custom_headers = optional(list(object({<br/>      header   = string<br/>      override = optional(bool, true)<br/>      value    = string<br/>    })), [])<br/>    content_security_policy = optional(string, null)<br/>  }))</pre> | <pre>{<br/>  "appio": {<br/>    "cdn_indexing_enable": false,<br/>    "cdn_use_alias": true,<br/>    "cdn_use_custom_certificate": true,<br/>    "content_security_policy": "script-src-elem 'self' 'unsafe-inline' https://cdn.mxpnl.com https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js https://cdn.cookielaw.org/scripttemplates/otSDKStub.js https://cdn.cookielaw.org https://recaptcha.net https://www.gstatic.com; img-src 'self' https://d3qjb3tf4m0ri0.cloudfront.net https://cdn.cookielaw.org data:; frame-src https://recaptcha.net https://io.italia.it https://io.italia.it/enti-embeddable https://d2ekco8qmvzmh1.cloudfront.net https://d3qjb3tf4m0ri0.cloudfront.net;",<br/>    "create_certificate": true,<br/>    "create_distribution": true,<br/>    "custom_headers": [<br/>      {<br/>        "header": "Server",<br/>        "override": true,<br/>        "value": "None"<br/>      }<br/>    ],<br/>    "origin_path": "/appio",<br/>    "url_tenant": "ioapp.it"<br/>  },<br/>  "demo": {<br/>    "cdn_indexing_enable": false,<br/>    "cdn_use_alias": true,<br/>    "cdn_use_custom_certificate": true,<br/>    "create_certificate": true,<br/>    "create_distribution": true,<br/>    "create_route53_records": true,<br/>    "custom_headers": [<br/>      {<br/>        "header": "Server",<br/>        "override": true,<br/>        "value": "None"<br/>      }<br/>    ],<br/>    "origin_path": "/demo",<br/>    "url_tenant": "demowebsite.b2bportals.pagopa.it"<br/>  },<br/>  "interop": {<br/>    "cdn_indexing_enable": false,<br/>    "cdn_use_alias": false,<br/>    "cdn_use_custom_certificate": false,<br/>    "create_certificate": false,<br/>    "create_distribution": true,<br/>    "custom_headers": [<br/>      {<br/>        "header": "Server",<br/>        "override": true,<br/>        "value": "None"<br/>      }<br/>    ],<br/>    "origin_path": "/interop",<br/>    "url_tenant": "interop.b2bportals.pagopa.it"<br/>  },<br/>  "send": {<br/>    "cdn_indexing_enable": false,<br/>    "cdn_use_alias": true,<br/>    "cdn_use_custom_certificate": true,<br/>    "create_certificate": true,<br/>    "create_distribution": true,<br/>    "custom_headers": [<br/>      {<br/>        "header": "Server",<br/>        "override": true,<br/>        "value": "None"<br/>      }<br/>    ],<br/>    "origin_path": "/send",<br/>    "url_tenant": "notifichedigitali.it"<br/>  }<br/>}</pre> | no |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_cms_dns_load_balancer"></a> [cms\_dns\_load\_balancer](#output\_cms\_dns\_load\_balancer) | n/a |
| <a name="output_dns_name_servers"></a> [dns\_name\_servers](#output\_dns\_name\_servers) | n/a |
| <a name="output_dns_zone_name"></a> [dns\_zone\_name](#output\_dns\_zone\_name) | n/a |
| <a name="output_terraform_backend_bucket_name"></a> [terraform\_backend\_bucket\_name](#output\_terraform\_backend\_bucket\_name) | n/a |
| <a name="output_terraform_lock_dynamodb_table"></a> [terraform\_lock\_dynamodb\_table](#output\_terraform\_lock\_dynamodb\_table) | n/a |
| <a name="output_video_name_servers"></a> [video\_name\_servers](#output\_video\_name\_servers) | n/a |
