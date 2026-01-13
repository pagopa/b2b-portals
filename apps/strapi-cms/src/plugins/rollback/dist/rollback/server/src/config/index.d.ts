import Config from '../../../types/config';
type Validator = Partial<Config>;
declare const _default: {
    default: {};
    validator({ githubToken, environment, s3_accessKeyId, s3_secretAccessKey, s3_endpoint, s3_bucketName, s3_region }: Validator): void;
};
export default _default;
