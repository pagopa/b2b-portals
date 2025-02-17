'use client';
import mixpanel from 'mixpanel-browser';
import { useEffect } from 'react';

const TrackPageView = () => {
  useEffect(() => {
    // eslint-disable-next-line functional/no-try-statements
    try {
      if (mixpanel.has_opted_in_tracking()) {
        mixpanel.track_pageview();
      }
    } catch {
      // This component should only be used if mixpanelConfig is defined
      // Wrap calls in a try-catch anyway to prevent static website from breaking if the component is used incorrectly
    }
  }, []);

  return null;
};

export default TrackPageView;
