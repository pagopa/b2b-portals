import React from 'react';
import { Hero, Editorial, Feature, HowTo, Stats, Accordion, Download, Listing, Newsroom, Video, Abstract, BannerLink } from '@pagopa/pagopa-editorial-components';

export type ComponentData = {
  type: string | 'button' | 'link';
  theme?: 'light' | 'dark';
  image?: string;
  size?: 'small' | 'big';
  title?: string;
  subtitle?: string;
  body?: string;
  width?: 'wide' | 'center' | 'standard';
  reversed?: boolean;
  eyelet?: string;
  kpiCaption?: string;
  name?: string;
  background: string;
  buttonText: string;
  text: string | { title: string };
  autoplay: boolean;
  src: string;
  description: string;
  layout: 'center' | 'left' | 'right';
  overline: string;
  reverse: boolean;
  itemsAlignment: 'center' | 'left' | 'right';
  textAlign: 'center' | 'left';
  altText: string;
  inverse: boolean;
  useHoverlay: boolean;
  pattern?: 'dots' | 'solid' | 'none';
  rowMaxSteps: number;
  stepsAlignment: 'center' | 'left' | 'right';
  showCarouselMobile: boolean;
  items?: {
    fileName: string;
    href: string;
    label: string;
    htmlTitle: string;
    text: string;
  }[];
  steps?: {
    description: string;
    stepIcon: {
      icon: string;
    };
    title: string;
  }[];
  link?: {
    href: string;
    label: string;
  }[];
  kpiValues?: {
    caption: string;
    id: string | number;
    kpiIcon: {
      icon: string;
    };
    value: number;
  }[];
  accordionValues?: {
    content: string;
    header: string;
  }[];
  listingValues?: {
    date: {
      date: Date;
      locale: string;
      options: {
        day: string;
        month: string;
        year: string;
      }
      preDate: string;
    }
  }[];
  listingValuesItem?: {
    href: string;
    htmlTitle: string;
    text: string;
  }[];
  newsroomValues?: {
    date: {
      date: Date;
    };
    href: {
      label: string;
      link: string;
      title: string;
    };
    img: {
      alt: string;
      src: string;
    };
    title: string;
  }[];
  quotesValues?: {
    quotes: {
      text: string;
    }
  }[];
  stripelinkValues?: {
    icon: {
      color: string;
      icon: string;
    }
  }[];
  ctaButtons?: {
    onClick: () => void;
    text: string;
    variant?: 'outlined' | 'text' | 'contained';
    color?: 'primary' | 'inherit' | 'secondary' | 'success' | 'error' | 'info';
    path?: string;
  }[];
  decoration?: {
    alt: string;
    src: string;
  };
  headerValue?: {
    menu: {
      active: boolean;
      items: {
        href: string;
        key: string;
        label: string;
      };
      label: string;
      theme: 'light' | 'dark';
    };
  }[];
  product: {
    href?: string;
    name: string;
  };
  // ctaButtonsLeftValue?: {
  //   leftCtas: {
  //     theme: 'light' | 'dark';
  //     ctaButtons: {
  //       color: string;
  //       href: string;
  //       text: string;
  //       variant: string;
  //       theme: 'light' | 'dark';
  //     };
  //   }
  // }[];
  // ctaButtonsRightValue?: {
  //   rightCtas: {
  //     theme: 'light' | 'dark';
  //     ctaButtons: {
  //       color: string;
  //       onClick: () => void;
  //       startIcon: string;
  //       text: string;
  //       variant: string;
  //     };
  //   }
  // }[];
  cardsValues?: {
    items: {
      cardIcon: {
        icon: string;
      };
      link: {
        href: string;
        text: string;
        title: string;
      };
      text: string;
      title: string;
    };
    text: {
      title: string;
    };
    theme: 'light' | 'dark';
  }[];
  featureValues?: {
    items: {
      link: {
        text: string;
        url: string;
      };
      stackIcon: {
        icon: string;
      };
      subtitle: string;
      title: string;
    }
  }[];
};


