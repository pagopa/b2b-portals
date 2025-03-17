import { Link, LinkProps } from '@mui/material';
import Image from 'next/image';
import AppleStoreOutlinedLight from '../../assets/appleStoreOutlinedLight.png';
import AppleStoreOutlinedDark from '../../assets/appleStoreOutlinedDark.png';
import GoogleStoreOutlinedLight from '../../assets/googleStoreOutlinedLight.png';
import GoogleStoreOutlinedDark from '../../assets/googleStoreOutlinedDark.png';
import GoogleStoreBadge from '../../assets/googleStoreBadge.png';
import AppleStoreBadge from '../../assets/appleStoreBadge.png';
import { useMixpanelTracking } from './tracking';

export const AppStoreButton = ({
  badge,
  darkTheme,
  ...linkProps
}: Omit<LinkProps, 'onClick'> & { darkTheme?: boolean; badge?: boolean }) => {
  const { randomID } = useMixpanelTracking({
    isLink: true,
    trackEvent: 'IO_WEBSITE_HP_DOWNLOAD_APPSTORE',
  });

  return (
    <Link id={randomID} {...linkProps}>
      <Image
        src={
          badge
            ? AppleStoreBadge
            : darkTheme
              ? AppleStoreOutlinedLight
              : AppleStoreOutlinedDark
        }
        alt='App Store'
        height={0}
        width={0}
        style={{ height: '3em', width: 'auto', display: 'block' }}
      />
    </Link>
  );
};

export const GooglePlayButton = ({
  badge,
  darkTheme,
  ...linkProps
}: Omit<LinkProps, 'onClick'> & { darkTheme?: boolean; badge?: boolean }) => {
  const { randomID } = useMixpanelTracking({
    isLink: true,
    trackEvent: 'IO_WEBSITE_HP_DOWNLOAD_GOOGLEPLAY',
  });

  return (
    <Link id={randomID} {...linkProps}>
      <Image
        src={
          badge
            ? GoogleStoreBadge
            : darkTheme
              ? GoogleStoreOutlinedLight
              : GoogleStoreOutlinedDark
        }
        alt='Google Play'
        height={0}
        width={0}
        style={{ height: '3em', width: 'auto', display: 'block' }}
      />
    </Link>
  );
};
