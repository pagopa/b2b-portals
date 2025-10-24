import { RichBanner } from '@react-components/components';
import { RichBannerProps } from '@react-components/types';
import { Meta, StoryFn } from '@storybook/react';

// Define the default export with metadata about your component
const meta: Meta<typeof RichBanner> = {
  title: 'Components/RichBanner/Default',
  component: RichBanner,
};
export default meta;

// Define a "Template" function that sets how args map to rendering
const RichBannerTemplate: StoryFn<RichBannerProps> = (args) => (
  <RichBanner {...args} />
);

const imgSrc1 =
  'https://d2mk0pc4ejgxx6.cloudfront.net/Logo_PARI_59b6a173e4.svg';

const imgSrc2 =
  'https://d2mk0pc4ejgxx6.cloudfront.net/logo_sedn_6453fc30cd.svg';

const commonBody = (
  <p>
    <a href='#'>PARI</a> è la piattaforma digitale che semplifica l'accesso a
    bonus e incentivi pubblici.
    <br />
    La piattaforma permette di gestire tutti gli incentivi in un unico posto e
    di utilizzarli tramite l'app IO e presso i commercianti convenzionati.
  </p>
);

export const RichBannerShortTitle: StoryFn<typeof RichBanner> =
  RichBannerTemplate.bind({});
RichBannerShortTitle.args = {
  title: (
    <p>
      Il Bonus Elettrodomestici è realizzato tramite{' '}
      <img src={imgSrc1} alt='PARI' />
    </p>
  ),
  body: commonBody,
};

export const RichBannerLongTitle: StoryFn<typeof RichBanner> =
  RichBannerTemplate.bind({});
RichBannerLongTitle.args = {
  title: (
    <p>
      Il Bonus Elettrodomestici è realizzato tramite{' '}
      <img src={imgSrc1} alt='PARI' /> e poi aggiungiamo una ulteriore immagine{' '}
      <img src={imgSrc2} alt='SEND' /> e quindi un testo abbastanza lungo per la
      verifica del testo su più righe con immagini.
    </p>
  ),
  body: commonBody,
};
