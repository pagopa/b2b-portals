import { Language } from '@react-components/types/Footer/Footer.types';
import icon_it from '@react-components/assets/FundedByEUIcons/EU-IT.svg';
import icon_de from '@react-components/assets/FundedByEUIcons/EU-DE.svg';
import icon_en from '@react-components/assets/FundedByEUIcons/EU-EN.svg';
import icon_fr from '@react-components/assets/FundedByEUIcons/EU-FR.svg';
import icon_sl from '@react-components/assets/FundedByEUIcons/EU-SL.svg';

const icons: Record<Language['id'], any> = {
  it: icon_it,
  de: icon_de,
  en: icon_en,
  fr: icon_fr,
  sl: icon_sl,
};

export default icons;
