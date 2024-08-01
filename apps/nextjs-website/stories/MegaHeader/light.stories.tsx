import { StoryFn, Meta } from '@storybook/react';
import { MegaHeader } from '@react-components/components';
import { MegaHeaderProps } from '@react-components/types';
import { MegaMenuItem } from '@react-components/types/MegaHeader/MegaHeader.types';
import Icon from '@/components/Icon';

const defaultMenuItems: MegaMenuItem[] = [
  {
    primary: 'Scopri IO',
    secondary: [
      { title: 'COSA PUOI FARE CON IO', items: ['Gestire scadenze e pagamenti', 'Ricevere comunicazioni', 'Leggere le notifiche digitali', 'Firmare digitalmente', 'Aggiungere i tuoi documenti', 'Aderire a iniziative di welfare', '[CGN]'] },
    ],
  },
  {
    primary: 'I Servizi',
    secondary: [
      { title: 'SCOPRI I SERVIZI SU IO', items: ['Casa e utenze', 'Educazione e formazione', 'Salute', 'Redditi, patrimoni e fisco', 'Servizi anagrafici e civici', 'Mobilità e trasporti', 'Suolo, spazi e beni pubblici', 'Attività produttive e commercio', 'Servizi elettorali', 'Benessere sociale', 'Ambiente e animali', 'Giustizia e legge', 'Vita lavorativa', 'Lavori edilizi, catasto e urbanistica', 'Cultura, tempo libero e sport', 'Viaggi e turismo', 'Sicurezza e Protezione Civile'] },
    ],
  },
  {
    primary: 'Gli Enti',
    secondary: [
      { title: 'ESPLORA NAZIONALI', items: ['ACI', 'Agenzia delle Entrate', 'INPS', 'E-Distribuzione', 'Ministero dell\'Interno', 'Altri enti nazionali'] },
      { title: 'ESPLORA LOCALI', items: ['Comuni', 'Regioni', 'Province', 'Istruzione', 'Sanità', 'Altri enti locali'] },
    ],
  },
  {
    primary: 'A proposito di IO',
    secondary: [
      { title: 'PER SAPERNE DI PIÙ SUL PROGETTO IO', items: ['Vision', 'IO in numeri', 'Blog', 'Casi studio'] },
    ],
  },
  {
    primary: 'Aiuto e risorse',
    secondary: [
      { title: 'LEGGI LE DOMANDE FREQUENTI', items: ['Chi può usare l’app IO?', 'Come accedere in IO?', 'Posso uscire da IO?', 'Tutte le domande frequenti'] },
      { title: 'CONSULTA LE RISORSE TECNICHE', items: ['Sviluppatori', 'Partner commerciali', 'Partner tecnologici', 'Comunicati e Media'] },
      { title: 'ADERISCI A IO', items: ['Perchè aderire a IO', 'Come integrare i servizi', 'Entra in contatto con noi'] },
    ],
  },
];

const meta: Meta<typeof MegaHeader> = {
  title: 'Components/MegaHeader/Light',
  component: MegaHeader,
};
export default meta;

// Define a "Template" function that sets how args map to rendering
const MegaHeaderTemplate: StoryFn<MegaHeaderProps> = (args) => <MegaHeader {...args} />;

// Define the default props
const defaultProps: MegaHeaderProps = {
  menuItems: defaultMenuItems,
  logoSrc: 'https://io.italia.it/assets/img/io-it-logo-blue.svg',
  logoAlt: 'logo',
};

export const MegaHeaderFullWithLogo: StoryFn<typeof MegaHeader> = MegaHeaderTemplate.bind({});
MegaHeaderFullWithLogo.args = {
  ...defaultProps,
  ctaButton: {
    text: 'Assistenza',
    startIcon: Icon('HelpOutlineOutlined'),
  }
};