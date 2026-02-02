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
const strapi = {
  displayName: "Deploy Static Site"
};
const pluginPackage = {
  strapi
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
        const { App } = await Promise.resolve().then(() => require("./App-CsoiqvSI.js"));
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
