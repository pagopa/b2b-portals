import { Link, LinkProps } from '@mui/material';
import Image from 'next/image';
import AppleStoreOutlinedLight from '../../assets/appleStoreOutlinedLight.png';
import AppleStoreOutlinedDark from '../../assets/appleStoreOutlinedDark.png';
import GoogleStoreOutlinedLight from '../../assets/googleStoreOutlinedLight.png';
import GoogleStoreOutlinedDark from '../../assets/googleStoreOutlinedDark.png';
import GoogleStoreBadge from '../../assets/googleStoreBadge.png';
import AppleStoreBadge from '../../assets/appleStoreBadge.png';
import mixpanel from 'mixpanel-browser';
import { useEffect, useState } from 'react';

export const AppStoreButton = ({
  badge,
  darkTheme,
  ...linkProps
}: Omit<LinkProps, 'onClick'> & { darkTheme?: boolean; badge?: boolean }) => {
  const [randomID, setRandomID] = useState<string | undefined>(undefined);

  // Generate randomID for tracking
  // This has to be done inside useEffect (client side)
  // Otherwise the server will generate a different randomID when building statically / generating server side
  useEffect(() => {
    setRandomID(Math.random().toString(36).substring(7));
  }, []);

  useEffect(() => {
    try {
      if (randomID && !mixpanel.has_opted_out_tracking()) {
        mixpanel.track_links(
          `#${randomID}`,
          'IO_WEBSITE_HP_DOWNLOAD_APPSTORE',
          {
            Page: window.location.pathname,
          },
        );
      }
    } catch {
      // Mixpanel is not initialized
    }
  }, [randomID]);

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
  const [randomID, setRandomID] = useState<string | undefined>(undefined);

  // Generate randomID for tracking
  // This has to be done inside useEffect (client side)
  // Otherwise the server will generate a different randomID when building statically / generating server side
  useEffect(() => {
    setRandomID(Math.random().toString(36).substring(7));
  }, []);

  useEffect(() => {
    try {
      if (randomID && !mixpanel.has_opted_out_tracking()) {
        mixpanel.track_links(
          `#${randomID}`,
          'IO_WEBSITE_HP_DOWNLOAD_GOOGLEPLAY',
          {
            Page: window.location.pathname,
          },
        );
      }
    } catch {
      // Mixpanel is not initialized
    }
  }, [randomID]);

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
