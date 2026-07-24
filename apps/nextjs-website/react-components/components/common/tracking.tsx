import mixpanel from 'mixpanel-browser';
import { MouseEventHandler, useEffect, useState } from 'react';

interface MixpanelTrackingProps {
  isLink: boolean;
  trackEvent?: string | undefined;
  trackingProperties?: Record<string, string> | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

interface MixpanelTracking {
  randomID?: string;
  trackedOnClick?: MouseEventHandler<HTMLButtonElement>;
}

export const useMixpanelTracking = ({
  trackEvent,
  trackingProperties,
  isLink,
  onClick,
}: MixpanelTrackingProps): MixpanelTracking => {
  const trackedOnClick = onClick
    ? (e: any) => {
        try {
          if (!mixpanel.has_opted_out_tracking() && trackEvent) {
            mixpanel.track(trackEvent, {
              Page: window.location.pathname,
              ...trackingProperties,
            });
          }
        } catch {
          // Mixpanel is not initialized
        } finally {
          // Launch button's original onClick after tracking
          onClick(e);
        }
      }
    : null;

  const [randomID, setRandomID] = useState<string | undefined>(undefined);

  useEffect(() => {
    setRandomID(Math.random().toString(36).substring(7));
    try {
      if (randomID && !mixpanel.has_opted_out_tracking() && trackEvent) {
        mixpanel.track_links(`#${randomID}`, trackEvent, {
          Page: window.location.pathname,
          ...trackingProperties,
        });
      }
    } catch {
      // Mixpanel is not initialized
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLink, trackEvent, trackingProperties]);

  if (!trackEvent) {
    return {};
  }

  return {
    ...(randomID && { randomID }),
    ...(trackedOnClick && { trackedOnClick }),
  };
};