export function renderComponent(componentData: ComponentData, index: number) {
  switch (componentData.type) {

    // Priorità alta 

    case 'hero':
      return (
        <Hero
          background={componentData.background}
          size={componentData.size === 'small' || componentData.size === undefined ? 'small' : 'big'}
          title={componentData.title || 'Titolo'}
          subtitle={componentData.subtitle}
          ctaButtons={componentData.ctaButtons}
          theme={componentData.theme || 'light'}
          image={
            <img
              src={componentData.image}
              alt="hero image"
              style={{
                width: '100%',
                height: 'auto',
                margin: 'auto',
                display: 'block',
                justifyItems: 'center',
              }}
            />
          }
          altText={componentData.altText}
          inverse={componentData.inverse}
          useHoverlay={componentData.useHoverlay}
          key={index}
        />
      );

    // Hero - tutto ok tranne il colore dei pulsanti, non riesco a trovare il bianco   


    case 'editorial':
      return (
        <Editorial
          theme={componentData.theme !== undefined ? componentData.theme : 'light'}
          image={
            <img
              src={componentData.image}
              alt="hero image"
              style={{
                width: '100%',
                height: 'auto',
                margin: 'auto',
                display: 'block',
                justifyContent: 'center',
                justifyItems: 'center',
              }}
            />
          }
          eyelet={componentData.eyelet}
          title={componentData.title || 'Titolo'}
          body={componentData.body || 'Descrizione'}
          ctaButtons={componentData.ctaButtons}
          reversed={componentData.reversed}
          width={componentData.width === 'wide' || componentData.width === 'center' ? componentData.width : 'standard'}
          pattern={componentData.pattern}
          key={index}
        />
      );

    // Editorial - tutto ok tranne il colore dei pulsanti, non riesco a trovare il bianco 


    case 'howTo':
      // const steps = (componentData.steps ?? []).map((step, itemIndex) => ({
      //   stepIcon: {
      //     icon: step.stepIcon.icon,
      //   },
      //   title: step.title,
      //   description: step.description,
      // }));
      return (
        <HowTo
          title={componentData.title || 'Titolo'}
          steps={componentData.steps}
          theme={componentData.theme || 'light'}
          link={componentData.link}
          rowMaxSteps={componentData.rowMaxSteps}
          stepsAlignment={componentData.stepsAlignment}
          key={index}
        />
      );

    // How To - come usare le proprietà rowMaxSteps e stepsAlignment + icone.
    // theme dark non funziona


    // case 'cards':
    //   const cardsValuesData = (componentData.cardsValues || []).map((cardsValues, itemIndex) => ({
    //     cardIcon: {
    //       icon: cardsValues.items.cardIcon.icon,
    //     },
    //     link: {
    //       href: cardsValues.items.link.href,
    //       text: cardsValues.items.text,
    //       title: cardsValues.items.title,
    //     },
    //     text: cardsValues.items.text,
    //     title: cardsValues.items.title
    //   })); 

    //   return (
    //     <Cards
    //       items={cardsValuesData}
    //       text={componentData.text}
    //       theme={componentData.theme || 'light'}
    //       key={index}
    //     />
    //   );

    // // Impossibile trovare cards tra gli import


    case 'accordion':
      const accordionValuesData = (componentData.accordionValues || []).map((accordionValues, accordionValuesIndex) => ({
        content: accordionValues.content,
        header: accordionValues.header
      }));
      return (
        <Accordion
          title={componentData.title || 'Titolo'}
          subtitle={componentData.subtitle || 'Sottotitolo'}
          description={componentData.description || 'Testo descrizione'}
          accordionItems={accordionValuesData}
          theme={componentData.theme || 'light'}
          layout={componentData.layout || 'center'}
          key={index}
        />
      );

    // Accordion OK  


    // Priorità media 

    case 'feature':
      const featureValuesData = (componentData.featureValues ?? []).map((featureValues, itemIndex) => ({
        link: {
          text: featureValues.items.link.text
        },
        stackIcon: {
          icon: featureValues.items.stackIcon.icon,
        },
        title: featureValues.items.title,
        subtitle: featureValues.items.subtitle,
      }));
      return (
        <Feature
          theme={componentData.theme || 'light'}
          title={componentData.title || 'Titolo'}
          items={featureValuesData}
          showCarouselMobile={componentData.showCarouselMobile}
          background={componentData.background}
          key={index}
        />
      );

    // Feature non funziona... Si vede solo il titolo, stampando featureValuesData non si ottiene nulla 


    case 'abstract':
      return (
        <Abstract
          overline={componentData.overline || 'Testo overline'}
          title={componentData.title || 'Titolo'}
          description={componentData.description || 'Testo descrizione'}
          layout={componentData.layout || 'center'}
          background={componentData.background || 'Immagine background'}
          theme={componentData.theme || 'light'}
          key={index}
        />
      );

    // Abstract ok   

























    case 'bannerLink':
      const ctaButtonsData = (componentData.ctaButtons || []).map((ctaButton, ctaButtonIndex) => ({
        onClick: () => {
          const path = ctaButton.path || '/';
          window.location.href = path;
        },
        text: ctaButton.text || 'Default Button Text',
        variant: ctaButton.variant || 'outlined',
        color: ctaButton.color || 'primary',
      }));

      return (
        <BannerLink
          body={componentData.body || 'Default Body Text'}
          ctaButtons={ctaButtonsData}
          decoration={componentData.decoration}
          theme={componentData.theme || 'light'}
          title={componentData.title || 'Default Title'}
        />
      );



    case 'download':
      const downloadValuesData = (componentData.items || []).map((item, itemIndex) => ({
        fileName: item.fileName,
        href: item.href,
        label: item.label
      }));
      return (
        <Download
          items={downloadValuesData}
          itemsAlignment={componentData.itemsAlignment || 'center'}
          subtitle={componentData.subtitle || 'Sottotitolo'}
          theme={componentData.theme || 'light'}
          title={componentData.title || 'Titolo'}
          type={'button' || 'link'}
          key={index}
        />
      );
    // rivedere download
    // in download trovare il modo di impostare un type, va in contrasto con il type del json 


    case 'stats':
      const kpiValuesData = (componentData.kpiValues || []).map((kpi, kpiIndex) => ({
        caption: kpi.caption || 'Default Caption',
        id: kpi.id || 'Default ID',
        kpiIcon: {
          icon: kpi.kpiIcon?.icon || 'Default Icon',
        },
        value: kpi.value || 0,
      }));
      return (
        <Stats
          body={componentData.body || 'body'}
          eyelet={componentData.eyelet || 'eyelet'}
          kpiCaption={componentData.kpiCaption || 'kpiCaption'}
          kpiValues={kpiValuesData}
          theme={componentData.theme || 'light'}
          title={componentData.title || 'Titolo'}
          key={index}
        />
      );


    // case 'quote':
    //   const quotesValuesData = (componentData.quotesValues || []).map((quotesValues, itemIndex) => ({
    //     quotes: {
    //       text: quotesValues.quotes.text
    //     }
    //   }));
    //   return (
    //     <Quote
    //       background={componentData.background || "background"}
    //       quotes={quotesValuesData}
    //       theme={componentData.theme || "light"}
    //       key={index}
    //     />
    //   );
    // impossibile trovare quote tra gli import



    // case 'stripelink':
    //   const stripelinkValuesData = (componentData.stripelinkValues || []).map((stripelinkValues, itemIndex) => ({
    //     icon: {
    //       color: stripelinkValues.icon.color,
    //       icon: stripelinkValues.icon.icon
    //     }
    //   }));
    //   return (
    //     <StripeLink
    //       buttonText={componentData.buttonText || "buttonText"}
    //       icon={stripelinkValuesData}
    //       subtitle={componentData.subtitle || "subtitle"}
    //       theme="light"
    //       key={index}
    //     />
    //   );
    //   // impossibile trovare stripelink tra gli import



    case 'video':
      return (
        <Video
          autoplay={false || true}
          src={componentData.src || "true"}
          subtitle={componentData.subtitle || "true"}
          theme="light"
          title={componentData.title || "true"}
          key={index}
        />
      );



    // Non presenti nel documento su confluence

    case 'listing':
      const listingValuesData = (componentData.listingValues || []).map((listingValues, itemIndex) => ({
        listingValues: {
          date: {
            date: listingValues.date.date,
            locale: listingValues.date.locale,
            options: {
              day: listingValues.date.options.day,
              month: listingValues.date.options.month,
              year: listingValues.date.options.year
            },
            preDate: listingValues.date.preDate
          }
        }
      }));
      const listingValuesDataItems = (componentData.listingValuesItem || []).map((listingValuesItem, itemIndex) => ({
        listingValuesItem: {
          href: listingValuesItem.href,
          htmlTitle: listingValuesItem.htmlTitle,
          text: listingValuesItem.text
        }
      }));
      return (
        <Listing
          date={listingValuesData}
          items={listingValuesDataItems}
          name={componentData.name || 'nome'}
          title={componentData.title || 'Titolo'}
          key={index}
        />
      );
    // rivedere listing 



    case 'newsroom':
      const newsroomValuesData = (componentData.newsroomValues || []).map((newsroomValues, itemIndex) => ({
        // items: {
        date: {
          date: newsroomValues.date.date,
        },
        href: {
          label: newsroomValues.href.label,
          link: newsroomValues.href.link,
          title: newsroomValues.href.title
        },
        img: {
          alt: newsroomValues.img.alt,
          src: newsroomValues.img.src
        },
        title: newsroomValues.title
        // }
      }));
      return (
        <Newsroom
          items={newsroomValuesData}
          key={index}
        />
      );
    // rivedere newsroom



    // case 'text':
    //   return (
    //     <Text
    //       subtitle={componentData.subtitle || "subtitle"}
    //       text={componentData.text || "text"}
    //       title={componentData.title || "title"}
    //       theme="light"
    //       key={index}
    //     />
    //   );


    // case 'form':
    //   return (
    //     <FormComponent
    //       title={componentData.title || 'Titolo'}
    //       buttonText={componentData.buttonText || 'Testo pulsante'}
    //       key={index}
    //     />
    //   );


    default:
      return null;
  }
}