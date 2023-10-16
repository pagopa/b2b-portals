'use client'
import React from 'react';
import type { Metadata } from 'next';
import { Header, PreHeader, Footer } from '@pagopa/pagopa-editorial-components';
import './styles.css';
import preheaderfooterData from '../temporanydatas/preheader-footer-Data.json';
import navigationData from '../temporanydatas/datastructure-copy.json';
import headerData from '../temporanydatas/header.json';

// Define your metadata
export const metadata: Metadata = {
  title: 'Page',
  description: 'New Page Created',
};

function buildMenuStructure(
  itemAttributes: any[], // Replace 'any' with the actual type of itemAttributes
  parentPath = ''
): Menu[] {
  return itemAttributes
    .filter((item) => item.attributes.visibile !== false)
    .map((item) => {
      const { title, url, children } = item.attributes;

      // Construct the href by combining the parent's path and the current item's url
      const href = children ? `${parentPath}${url}` : url;

      const subMenu = children ? buildMenuStructure(children.data, href) : [];
      return {
        href,
        label: title,
        theme: 'light' || 'dark',
        items: subMenu.length > 0 ? subMenu : undefined,
      };
    });
}

interface Menu {
  href: string;
  label: string;
  theme: 'light' | 'dark';
  items?: Menu[];
}

// Extract the items array from the header data
const items = navigationData.data[0]?.attributes.items?.data || [];

// Build the nested menu structure using the recursive function
const menuItems: Menu[] = buildMenuStructure(items);

// Extract the "Nome_Prodotto" string from the headerData
const productName = headerData.data.attributes.Nome_Prodotto;

// Define your product, theme, and other properties
const product = {
  href: '/',
  name: productName,
};

const theme = navigationData.data[0]?.attributes.theme || 'light'; // Set a default theme

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <PreHeader
          leftCtas={preheaderfooterData.preHeader.leftCtas}
          rightCtas={preheaderfooterData.preHeader.rightCtas}
        />
        
        {/* Use the Header component with the nested menu structure and product information */}
        <Header menu={menuItems} product={product} theme={theme} />

        {children}

        {/* Add the Footer component with footer data */}
        <Footer
          activeLanguage={preheaderfooterData.footer.activeLanguage}
          companyLink={preheaderfooterData.footer.companyLink}
          languages={preheaderfooterData.footer.languages}
          legalInfo={preheaderfooterData.footer.legalInfo}
          links={preheaderfooterData.footer.links}
          onLanguageChanged={preheaderfooterData.footer.onLanguageChanged}
        />        
      </body>
    </html>
  );
}
