"use strict";
const react = require("react");
const jsxRuntime = require("react/jsx-runtime");
const icons = require("@strapi/icons");
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
const version = "0.0.0";
const keywords = [];
const type = "commonjs";
const exports$1 = {
  "./package.json": "./package.json",
  "./strapi-admin": {
    types: "./dist/admin/src/index.d.ts",
    source: "./admin/src/index.ts",
    "import": "./dist/admin/index.mjs",
    require: "./dist/admin/index.js",
    "default": "./dist/admin/index.js"
  },
  "./strapi-server": {
    types: "./dist/server/src/index.d.ts",
    source: "./server/src/index.ts",
    "import": "./dist/server/index.mjs",
    require: "./dist/server/index.js",
    "default": "./dist/server/index.js"
  }
};
const files = [
  "dist"
];
const scripts = {
  build: "strapi-plugin build",
  watch: "strapi-plugin watch",
  "watch:link": "strapi-plugin watch:link",
  verify: "strapi-plugin verify",
  "test:ts:front": "run -T tsc -p admin/tsconfig.json",
  "test:ts:back": "run -T tsc -p server/tsconfig.json"
};
const dependencies = {
  "@strapi/design-system": "^2.0.0-rc.30",
  "@strapi/icons": "^2.0.0-rc.30",
  "react-intl": "^8.1.2"
};
const devDependencies = {
  "@strapi/strapi": "^5.34.0",
  "@strapi/sdk-plugin": "^5.4.0",
  prettier: "^3.8.1",
  react: "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.30.3",
  "styled-components": "^6.3.8",
  "@types/react": "^19.2.10",
  "@types/react-dom": "^19.2.3",
  "@strapi/typescript-utils": "^5.34.0",
  typescript: "^5.9.3"
};
const peerDependencies = {
  "@strapi/strapi": "^5.34.0",
  "@strapi/sdk-plugin": "^5.4.0",
  react: "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.30.3",
  "styled-components": "^6.3.8"
};
const strapi = {
  kind: "plugin",
  name: "static-deploy",
  displayName: "Deploy Static Site",
  description: "Trigger Github workflows to build and deploy statically generated websites"
};
const name$1 = "static-deploy";
const description = "Trigger Github workflows to build and deploy statically generated websites";
const license = "MIT";
const author = "Simone Salsi <simone.salsi@dgsspa.com>";
const pluginPackage = {
  version,
  keywords,
  type,
  exports: exports$1,
  files,
  scripts,
  dependencies,
  devDependencies,
  peerDependencies,
  strapi,
  name: name$1,
  description,
  license,
  author
};
const PLUGIN_ID = "static-deploy";
const Initializer = ({ setPlugin }) => {
  const ref = react.useRef(setPlugin);
  react.useEffect(() => {
    ref.current(PLUGIN_ID);
  }, []);
  return null;
};
const PluginIcon = () => /* @__PURE__ */ jsxRuntime.jsx(icons.Upload, {});
const pluginPermissions = {
  access: [
    {
      action: `plugin::${PLUGIN_ID}.access`,
      subject: null
    }
  ],
  trigger: [
    {
      action: `plugin::${PLUGIN_ID}.trigger`,
      subject: null
    }
  ],
  notifications: [
    {
      action: `plugin::${PLUGIN_ID}.notifications`,
      subject: null
    }
  ]
};
const name = pluginPackage.strapi.displayName;
const index = {
  register(app) {
    app.addMenuLink({
      to: `plugins/${PLUGIN_ID}`,
      icon: PluginIcon,
      permissions: pluginPermissions.access,
      intlLabel: {
        id: `${PLUGIN_ID}.plugin.name`,
        defaultMessage: name
      },
      Component: async () => {
        const { App } = await Promise.resolve().then(() => require("./App-Dcl3WSUT.js"));
        return App;
      }
    });
    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID
    });
  },
  async registerTrads({ locales }) {
    return Promise.all(
      locales.map(async (locale) => {
        try {
          const { default: data } = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./translations/en.json": () => Promise.resolve().then(() => require("./en-B4KWt_jN.js")) }), `./translations/${locale}.json`, 3);
          return { data, locale };
        } catch {
          return { data: {}, locale };
        }
      })
    );
  }
};
exports.PLUGIN_ID = PLUGIN_ID;
exports.index = index;
exports.pluginPermissions = pluginPermissions;
