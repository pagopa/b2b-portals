import { Button, ButtonProps } from '@mui/material';
import Image from 'next/image';
import AppleStoreOutlinedLight from '../../assets/appleStoreOutlinedLight.png';
import AppleStoreOutlinedDark from '../../assets/appleStoreOutlinedDark.png';
import GoogleStoreOutlinedLight from '../../assets/googleStoreOutlinedLight.png';
import GoogleStoreOutlinedDark from '../../assets/googleStoreOutlinedDark.png';
import GoogleStoreBadge from '../../assets/googleStoreBadge.png';
import AppleStoreBadge from '../../assets/appleStoreBadge.png';
import mixpanel from 'mixpanel-browser';

export const AppStoreButton = ({
  badge,
  darkTheme,
  ...buttonProps
}: Omit<ButtonProps, 'onClick'> & { darkTheme?: boolean; badge?: boolean }) => {
    const mixpanelTrackEvent = () => {
        try {
            if (mixpanel.has_opted_in_tracking()) {
                // Hard-coding appio event name since no other tenant is currently using storeButtons
              mixpanel.track('IO_WEBSITE_HP_DOWNLOAD_APPSTORE', { 'Page': window.location.pathname })
            }
        } catch {
            // Mixpanel is not initialized
        }
    }

  return (
    <Button {...buttonProps} onClick={mixpanelTrackEvent}>
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
    </Button>
  );
};

export const GooglePlayButton = ({
  badge,
  darkTheme,
  ...buttonProps
}: Omit<ButtonProps, 'onClick'> & { darkTheme?: boolean; badge?: boolean }) => {
    const mixpanelTrackEvent = () => {
        try {
            if (mixpanel.has_opted_in_tracking()) {
                // Hard-coding appio event name since no other tenant is currently using storeButtons
              mixpanel.track('IO_WEBSITE_HP_DOWNLOAD_GOOGLEPLAY', { 'Page': window.location.pathname });
            }
        } catch {
            // Mixpanel is not initialized
        }
    }

  return (
    <Button {...buttonProps} onClick={mixpanelTrackEvent}>
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
    </Button>
  );
};
