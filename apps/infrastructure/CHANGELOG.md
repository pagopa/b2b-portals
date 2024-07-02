# infrastructure

## 0.2.0

### Minor Changes

- 9b3d1df: [B2BP-631] - Terraform Add Tenant demo
- 97ea3c6: [B2BP-670] - ECS and TargetGroup for Strapi Multitenant
- ae1c950: Terraform Parameterization and condition for create SSL and CDN multitenacy
- f6adb4b: Set custom certificate for cdn SEND
- 679fe8d: Create CloudFront distribution for multitenancy websites
- 7b5997c: create ssl custom certificate for SEND Production
- ab99127: Add parameter for cdn indexing enable
- b28266a: [B2BP-629] - Terraform delete resource send test monotenant
- 66672c4: Create SSL certificate for cdn websites
- 9a09af8: [B2BP-606] - Add CDN for Storybook
- 5723d4b: [B2BP-614] - Add cname CDN Storybook
- 71fbb31: [B2BP-703] - Set DB schema ECS Strapi with Tenant
- d3b7912: Add PREVIEW_TOKEN and PREVIEW_URL env vars
- c3ccbf6: Add NextJS Preview Mode ENV VARS
- 2a90a14: [B2BP-649] - Add logs to ECS
- 0be3fb8: [B2BP-649] - resources aws for preview strapi
- b07e004: Create ssl certificate for SEND Production and comment(remove) test CDN
- 1e92987: [B2BP-701] - Add environment var to ecs strapi
- 59b9688: [B2BP-614] - Storybook add certificate and domain
- 3f2ac71: [B2BP-649] - Add stream prefix to ECS logs
- 4ff1ad9: Add policy privileges for cdn ro role deploy website
- 090472f: Add CDN for tenant appio
- fa652bc: [B2BP-649] - Modify ECS env var NextJS
- dae737e: [B2BP-669] - Add S3 and CDN Medialibrary multitenant
- b2eeca0: Create SSL Certificate for test domain of SEND Website
- 372e811: [B2BP-672] - Workflow-deploy-cms-multitenant

### Patch Changes

- 2d3bd6a: Fix for set alias condition for CDN

## 0.1.1

### Patch Changes

- 09bf3e3: [B2BP-547] - Fix downgrade rds version
- 287ffc3: [B2BP-548] Terraform Fix ignore task definition change

## 0.1.0

### Minor Changes

- 2d16c49: Move the infrastructure within the monorepo (`apps/infrastructure`)
