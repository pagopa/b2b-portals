import { StoryFn, Meta } from '@storybook/react';
import { MegaHeader } from '@react-components/components';
import { MegaHeaderProps } from '@react-components/types';
import { MegaMenuItem } from '@react-components/types/MegaHeader/MegaHeader.types';
import Icon from '@/components/Icon';

const defaultMenuItems: MegaMenuItem[] = [
  {
    primary: 'Scopri IO',
    secondary: [
      {
        title: 'COSA PUOI FARE CON IO',
        items: [
          { label: 'Gestire scadenze e pagamenti', href: '' },
          { label: 'Ricevere comunicazioni', href: '' },
          { label: 'Leggere le notifiche digitali', href: '' },
          { label: 'Firmare digitalmente', href: '' },
          { label: 'Aggiungere i tuoi documenti', href: '' },
          { label: 'Aderire a iniziative di welfare', href: '' },
          { label: '[CGN]', href: '' },
        ],
      },
    ],
    ctaButton: { text: 'Scopri IO', href: '/' },
  },
  {
    primary: 'I Servizi',
    secondary: [
      {
        title: 'SCOPRI I SERVIZI SU IO',
        items: [
          { label: 'Casa e utenze', href: '' },
          { label: 'Educazione e formazione', href: '' },
          { label: 'Salute', href: '', badge: 'NOVITÀ' },
          { label: 'Redditi, patrimoni e fisco', href: '' },
          { label: 'Servizi anagrafici e civici', href: '' },
          { label: 'Mobilità e trasporti', href: '' },
          { label: 'Suolo, spazi e beni pubblici', href: '' },
          { label: 'Attività produttive e commercio', href: '' },
          { label: 'Servizi elettorali', href: '' },
          { label: 'Benessere sociale', href: '' },
          { label: 'Ambiente e animali', href: '' },
          { label: 'Giustizia e legge', href: '' },
          { label: 'Vita lavorativa', href: '' },
          {
            label: 'Lavori edilizi, catasto e urbanistica',
            href: '',
          },
          { label: 'Cultura, tempo libero e sport', href: '' },
          { label: 'Viaggi e turismo', href: '' },
          { label: 'Sicurezza e Protezione Civile', href: '' },
        ],
      },
    ],
    ctaButton: { text: 'I Servizi', href: '/' },
  },
  {
    primary: 'Gli Enti',
    secondary: [
      {
        title: 'ESPLORA NAZIONALI',
        items: [
          { label: 'ACI', href: '' },
          { label: 'Agenzia delle Entrate', href: '' },
          { label: 'INPS', href: '' },
          { label: 'E-Distribuzione', href: '' },
          { label: 'Ministero dell’Interno', href: '' },
          { label: 'Altri enti nazionali', href: '' },
        ],
      },
      {
        title: 'ESPLORA LOCALI',
        items: [
          { label: 'Comuni', href: '' },
          { label: 'Regioni', href: '' },
          { label: 'Province', href: '' },
          { label: 'Istruzione', href: '' },
          { label: 'Sanità', href: '' },
          { label: 'Altri enti locali', href: '' },
        ],
      },
    ],
    ctaButton: { text: 'Gli Enti', href: '/' },
  },
  {
    primary: 'A proposito di IO',
    secondary: [
      {
        title: 'PER SAPERNE DI PIÙ SUL PROGETTO IO',
        items: [
          { label: 'Vision', href: '' },
          { label: 'IO in numeri', href: '' },
          { label: 'Blog', href: '' },
          { label: 'Casi studio', href: '' },
        ],
      },
    ],
    ctaButton: { text: 'A proposito di IO', href: '/' },
  },
  {
    primary: 'Aiuto e risorse',
    secondary: [
      {
        title: 'LEGGI LE DOMANDE FREQUENTI',
        items: [
          { label: 'Chi può usare l’app IO?', href: '' },
          { label: 'Come accedere in IO?', href: '' },
          { label: 'Posso uscire da IO?', href: '' },
          { label: 'Tutte le domande frequenti', href: '' },
        ],
      },
      {
        title: 'CONSULTA LE RISORSE TECNICHE',
        items: [
          { label: 'Sviluppatori', href: '' },
          { label: 'Partner commerciali', href: '' },
          { label: 'Partner tecnologici', href: '' },
          { label: 'Comunicati e Media', href: '' },
        ],
      },
      {
        title: 'ADERISCI A IO',
        items: [
          { label: 'Perchè aderire a IO', href: '' },
          { label: 'Come integrare i servizi', href: '' },
          { label: 'Entra in contatto con noi', href: '' },
        ],
      },
    ],
    ctaButton: { text: 'Aiuto e risorse', href: '/' },
  },
];

const meta: Meta<typeof MegaHeader> = {
  title: 'Components/MegaHeader/Light',
  component: MegaHeader,
};
export default meta;

const MegaHeaderTemplate: StoryFn<MegaHeaderProps> = (args) => (
  <MegaHeader {...args} />
);

const defaultProps: MegaHeaderProps = {
  menuItems: defaultMenuItems,
  logo: {
    src: 'https://io.italia.it/assets/img/io-it-logo-blue.svg',
    alt: 'logo',
    href: '#',
  }
};

export const MegaHeaderFullWithLogo: StoryFn<typeof MegaHeader> =
  MegaHeaderTemplate.bind({});
MegaHeaderFullWithLogo.args = {
  ...defaultProps,
  ctaButton: {
    text: 'Assistenza',
    startIcon: Icon('HelpOutlineOutlined'),
  },
};
