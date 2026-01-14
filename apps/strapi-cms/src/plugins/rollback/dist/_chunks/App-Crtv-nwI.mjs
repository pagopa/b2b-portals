import { jsxs, jsx } from "react/jsx-runtime";
import { useFetchClient, useRBAC, useNotification, Page } from "@strapi/strapi/admin";
import { Routes, Route } from "react-router-dom";
import { Main, Box, Typography, Table, Thead, Tr, Th, Tbody, Td, Flex, Button } from "@strapi/design-system";
import { p as pluginPermissions, P as PLUGIN_ID } from "./index-CZdpln7H.mjs";
import { useState, useEffect } from "react";
const HomePage = () => {
  const { get, post } = useFetchClient();
  const [loading, setLoading] = useState(false);
  const [triggering, setTriggering] = useState(false);
  const [deployments, setDeployments] = useState([]);
  const {
    allowedActions: { canTrigger }
  } = useRBAC(pluginPermissions.trigger);
  const { toggleNotification } = useNotification();
  async function fetchDeployments() {
    setLoading(true);
    try {
      const res = await get(`/${PLUGIN_ID}/deployments`);
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
      const { data } = await post(`/${PLUGIN_ID}/trigger`, { deployment });
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
  useEffect(() => {
    fetchDeployments();
  }, []);
  return /* @__PURE__ */ jsxs(
    Main,
    {
      style: {
        padding: "3.2rem 5.4rem"
      },
      children: [
        /* @__PURE__ */ jsx(Box, { style: { marginBottom: "3.2rem" }, children: /* @__PURE__ */ jsx(Typography, { variant: "alpha", children: "Rollback di Produzione" }) }),
        /* @__PURE__ */ jsxs(Table, { colCount: 5, rowCount: 11, children: [
          /* @__PURE__ */ jsx(Thead, { children: /* @__PURE__ */ jsxs(Tr, { children: [
            /* @__PURE__ */ jsx(Th, { children: /* @__PURE__ */ jsx(Typography, { variant: "sigma", children: "Deploy passati disponibili" }) }, "date"),
            /* @__PURE__ */ jsx(Th, {}, "actions")
          ] }) }),
          /* @__PURE__ */ jsx(Tbody, { children: loading ? /* @__PURE__ */ jsx(Tr, { children: /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(Typography, { variant: "sigma", children: "Recuperando i deploy passati..." }) }) }) : deployments.map((deployment, index) => /* @__PURE__ */ jsxs(Tr, { children: [
            /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsxs(Typography, { variant: "sigma", children: [
              formatDeployment(deployment),
              index === 0 && " - Attualmente in prod"
            ] }) }),
            /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsx(Flex, { justifyContent: "flex-end", children: /* @__PURE__ */ jsx(Button, { disabled: !canTrigger || triggering || index === 0, onClick: () => {
              triggerRollback(deployment);
            }, children: "ROLLBACK A QUESTO DEPLOY" }) }) })
          ] }, deployment)) })
        ] })
      ]
    }
  );
};
const App = () => {
  return /* @__PURE__ */ jsx(Page.Protect, { permissions: pluginPermissions.access, children: /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(HomePage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(Page.Error, {}) })
  ] }) });
};
export {
  App
};
