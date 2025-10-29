export default ({ env }: any) => ({
  upload: {
    config: {
      provider: env('UPLOAD_PLUGIN_PROVIDER', 'aws-s3'),
      providerOptions: {
        baseUrl: env('CDN_URL'),
        s3Options: {
          credentials: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
          },
          endpoint: env('AWS_BUCKET_ENDPOINT'),
          params: {
            ACL: 'private',
            signedUrlExpires: 15 * 60,
            Bucket: env('AWS_BUCKET_NAME'),
          },
        }
      },
    },
  },
  email: {
    config: {
      provider: 'amazon-ses',
      providerOptions: {
        key: env('AWS_ACCESS_KEY_ID'),
        secret: env('AWS_ACCESS_SECRET'),
        amazon: `https://email.${env('AWS_REGION', 'eu-south-1')}.amazonaws.com`,
      },
      settings: {
        defaultFrom: 'no-reply@b2bportals.pagopa.it',
        defaultReplyTo: 'no-reply@b2bportals.pagopa.it',
      },
    },
  },
  'static-deploy': {
    enabled: true,
    config: {
      owner: env('REPO_OWNER', 'pagopa'),
      repo: env('REPO_NAME', 'b2b-portals'),
      workflowID: env('WORKFLOW_ID', 'deploy_website_prod.yaml'),
      branch: env('TARGET_BRANCH', 'main'),
      githubToken: env('GITHUB_PAT', 'test-token'),
      environment: env('ENVIRONMENT', 'demo'),
      staging: {
        workflowID: env('STAGING_WORKFLOW_ID', 'deploy_website_staging.yaml'),
        branch: env('STAGING_TARGET_BRANCH'),
      },
      notifications: {
        enabled: true,
        bearerToken: env('WORKFLOW_NOTIFICATIONS_BEARER_TOKEN', 'test-token'),
      }
    },
  },
  'preview-button': {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: 'api::page.page',
          draft: {
            url: env('PREVIEW_URL'),
            query: {
              type: 'page',
              documentID: '{documentId}',
              locale: '{locale}',
              secret: env('PREVIEW_TOKEN'),
              tenant: env('ENVIRONMENT'),
            },
            openTarget: '_blank',
            copy: false,
            alwaysVisible: true,
          },
        },
        {
          uid: 'api::press-release.press-release',
          draft: {
            url: env('PREVIEW_URL'),
            query: {
              type: 'press-release',
              documentID: '{documentId}',
              locale: '{locale}',
              secret: env('PREVIEW_TOKEN'),
              tenant: env('ENVIRONMENT'),
            },
            openTarget: '_blank',
            copy: false,
            alwaysVisible: true,
          },
        },
        {
          uid: 'api::page-switch-page.page-switch-page',
          draft: {
            url: env('PREVIEW_URL'),
            query: {
              type: 'page-switch-page',
              documentID: '{documentId}',
              locale: '{locale}',
              secret: env('PREVIEW_TOKEN'),
              tenant: env('ENVIRONMENT'),
            },
            openTarget: '_blank',
            copy: false,
            alwaysVisible: true,
          },
        }
      ]
    }
  },
  rollback: {
    enabled: true,
    resolve: './src/plugins/rollback',
  },
});