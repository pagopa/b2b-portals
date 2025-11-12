import type { Core } from '@strapi/strapi';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { PLUGIN_ID } from '../../../admin/src/pluginId';

const s3Service = ({ strapi }: { strapi: Core.Strapi }) => ({
  async deployments() {
    try {
      const environment: string = strapi.plugin(PLUGIN_ID).config('environment');
      const accessKeyId: string = strapi
        .plugin(PLUGIN_ID)
        .config('s3_accessKeyId');
      const secretAccessKey: string = strapi
        .plugin(PLUGIN_ID)
        .config('s3_secretAccessKey');
      const endpoint: string = strapi.plugin(PLUGIN_ID).config('s3_endpoint');
      const bucket: string = strapi.plugin(PLUGIN_ID).config('s3_bucketName');
      const region: string = strapi.plugin(PLUGIN_ID).config('s3_region');

      const s3 = new S3Client({
        region,
        endpoint,
        credentials: {
          accessKeyId,
          secretAccessKey,
        },
      });

      const command = new ListObjectsV2Command({
        Bucket: bucket,
        Prefix: `${environment}/`,
        Delimiter: '/',
      });

      const res = await s3.send(command);

      // const folders =
      //   res.CommonPrefixes?.map((p) =>
      //     p.Prefix!.replace(`${environment}/`, '').replace(/\/$/, ''),
      //   ) ?? [];

      // return folders.filter((f) => f && f !== 'latest');

      return {
        err: null,
        res,
      };
      // return ['2025-09-23_07-47-23', '2025-09-23_08-28-03'];
    } catch (err) {
      return {
        err,
        res: null,
      }
    }
  },
});

export default s3Service;
