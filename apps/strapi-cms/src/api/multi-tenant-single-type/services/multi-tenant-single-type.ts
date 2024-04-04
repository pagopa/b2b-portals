import type { Common } from '@strapi/strapi';
import { GetNonPopulatableKeys, GetPopulatableKeys } from '@strapi/strapi/lib/types/core/attributes';
import { Client } from "pg";

const tenantNames = {
  send: "SEND Editor",
  appio: "AppIO Editor",
};

const singleTypesData: {
    generals: {
        service: Common.UID.ContentType,
        fields: ("id" | `${string},${string}` | GetNonPopulatableKeys<"api::general.general">)[],
        populate: `${string},${string}` | `${string}.${string}` | GetPopulatableKeys<"api::general.general">[],
    },
    pre_headers: {
        service: Common.UID.ContentType,
        fields: ("id" | `${string},${string}` | GetNonPopulatableKeys<"api::pre-header.pre-header">)[],
        populate: `${string},${string}` | `${string}.${string}` | GetPopulatableKeys<"api::pre-header.pre-header">[],
    },
    headers: {
        service: Common.UID.ContentType,
        fields: ("id" | `${string},${string}` | GetNonPopulatableKeys<"api::header.header">)[],
        populate: `${string},${string}` | `${string}.${string}` | GetPopulatableKeys<"api::header.header">[],
    },
    footers: {
        service: Common.UID.ContentType,
        fields: ("id" | `${string},${string}` | GetNonPopulatableKeys<"api::footer.footer">)[],
        populate: `${string},${string}` | `${string}.${string}` | GetPopulatableKeys<"api::footer.footer">[],
    },
} = {
    generals: {
        service: "api::general.general",
        fields: ['id'],
        populate: ['appleTouchIcon', 'favicon', 'manifest', 'metaImage'],
    },
    pre_headers: {
        service: "api::pre-header.pre-header",
        fields: ['id'],
        populate: ['leftCtas', 'rightCtas'],
    },
    headers: {
        service: "api::header.header",
        fields: ['id', 'beta', 'productName'],
        populate: ['ctaButtons', 'logo'],
    },
    footers: {
        service: "api::footer.footer",
        fields: ['id', 'legalInfo', 'showFundedByNextGenerationEULogo'],
        populate: ['companyLink', 'links_aboutUs', 'links_followUs', 'links_resources', 'links_services'],
    },
}

export default () => ({
    getSingleType: async (tenant: 'send' | 'appio', singleType: 'generals' | 'pre_headers' | 'headers' | 'footers') => {
        const client = new Client({
          application_name: "strapi",
          database: process.env["DATABASE_NAME"],
          host: process.env["DATABASE_HOST"],
          password: process.env["DATABASE_PASSWORD"],
          port: Number(process.env["DATABASE_PORT"]),
          query_timeout: 3000,
          statement_timeout: 3000,
          user: process.env["DATABASE_USERNAME"],
        });
    
        try {
          await client.connect();
    
          // Select appropriate schema
          await client.query(
            `SET search_path TO '${process.env["DATABASE_SCHEMA"]}';`
          );
    
          const rolesRes = await client.query(`SELECT id FROM admin_roles WHERE name = '${tenantNames[tenant]}'`);
    
          if (rolesRes.rowCount === null || rolesRes.rowCount <= 0) {
            return { success: false, err: 'No role found for the requested tenant' };
          }
    
          // Using [0] because we are only ever expecting one role for each tenant
          const roleID = rolesRes.rows[0].id;
    
          const usersRes = await client.query(`SELECT user_id FROM admin_users_roles_links WHERE role_id = ${roleID}`);
    
          if (usersRes.rowCount === null || usersRes.rowCount <= 0) {
            return { success: false, err: 'No users found for the requested tenant' };
          }
    
          const userIDs = usersRes.rows.map(obj => obj.user_id);
          const componentID = (await client.query(`SELECT * FROM ${singleType} WHERE created_by_id IN (${userIDs.toString()})`)).rows[0].id;

          const component = await strapi.entityService.findOne(singleTypesData[singleType].service, componentID, {
            // casts below is due to us having to specify the ContentType at line 24 to 27 to be able to fill variables
            // TS is scared about the fact that not all fields of, for example, "api:header.header" are valid for all ContentTypes
            // However, we're sure about using only valid fields thanks to the above singleTypeServices[singleType]
            fields: singleTypesData[singleType].fields as ("id" | `${string},${string}` | GetNonPopulatableKeys<Common.UID.ContentType>)[],
            populate: singleTypesData[singleType].populate as (`${string},${string}` | `${string}.${string}` | GetPopulatableKeys<Common.UID.ContentType>)[],
          })
    
          return { success: true, component };
        } catch (err) {
          return { success: false, err };
        } finally {
          await client.end();
        }
      },
});
