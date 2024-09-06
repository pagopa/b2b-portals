import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { HighlightBox } from "@react-components/components";
import { HighlightBoxProps as HighlightBoxTypes } from "@react-components/types";

// Define the default export with metadata about your component
const meta: Meta<typeof HighlightBox> = {
  title: "Components/HighlightBox/default",
  component: HighlightBox,
};
export default meta;

// Define a "Template" function for rendering
const Template: StoryFn<HighlightBoxTypes> = (args) => (
  <HighlightBox {...args} />
);

export const HighlightBoxFull = Template.bind({});
HighlightBoxFull.args = {
  title: "Sta arrivando IT Wallet!",
  body: "Se hai tra 18 e 35 anni compiuti puoi richiedere su IO la Carta Giovani Nazionale, istituita dal Dipartimento per le Politiche Giovanili e il Servizio Civile Universale. La carta dà diritto a sconti e agevolazioni per l’accesso ad attività culturali, sportive e ricreative, anche con finalità formative.",
  imageUrl:
    "https://notifichedigitali.pagopa.it/static/images/hero-cittadini-foreground.png",
  eyelet: "In arrivo su IO",
  buttonText: "Scopri di più",
  buttonHref: "/",
  sectionID: "highlight-box-1",
};

export const HighlightBoxWithoutButton = Template.bind({});
HighlightBoxWithoutButton.args = {
  title: "Sta arrivando IT Wallet!",
  body: "Se hai tra 18 e 35 anni compiuti puoi richiedere su IO la Carta Giovani Nazionale, istituita dal Dipartimento per le Politiche Giovanili e il Servizio Civile Universale. La carta dà diritto a sconti e agevolazioni per l’accesso ad attività culturali, sportive e ricreative, anche con finalità formative.",
  imageUrl:
    "https://notifichedigitali.pagopa.it/static/images/hero-cittadini-foreground.png",
  eyelet: "In arrivo su IO",
  buttonText: "",
  buttonHref: "",
  sectionID: "highlight-box-2",
};

export const HighlightBoxWithoutEyelet = Template.bind({});
HighlightBoxWithoutEyelet.args = {
  title: "Sta arrivando IT Wallet!",
  body: "Se hai tra 18 e 35 anni compiuti puoi richiedere su IO la Carta Giovani Nazionale, istituita dal Dipartimento per le Politiche Giovanili e il Servizio Civile Universale. La carta dà diritto a sconti e agevolazioni per l’accesso ad attività culturali, sportive e ricreative, anche con finalità formative.",
  imageUrl:
    "https://notifichedigitali.pagopa.it/static/images/hero-cittadini-foreground.png",
  eyelet: "",
  buttonText: "Scopri di più",
  buttonHref: "/",
  sectionID: "highlight-box-3",
};
