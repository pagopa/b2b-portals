export default ({ env }: any) => ({
  upload: {
    config: {
      provider: env('AWS_PROVIDER', 'aws-s3'),
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION'),
        params: {
          ACL: 'private',
          signedUrlExpires: 15 * 60,
          Bucket: env('AWS_BUCKET_NAME'),
        },
      },
    },
  },
  navigation: {
    enabled: true,
    config: {
      contentTypes: ['api::page.page'],
      contentTypesNameFields: {
          'api::page.page': ['name']
      },
      pathDefaultFields: {
          'api::page.page': ['slug']
      },
      allowedLevels: 2,
      cascadeMenuAttached: false
    }
  },
});