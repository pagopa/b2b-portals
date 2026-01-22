import { Language } from '@react-components/types/Footer/Footer.types';
import icon_it from './EU-IT.svg';
import icon_de from './EU-DE.svg';
import icon_en from './EU-EN.svg';
import icon_fr from './EU-FR.svg';
import icon_sl from './EU-SL.svg';

const icons: Record<Language['id'], any> = {
  it: icon_it,
  de: icon_de,
  en: icon_en,
  fr: icon_fr,
  sl: icon_sl,
};

export default icons;
