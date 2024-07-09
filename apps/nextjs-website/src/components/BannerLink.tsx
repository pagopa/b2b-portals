import { BannerLink as BannerLinkRC } from '@react-components/components';
import { BannerLinkProps } from '@react-components/types';
import { BannerLinkSection } from '@/lib/fetch/types/PageSection';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

const makeBannerLinkProps = ({
  sections,
  ...rest
}: BannerLinkSection): BannerLinkProps => ({
  sections: sections.map((section: any) => ({
    ...section,
    decoration: section.decoration ? {
      src: section.decoration.url,
      alt: section.decoration.alternativeText || undefined,
      width: '60px',
      height: '60px',
    } : undefined,
    icon: section.title === 'Scrivici' ? <MailIcon style={{ fontSize: 60 }} /> : <PhoneIcon style={{ fontSize: 60 }} />,
  })),
  ...rest,
});

const BannerLink = (props: BannerLinkSection) => (
  <BannerLinkRC {...makeBannerLinkProps(props)} />
);

export default BannerLink;
