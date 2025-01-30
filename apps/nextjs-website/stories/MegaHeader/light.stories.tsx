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
          { label: 'Gestire scadenze e pagamenti', href: '', isNew: false },
          { label: 'Ricevere comunicazioni', href: '', isNew: false },
          { label: 'Leggere le notifiche digitali', href: '', isNew: false },
          { label: 'Firmare digitalmente', href: '', isNew: false },
          { label: 'Aggiungere i tuoi documenti', href: '', isNew: false },
          { label: 'Aderire a iniziative di welfare', href: '', isNew: false },
          { label: '[CGN]', href: '', isNew: false },
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
          { label: 'Casa e utenze', href: '', isNew: false },
          { label: 'Educazione e formazione', href: '', isNew: false },
          { label: 'Salute', href: '', isNew: true, badge: 'NOVITÀ' },
          { label: 'Redditi, patrimoni e fisco', href: '', isNew: false },
          { label: 'Servizi anagrafici e civici', href: '', isNew: false },
          { label: 'Mobilità e trasporti', href: '', isNew: false },
          { label: 'Suolo, spazi e beni pubblici', href: '', isNew: false },
          { label: 'Attività produttive e commercio', href: '', isNew: false },
          { label: 'Servizi elettorali', href: '', isNew: false },
          { label: 'Benessere sociale', href: '', isNew: false },
          { label: 'Ambiente e animali', href: '', isNew: false },
          { label: 'Giustizia e legge', href: '', isNew: false },
          { label: 'Vita lavorativa', href: '', isNew: false },
          {
            label: 'Lavori edilizi, catasto e urbanistica',
            href: '',
            isNew: false,
          },
          { label: 'Cultura, tempo libero e sport', href: '', isNew: false },
          { label: 'Viaggi e turismo', href: '', isNew: false },
          { label: 'Sicurezza e Protezione Civile', href: '', isNew: false },
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
          { label: 'ACI', href: '', isNew: false },
          { label: 'Agenzia delle Entrate', href: '', isNew: false },
          { label: 'INPS', href: '', isNew: false },
          { label: 'E-Distribuzione', href: '', isNew: false },
          { label: 'Ministero dell’Interno', href: '', isNew: false },
          { label: 'Altri enti nazionali', href: '', isNew: false },
        ],
      },
      {
        title: 'ESPLORA LOCALI',
        items: [
          { label: 'Comuni', href: '', isNew: false },
          { label: 'Regioni', href: '', isNew: false },
          { label: 'Province', href: '', isNew: false },
          { label: 'Istruzione', href: '', isNew: false },
          { label: 'Sanità', href: '', isNew: false },
          { label: 'Altri enti locali', href: '', isNew: false },
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
          { label: 'Vision', href: '', isNew: false },
          { label: 'IO in numeri', href: '', isNew: false },
          { label: 'Blog', href: '', isNew: false },
          { label: 'Casi studio', href: '', isNew: false },
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
          { label: 'Chi può usare l’app IO?', href: '', isNew: false },
          { label: 'Come accedere in IO?', href: '', isNew: false },
          { label: 'Posso uscire da IO?', href: '', isNew: false },
          { label: 'Tutte le domande frequenti', href: '', isNew: false },
        ],
      },
      {
        title: 'CONSULTA LE RISORSE TECNICHE',
        items: [
          { label: 'Sviluppatori', href: '', isNew: false },
          { label: 'Partner commerciali', href: '', isNew: false },
          { label: 'Partner tecnologici', href: '', isNew: false },
          { label: 'Comunicati e Media', href: '', isNew: false },
        ],
      },
      {
        title: 'ADERISCI A IO',
        items: [
          { label: 'Perchè aderire a IO', href: '', isNew: false },
          { label: 'Come integrare i servizi', href: '', isNew: false },
          { label: 'Entra in contatto con noi', href: '', isNew: false },
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
  logoSrc: 'https://io.italia.it/assets/img/io-it-logo-blue.svg',
  logoAlt: 'logo',
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
