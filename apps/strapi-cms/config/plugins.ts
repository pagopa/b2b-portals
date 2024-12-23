export default ({ env }: any) => ({
  upload: {
    config: {
      provider: env('UPLOAD_PLUGIN_PROVIDER', 'aws-s3'),
      providerOptions: {
        baseUrl: env('CDN_URL'),
        s3Options: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
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
  'update-static-content': {
    enabled: true,
    config: {
      environment: env('ENVIRONMENT'),
      githubToken: env('GITHUB_PAT'),
      owner: env('REPO_OWNER', 'pagopa'),
      repo: env('REPO_NAME', 'b2b-portals'),
      workflowId: env('WORKFLOW_ID', 'deploy_website.yaml'),
      branch: env('TARGET_BRANCH', 'main'),
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
              pageID: '{id}',
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
              pageID: '{id}',
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
  'copy-locales': {
    enabled: true,
    config: {
      contentTypes: [
        'api::page.page',
        'api::page-switch-page.page-switch-page'
      ]
    }
  }
});