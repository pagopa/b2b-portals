"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const admin = require("@strapi/strapi/admin");
const reactRouterDom = require("react-router-dom");
const designSystem = require("@strapi/design-system");
const index = require("./index-C6tsoY7K.js");
const react = require("react");
const HomePage = () => {
  const { get, post } = admin.useFetchClient();
  const [loading, setLoading] = react.useState(false);
  const [triggering, setTriggering] = react.useState(false);
  const [deployments, setDeployments] = react.useState([]);
  const {
    allowedActions: { canTrigger }
  } = admin.useRBAC(index.pluginPermissions.trigger);
  const { toggleNotification } = admin.useNotification();
  async function fetchDeployments() {
    setLoading(true);
    try {
      const res = await get(`/${index.PLUGIN_ID}/deployments`);
      setDeployments(res.data);
    } catch (error) {
      if (error.name === "AbortError") {
        return;
      } else {
        console.error(error);
        toggleNotification({
          type: "danger",
          title: "Impossibile recuperare la lista di deploy passati!"
        });
      }
    } finally {
      setLoading(false);
    }
  }
  async function triggerRollback(deployment) {
    setTriggering(true);
    try {
      const { data } = await post(`/${index.PLUGIN_ID}/trigger`, { deployment });
      if (data.success) {
        toggleNotification({
          type: "success",
          title: "Rollback lanciato con successo!"
        });
      } else {
        throw new Error(`GITHUB WORKFLOW ERROR.

Status: ${data.status}
Error: ${data.err}`);
      }
    } catch (error) {
      if (error.name === "AbortError") {
        return;
      } else {
        console.error(error);
        toggleNotification({
          type: "danger",
          title: "Impossibile lanciare il rollback!"
        });
      }
    } finally {
      setTriggering(false);
    }
  }
  const formatDeployment = (deployment) => {
    const date = deployment.split("_")[0].split("-").reverse().join("/");
    const time = deployment.split("_")[1].replaceAll("-", ":");
    return `${date} (${time})`;
  };
  react.useEffect(() => {
    fetchDeployments();
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    designSystem.Main,
    {
      style: {
        padding: "3.2rem 5.4rem"
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { style: { marginBottom: "3.2rem" }, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "alpha", children: "Rollback di Produzione" }) }),
        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Table, { colCount: 5, rowCount: 11, children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Thead, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Tr, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", children: "Deploy passati disponibili" }) }, "date"),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, {}, "actions")
          ] }) }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Tbody, { children: loading ? /* @__PURE__ */ jsxRuntime.jsx(designSystem.Tr, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", children: "Recuperando i deploy passati..." }) }) }) : deployments.map((deployment, index2) => /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Tr, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { variant: "sigma", children: [
              formatDeployment(deployment),
              index2 === 0 && " - Attualmente in prod"
            ] }) }),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "flex-end", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { disabled: !canTrigger || triggering || index2 === 0, onClick: () => {
              triggerRollback(deployment);
            }, children: "ROLLBACK A QUESTO DEPLOY" }) }) })
          ] }, deployment)) })
        ] })
      ]
    }
  );
};
const App = () => {
  return /* @__PURE__ */ jsxRuntime.jsx(admin.Page.Protect, { permissions: index.pluginPermissions.access, children: /* @__PURE__ */ jsxRuntime.jsxs(reactRouterDom.Routes, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { index: true, element: /* @__PURE__ */ jsxRuntime.jsx(HomePage, {}) }),
    /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { path: "*", element: /* @__PURE__ */ jsxRuntime.jsx(admin.Page.Error, {}) })
  ] }) });
};
exports.App = App;
