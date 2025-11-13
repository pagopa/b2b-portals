import Config from '../../../types/config'

type Validator = Partial<Config>;

export default {
  default: {},
  validator({ githubToken, environment, s3_accessKeyId, s3_secretAccessKey, s3_endpoint, s3_bucketName, s3_region }: Validator) {
    // Check if required keys are present
    if (!environment) {
      throw new Error('`environment` key in your plugin config is required');
    }
    if (!githubToken) {
      throw new Error('`githubToken` key in your plugin config is required');
    }
    if (!s3_accessKeyId) {
      throw new Error('`s3_accessKeyId` key in your plugin config is required');
    }
    if (!s3_secretAccessKey) {
      throw new Error('`s3_secretAccessKey` key in your plugin config is required');
    }
    if (!s3_endpoint) {
      throw new Error('`s3_endpoint` key in your plugin config is required');
    }
    if (!s3_bucketName) {
      throw new Error('`s3_bucketName` key in your plugin config is required');
    }
    if (!s3_region) {
      throw new Error('`s3_region` key in your plugin config is required');
    }
    
    // Check if config is valid
    if (githubToken && typeof githubToken !== 'string') {
      throw new Error('`githubToken` key in your plugin config has to be a string');
    }
    if (environment && typeof environment !== 'string') {
      throw new Error('`environment` key in your plugin config has to be a string');
    }
    if (s3_accessKeyId && typeof s3_accessKeyId !== 'string') {
      throw new Error('`s3_accessKeyId` key in your plugin config has to be a string');
    }
    if (s3_secretAccessKey && typeof s3_secretAccessKey !== 'string') {
      throw new Error('`s3_secretAccessKey` key in your plugin config has to be a string');
    }
    if (s3_endpoint && typeof s3_endpoint !== 'string') {
      throw new Error('`s3_endpoint` key in your plugin config has to be a string');
    }
    if (s3_bucketName && typeof s3_bucketName !== 'string') {
      throw new Error('`s3_bucketName` key in your plugin config has to be a string');
    }
    if (s3_region && typeof s3_region !== 'string') {
      throw new Error('`s3_region` key in your plugin config has to be a string');
    }
  },
};
