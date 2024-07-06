import { BannerLink as BannerLinkRC } from '@react-components/components';
import { BannerLinkProps } from '@react-components/types';
import { BannerLinkSection } from '@/lib/fetch/types/PageSection';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const makeBannerLinkProps = ({
  normalText,
  boldText,
  link,
  decoration,
  ctaButtons,
  icon,
  ...rest
}: BannerLinkSection): BannerLinkProps => ({
  normalText,
  boldText,
  link,
  ...(decoration && {
    decoration: {
      src: decoration.url,
      alt: decoration.alternativeText || undefined,
      width: '60px',
      height: '60px',
    },
  }),
  ...(ctaButtons.length > 0 && {
    ctaButtons: ctaButtons.map((ctaBtn) => ({
      ...ctaBtn,
    })),
  }),
  icon: <MailOutlineIcon style={{ fontSize: 60 }} />,
  ...rest,
});

const BannerLink = (props: BannerLinkSection) => (
  <BannerLinkRC {...makeBannerLinkProps(props)} />
);

export default BannerLink;