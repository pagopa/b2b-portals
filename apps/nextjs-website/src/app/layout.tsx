'use client'
import React from 'react';
import type { Metadata } from 'next';
import { Header, PreHeader, Footer } from '@pagopa/pagopa-editorial-components';
import './styles.css';
import testData from '../temporanydatas/test.json';
import navigationData from '../temporanydatas/datastructure-copy.json';
import headerData from '../temporanydatas/header.json';

// Define your metadata
export const metadata: Metadata = {
  title: 'Page',
  description: 'New Page Created',
};

// Modify the recursive function to include visibility check
function buildMenuStructure(itemAttributes): Menu[] {
  return itemAttributes
    .filter((item) => item.attributes.visibile !== false) // Filter out items with "visible" set to false
    .map((item) => {
      const { title, url, children } = item.attributes;
      const subMenu = children ? buildMenuStructure(children.data) : [];
      return {
        href: url,
        label: title,
        theme: 'light',
        items: subMenu.length > 0 ? subMenu : undefined,
      };
    });
}

interface Menu {
  href: string;
  label: string;
  theme: 'light';
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
          leftCtas={testData.preHeader.leftCtas}
          rightCtas={testData.preHeader.rightCtas}
        />
        
        {/* Use the Header component with the nested menu structure and product information */}
        <Header menu={menuItems} product={product} theme={theme} />

        {children}

        {/* Add the Footer component with footer data */}
        <Footer
          activeLanguage={testData.footer.activeLanguage}
          companyLink={testData.footer.companyLink}
          languages={testData.footer.languages}
          legalInfo={testData.footer.legalInfo}
          links={testData.footer.links}
          onLanguageChanged={testData.footer.onLanguageChanged}
        />        
      </body>
    </html>
  );
}
