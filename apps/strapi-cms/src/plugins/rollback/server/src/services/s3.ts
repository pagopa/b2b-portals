import type { Core } from "@strapi/strapi";
import { S3Client, ListObjectsV2Command, HeadObjectCommand } from "@aws-sdk/client-s3";
import { PLUGIN_ID } from "../../../admin/src/pluginId";
import Deployment from "../../../types/deployment";

const s3Service = ({ strapi }: { strapi: Core.Strapi }) => ({
  async deployments() {
    const environment: string = strapi.plugin(PLUGIN_ID).config("environment");
    const accessKeyId: string = strapi
      .plugin(PLUGIN_ID)
      .config("s3_accessKeyId");
    const secretAccessKey: string = strapi
      .plugin(PLUGIN_ID)
      .config("s3_secretAccessKey");
    const endpoint: string = strapi.plugin(PLUGIN_ID).config("s3_endpoint");
    const bucket: string = strapi.plugin(PLUGIN_ID).config("s3_bucketName");
    const region: string = strapi.plugin(PLUGIN_ID).config("s3_region");

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
      Delimiter: "/",
    });

    const res = await s3.send(command);

    const folders = (
      res.CommonPrefixes?.map((p) =>
        p.Prefix!.replace(`${environment}/`, "").replace(/\/$/, ""),
      ) ?? []
    )
      .filter((f) => f && f !== "latest")
      .reverse();

    const deployments: ReadonlyArray<Deployment> = await Promise.all(folders.map(async (folder) => {
      try {
        const headCommand = new HeadObjectCommand({
          Bucket: bucket,
          Key: `${environment}/${folder}/index.html`,
        });

        const headRes = await s3.send(headCommand);

        return {
          folder,
          description: headRes.Metadata?.description ?? null,
        };
      } catch (err) {
        return {
          folder,
          description: null,
        };
      }
    }));

    return deployments;
  },
});

export default s3Service;
