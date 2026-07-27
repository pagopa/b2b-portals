import mixpanel from 'mixpanel-browser';
import { MouseEventHandler, useEffect, useId } from 'react';

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

  const randomID = useId();

  useEffect(() => {
    try {
      if (isLink && trackEvent && !mixpanel.has_opted_out_tracking()) {
        mixpanel.track_links(`#${randomID}`, trackEvent, {
          Page: window.location.pathname,
          ...trackingProperties,
        });
      }
    } catch {
      // Mixpanel is not initialized
    }
  }, [isLink, randomID, trackEvent, trackingProperties]);

  return trackEvent
    ? {
        ...(isLink && { randomID }),
        ...(trackedOnClick && { trackedOnClick }),
      }
    : {};
};
