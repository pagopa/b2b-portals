'use client';
import mixpanel from 'mixpanel-browser';
import { useEffect } from 'react';

const TrackPageView = () => {
  useEffect(() => {
    // eslint-disable-next-line functional/no-try-statements
    try {
      // Check opt in status to be sure
      if (mixpanel.has_opted_in_tracking()) {
        mixpanel.track_pageview();
        console.log('TRACKED PAGE VIEW');
      }
    } catch {
      // mixpanel throws an error if it's not initialized
      console.log('MP NOT INITIALIZED');
    }
  }, []);

  return null;
};

export default TrackPageView;
