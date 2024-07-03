// apps/nextjs-website/stories/MegaHeader/common.ts

import { MenuItem, SocialMediaLink } from '@react-components/types/MegaHeader/MegaHeader.types';

export const defaultMenuItems: MenuItem[] = [
  {
    primary: 'Il Progetto',
    secondary: [
      { title: '', items: ['per i Cittadini', 'per le Pubbliche Amministrazioni', 'per gli Sviluppatori', 'per i Giornalisti', 'IO in numeri'] },
    ],
  },
  {
    primary: 'Servizi su IO',
    secondary: [
      { title: 'IN EVIDENZA', items: ['Certificazione Verde COVID-19', 'Carta Giovani Nazionale'] },
      { title: 'TUTTI I SERVIZI', items: ['Enti Nazionali', 'Enti Locali'] },
    ],
  },
  {
    primary: 'FAQ',
    secondary: [
      { title: '', items: ['Generali', 'Bonus Vacanze', 'Carta Giovani Nazionale', 'Cashback', 'Certificazione Verde COVID-19'] },
    ],
  },
];

export const defaultSocialMediaLinks: SocialMediaLink[] = [
  { icon: 'https://example.com/twitter-icon.png', href: '#' },
  { icon: 'https://example.com/instagram-icon.png', href: '#' },
  { icon: 'https://example.com/facebook-icon.png', href: '#' },
  { icon: 'https://example.com/linkedin-icon.png', href: '#' },
  { icon: 'https://example.com/youtube-icon.png', href: '#' },
];