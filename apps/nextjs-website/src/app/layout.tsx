'use client'
import React, { useEffect, useState } from 'react';
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchPages = async () => {
      const { pages } = await getAllPages();
    
      const menuHierarchy: { [key: string]: MenuItem[] } = {};
    
      for (const key in pages) {
        const page = pages[key];
    
        if (page.slug.length > 1) {
          // This page has sublevels
          let parent: { [key: string]: MenuItem[] } = menuHierarchy;
    
          for (let i = 0; i < page.slug.length - 1; i++) {
            const slug = page.slug[i];
            parent = parent[slug] = parent[slug] || [];
          }
    
          // Add the current page as an item under its parent
          if (parent) {
            parent.push({
              href: `/${page.slug.join('/')}`,
              key: page.slug[page.slug.length - 1],
              label: page.slug[page.slug.length - 1],
              theme: 'light',
            });
          }
        } else {
          // This page does not have sublevels
          const key = page.slug[0];
          menuHierarchy[key] = menuHierarchy[key] || [];
    
          menuHierarchy[key].push({
            href: `/${page.slug.join('/')}`,
            key: page.slug[0],
            label: page.slug[0],
            theme: 'light',
          });
        }
      }
    
      // Convert the menuHierarchy object to an array
      const transformedMenu = Object.values(menuHierarchy).flat();
    
      setMenu(transformedMenu);
      console.log('Menu Data:', transformedMenu);
    };

    fetchPages();
  }, []);

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
