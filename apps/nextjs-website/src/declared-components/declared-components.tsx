import React from 'react';
import { Hero, Editorial, Feature, HowTo, Stats, Accordion, Download, Listing, Newsroom, Video } from '@pagopa/pagopa-editorial-components';

export type ComponentData = {
  type: string;
  theme?: 'light' | 'dark';
  image?: string;
  size?: 'small' | 'big';
  title?: string;
  subtitle?: string;
  body?: string;
  width?: 'wide' | 'center' | 'standard';
  reversed?: boolean;
  items?: {
    stackIcon: {
      icon: string;
    };
    title: string;
    subtitle: string;
    // cardIcon: {
    //   icon: string;
    // };
    // link: {
    //   href: string;
    //   text: string;
    //   title: string;
    // };
    // text: {
    //   title: string;
    // } 
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
  eyelet?: string;
  kpiCaption?: string;
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
  name?: string;
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
  background: string;
  stripelinkValues?: {
    icon: {
      color: string;
      icon: string;
    }
  }[];
  buttonText: string;
  text: string;
  autoplay: boolean;
  src: string;
};

export function renderComponent(componentData: ComponentData, index: number) {
  switch (componentData.type) {
    case 'hero':
      return (
        <Hero
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
          size={componentData.size === 'small' || componentData.size === undefined ? 'small' : 'big'}
          title={componentData.title || 'Titolo'}
          subtitle={componentData.subtitle}
          key={index}
        />
      );

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
          title={componentData.title || 'Titolo'}
          body={componentData.body || 'Descrizione'}
          width={componentData.width === 'wide' || componentData.width === 'center' ? componentData.width : 'standard'}
          reversed={componentData.reversed}
          key={index}
        />
      );

    case 'feature':
      const items = (componentData.items ?? []).map((item, itemIndex) => ({
        stackIcon: {
          icon: item.stackIcon.icon,
        },
        title: item.title,
        subtitle: item.subtitle,
      }));

      return (
        <Feature
          items={items}
          title={componentData.title || 'Titolo'}
          theme={componentData.theme || 'light'}
          key={index}
        />
      );


    case 'howTo':
      const steps = (componentData.steps ?? []).map((step, itemIndex) => ({
        stepIcon: {
          icon: step.stepIcon.icon,
        },
        title: step.title,
        description: step.description,
      }));

      return (
        <HowTo
          steps={steps}
          title={componentData.title || 'Titolo'}
          theme={componentData.theme || 'light'}
          key={index}
        />
      );

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

    case 'accordion':
      const accordionValuesData = (componentData.accordionValues || []).map((accordionValues, accordionValuesIndex) => ({
        accordionItems: {
          content: accordionValues.content,
          header: accordionValues.header
        }

      }));

      return (
        <Accordion
          accordionItems={accordionValuesData}
          theme={componentData.theme || 'light'}
          title={componentData.title || 'Titolo'}
          key={index}
        />
      );

    // rivedere accordion 

    // case 'cards':
    //   const cardsValuesData = (componentData.items || []).map((item, itemIndex) => ({
    //     items: {
    //       cardIcon: {
    //         icon: item.cardIcon.icon,
    //       },
    //       link: {
    //         href: item.link.href,
    //         text: item.text,
    //         title: item.title,
    //       },
    //       text: {
    //         title: item.text.title,
    //       } 
    //     }
    //   }));
    //   // text title forse va messo in un'altra costante 

    //   return (
    //     <Cards
    //       items={cardsValuesData}
    //       theme={componentData.theme || 'light'}
    //       key={index}
    //     />
    //   );

    // impossibile trovare cards tra gli import 

    case 'download':
      const downloadValuesData = (componentData.items || []).map((item, itemIndex) => ({
        items: {
          fileName: item.fileName,
          href: item.href,
          label: item.label
        }
      }));

      return (
        <Download
          items={downloadValuesData}
          subtitle={componentData.subtitle || 'Sottotitolo'}
          theme={componentData.theme || 'light'}
          title={componentData.title || 'Titolo'}
          key={index}
        />
      );

    // rivedere download 


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






    default:
      return null;
  }
}