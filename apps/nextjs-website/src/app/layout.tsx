'use client';
import React, { useState } from 'react';
import type { Metadata } from 'next';
import { PreHeader, Header, Footer } from '@pagopa/pagopa-editorial-components';
import preHeaderData from '../lib/temporanyData/preHeaderData.json';
import headerData from '../lib/temporanyData/headerData.json';
import footerData from '../lib/temporanyData/footerData.json';
import { getAllPages } from '@/lib/api';

interface MenuItem {
  href: string;
  key: string;
  label: string;
  theme: string;
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  // useEffect(() => {
  GenerateMenu(setMenu);
  // }, [])

  return (
    <html>
      <body>
        <PreHeader
          leftCtas={preHeaderData.leftCtas}
          rightCtas={preHeaderData.rightCtas}
        />

        <Header
          menu={menu}
          product={headerData.product}
          theme={headerData.theme}
        />

        {children}

        <Footer
          activeLanguage={footerData.activeLanguage}
          companyLink={footerData.companyLink}
          languages={footerData.languages}
          legalInfo={footerData.legalInfo}
          links={footerData.links}
          onLanguageChanged={footerData.onLanguageChanged}
        />
      </body>
    </html>
  );
}
