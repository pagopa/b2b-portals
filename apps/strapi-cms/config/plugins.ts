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
  'static-deploy': {
    enabled: true,
    config: {
      owner: env('REPO_OWNER', 'pagopa'),
      repo: env('REPO_NAME', 'b2b-portals'),
      workflowID: env('WORKFLOW_ID', 'deploy_website.yaml'),
      branch: env('TARGET_BRANCH', 'main'),
      githubToken: env('GITHUB_PAT'),
      environment: env('ENVIRONMENT', 'demo'),
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
        }
      ]
    }
  },
});