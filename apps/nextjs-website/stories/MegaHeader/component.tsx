import { MegaHeader } from '@react-components/components';
import { MegaHeaderProps } from '@react-components/types';
import Icon from '@/components/Icon';

export interface StorybookMegaHeaderProps {
  customLogo?: string | null;
  showCtaButton: boolean;
  drawer: 'full' | 'min' | 'none';
}

const defaultMenuItems: MegaHeaderProps['menuItems'] = [
  {
    primary: 'Scopri IO',
    secondary: [
      {
        title: 'COSA PUOI FARE CON IO',
        items: [
          { label: 'Gestire scadenze e pagamenti', href: '' },
          { label: 'Ricevere comunicazioni', href: '' },
          { label: 'Leggere le notifiche digitali', href: '' },
          { label: 'Firmare digitalmente', href: '', badge: 'NOVITÀ' },
          { label: 'Aggiungere i tuoi documenti', href: '' },
          { label: 'Aderire a iniziative di welfare', href: '' },
          { label: '[CGN]', href: '' },
          { label: 'Novità su IO', href: '', badge: 'NOVITÀ' },
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
          { label: 'Educazione e formazione', href: '', badge: 'NOVITÀ' },
          { label: 'Salute', href: '' },
          { label: 'Redditi, patrimoni e fisco', href: '' },
          { label: 'Servizi anagrafici e civici', href: '' },
          { label: 'Mobilità e trasporti', href: '' },
          { label: 'Suolo, spazi e beni pubblici', href: '' },
          { label: 'Attività produttive e commercio', href: '' },
          { label: 'Servizi elettorali', href: '' },
          { label: 'Benessere sociale', href: '' },
          { label: 'Ambiente e animali', href: '' },
          { label: 'Giustizia e legge', href: '' },
          { label: 'Vita lavorativa', href: '', badge: 'NOVITÀ' },
          { label: 'Lavori edilizi, catasto e urbanistica', href: '' },
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
          { label: 'INPS', href: '', badge: 'NOVITÀ' },
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
          { label: 'Blog', href: '', badge: 'NOVITÀ' },
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
          { label: 'Partner commerciali', href: '', badge: 'NOVITÀ' },
          { label: 'Partner tecnologici', href: '' },
          { label: 'Comunicati e Media', href: '' },
        ],
      },
      {
        title: 'ADERISCI A IO',
        items: [
          { label: 'Perché aderire a IO', href: '' },
          { label: 'Come integrare i servizi', href: '' },
          { label: 'Entra in contatto con noi', href: '' },
        ],
      },
    ],
    ctaButton: { text: 'Aiuto e risorse', href: '/' },
  },
];

const makeMegaHeaderProps = ({
  customLogo,
  showCtaButton,
  drawer,
}: StorybookMegaHeaderProps): MegaHeaderProps => {
  const baseProps: Partial<MegaHeaderProps> = {
    menuItems: defaultMenuItems,
    logo: {
      src:
        customLogo ??
        'https://d2mk0pc4ejgxx6.cloudfront.net/IO_logo_aaacbceaf0.svg',
      alt: 'logo',
      href: '#',
    },
    socialLinks: [
      {
        iconURL:
          'https://d2mk0pc4ejgxx6.cloudfront.net/Instagram_Negative_3d4913bd7d.png',
        href: '#',
        ariaLabel: 'Instagram',
      },
      {
        iconURL:
          'https://d2mk0pc4ejgxx6.cloudfront.net/X_Twitter_Negative_98618e9959.png',
        href: '#',
        ariaLabel: 'Twitter',
      },
      {
        iconURL:
          'https://d2mk0pc4ejgxx6.cloudfront.net/Facebook_b9c142ab96.png',
        href: '#',
        ariaLabel: 'Facebook',
      },
      {
        iconURL:
          'https://d2mk0pc4ejgxx6.cloudfront.net/Linked_In_Negative_94b79fe959.png',
        href: '#',
        ariaLabel: 'Linkedin',
      },
      {
        iconURL:
          'https://d2mk0pc4ejgxx6.cloudfront.net/Medium_Alt_Negative_a3cff68f59.png',
        href: '#',
        ariaLabel: 'Medium',
      },
      {
        iconURL:
          'https://d2mk0pc4ejgxx6.cloudfront.net/Youtube_Negative_e8dfe76fa3.png',
        href: '#',
        ariaLabel: 'Youtube',
      },
    ],
    ...(showCtaButton && {
      ctaButton: {
        text: 'Assistenza',
        startIcon: Icon('HelpOutlineOutlined'),
      },
    }),
    ...(drawer !== 'none' && {
      drawer: {
        title: 'Drawer Title',
        buttonText: 'Apri Drawer',
        ...(drawer === 'full' && {
          subtitle: 'Questo è un drawer con sottotitolo',
        }),
        ctaCard: {
          title: 'Titolo Card CTA',
          subtitle: (
            <p>
              Sottotitolo Card CTA con <strong>markdown</strong>
            </p>
          ),
          buttonText: 'Vai alla CTA',
          href: '#',
        },
        linkCards: [
          {
            title: 'Titolo Card Link 1',
            subtitle: (
              <p>
                Sottotitolo Card Link <strong>markdown</strong>
              </p>
            ),
            buttonText: 'Apri link',
            href: '#',
            icons: [
              'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_45a3f353d1.svg',
            ],
          },
        ],
      },
    }),
  };

  return baseProps as MegaHeaderProps;
};

export const StorybookMegaHeader = (props: StorybookMegaHeaderProps) => {
  return <MegaHeader {...makeMegaHeaderProps(props)} />;
};
