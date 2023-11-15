'use client';
import React from 'react';
import { Header } from '@pagopa/pagopa-editorial-components';
import { HeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/Header';

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

export const HeaderClient: React.FC<HeaderProps> = (headerData, menuData) => (
  <Header {...headerData} {...menuData} />
);
