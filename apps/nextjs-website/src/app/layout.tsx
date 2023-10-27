'use client';
import React, { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import { PreHeader, Header, Footer } from '@pagopa/pagopa-editorial-components';
import {
  getAllPages,
  getPreHeaderData,
  getHeaderData,
  getFooterData,
} from '@/lib/api';

interface MenuItem {
  href: string;
  key: string;
  label: string;
  theme: 'light' | 'dark';
  items?: MenuItem[];
}

export const metadata: Metadata = {
  title: 'Page',
  description: 'New Page Created',
};

const GenerateMenu = async (setMenu: Function) => {
  const { pages } = await getAllPages();

  if (pages == null) {
    setMenu([]);
    return;
  }

  const visiblePages = pages.filter((page) => page.visible);

  const menu: MenuItem[] = [];

  // Order visibilePages from deepest to first level slugs, without altering the display order
  visiblePages.sort((a, b) => {
    if (a.slug.length > b.slug.length) return 1;
    if (a.slug.length == b.slug.length) return 0;
    return -1;
  });

  visiblePages.forEach((page) => {
    switch (page.slug.length) {
      case 1: //Add base level links
        menu.push({
          href: page.slug[0] ?? '/',
          key: page.id.toString(),
          label: page.title,
          theme: 'light',
        });
        break;
      case 2: //Only doing up to level two for menu
        const parentSlug = page.slug[0] ?? '';

        menu.forEach((menuItem) => {
          if (menuItem.href == parentSlug) {
            if (menuItem.items == null) {
              menuItem.items = [
                {
                  href: page.slug.join('/'),
                  key: page.id.toString(),
                  label: page.title,
                  theme: 'light',
                },
              ];
            } else {
              menuItem.items.push({
                href: page.slug.join('/'),
                key: page.id.toString(),
                label: page.title,
                theme: 'light',
              });
            }
          }
        });
        break;
    }
  });

  setMenu(menu);
};

const fetchPreHeaderData = async (setPreHeaderData: Function) => {
  const { preHeaderData } = await getPreHeaderData();

  setPreHeaderData({
    leftCtas: {
      theme: preHeaderData.data.attributes.theme.toLowerCase(),
      ctaButtons: [
        {
          text: preHeaderData.data.attributes.leftCTAButton.text,
          variant: preHeaderData.data.attributes.leftCTAButton.variant,
          color: preHeaderData.data.attributes.leftCTAButton.color,
          href: preHeaderData.data.attributes.leftCTAButton.href,
        },
      ],
    },
    rightCtas: {
      theme: preHeaderData.data.attributes.theme.toLowerCase(),
      ctaButtons: [
        {
          text: preHeaderData.data.attributes.rightCTAButton.text,
          variant: preHeaderData.data.attributes.rightCTAButton.variant,
          color: preHeaderData.data.attributes.rightCTAButton.color,
          href: preHeaderData.data.attributes.rightCTAButton.href,
        },
      ],
    },
  });
};

const fetchHeaderData = async (setHeaderData: Function) => {
  const data = await getHeaderData();

  if (!data.headerData) {
    // TODO: Should probably throw error and abort build
    setHeaderData({
      product: {
        name: 'Default Product Name',
        href: '/',
      },
      ctaButtons: [], // Default empty array for ctaButtons
    });
    return;
  }

  // Extract the product and ctaButtons data from headerData
  setHeaderData({
    product: data.product,
    ctaButtons: data.ctaButtons,
    theme: 'light',
    beta: data.headerData.data.beta,
  });
};

const fetchFooterData = async (setFooterData: Function) => {
  const { footerData } = await getFooterData();

  const footerLinks = {
    aboutUs: {
      title: footerData.data.attributes.links_aboutUs.title ?? '',
      links: footerData.data.attributes.links_aboutUs.links.map(
        (link: { text: any; href: any; ariaLabel: any; linkType: any }) => ({
          label: link.text,
          href: link.href,
          ariaLabel: link.ariaLabel,
          linkType: link.linkType,
        }),
      ),
    },
    followUs: {
      title: footerData.data.attributes.links_followUs.title ?? '',
      links: footerData.data.attributes.links_followUs.links
        .filter((link: { linkType: string }) => link.linkType != 'social')
        .map(
          (link: { text: any; href: any; ariaLabel: any; linkType: any }) => ({
            label: link.text,
            href: link.href,
            ariaLabel: link.ariaLabel,
            linkType: link.linkType,
          }),
        ),
      socialLinks: footerData.data.attributes.links_followUs.links
        .filter((link: { linkType: string }) => link.linkType == 'social')
        .map((link: { icon: any; href: any; ariaLabel: any }) => ({
          icon: link.icon,
          href: link.href,
          'aria-label': link.ariaLabel,
        })),
    },
    resources: {
      title: footerData.data.attributes.links_resources.title ?? '',
      links: footerData.data.attributes.links_resources.links.map(
        (link: { text: any; href: any; ariaLabel: any; linkType: any }) => ({
          label: link.text,
          href: link.href,
          ariaLabel: link.ariaLabel,
          linkType: link.linkType,
        }),
      ),
    },
    services: {
      title: footerData.data.attributes.links_services.title ?? '',
      links: footerData.data.attributes.links_services.links.map(
        (link: { text: any; href: any; ariaLabel: any; linkType: any }) => ({
          label: link.text,
          href: link.href,
          ariaLabel: link.ariaLabel,
          linkType: link.linkType,
        }),
      ),
    },
  };

  setFooterData({
    links: footerLinks,
    companyLink: footerData.data.attributes.companyLink,
    legalInfo: footerData.data.attributes.legalInfo,
    languages: [
      {
        id: 'it',
        value: 'Italiano',
      },
    ],
    activeLanguage: {
      id: 'it',
      value: 'Italiano',
    },
    onLanguageChanged: () => {},
  });
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [preHeaderData, setPreHeaderData] = useState<any>(null);
  const [headerData, setHeaderData] = useState<any>(null);
  const [footerData, setFooterData] = useState<any>(null);

  useEffect(() => {
    GenerateMenu(setMenu);
    fetchPreHeaderData(setPreHeaderData);
    fetchHeaderData(setHeaderData);
    fetchFooterData(setFooterData);
  }, []);

  return (
    <html>
      <body>
        {preHeaderData != null && (
          <PreHeader
            leftCtas={preHeaderData.leftCtas}
            rightCtas={preHeaderData.rightCtas}
          />
        )}

        {headerData != null && menu != null && (
          <Header
            menu={menu}
            product={headerData.product}
            ctaButtons={headerData.ctaButtons}
            theme={headerData.theme}
          />
        )}

        {children}

        {footerData != null && (
          <Footer
            activeLanguage={footerData.activeLanguage}
            companyLink={footerData.companyLink}
            languages={footerData.languages}
            legalInfo={footerData.legalInfo}
            links={footerData.links}
            onLanguageChanged={footerData.onLanguageChanged}
          />
        )}
      </body>
    </html>
  );
}
