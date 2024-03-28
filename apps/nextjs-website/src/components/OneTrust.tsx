'use client';
import { useEffect } from 'react';
import { ExtractNoticeIDFromOneTrustURL } from '@/lib/oneTrust';
import { OneTrustSectionProps } from '@/lib/fetch/types/PageSection';

// Declare OneTrust object created by otnotice-1.0.min.js
declare const OneTrust: {
  NoticeApi: {
    Initialized: {
      // eslint-disable-next-line functional/no-return-void
      then: (cbk: () => void) => void;
    };
    // eslint-disable-next-line functional/no-return-void
    LoadNotices: (noticesUrls: string[], flag: boolean) => void;
  };
};

const OneTrustSection = (props: OneTrustSectionProps) => {
  const { oneTrustNoticeURL } = props;
  // Extrapolate notice ID and build the ID of the div to be populated
  // akin to how otnotice-1.0.min.js does
  const divID = `otnotice-${ExtractNoticeIDFromOneTrustURL(oneTrustNoticeURL)}`;

  // eslint-disable-next-line functional/no-return-void
  useEffect(() => {
    // eslint-disable-next-line functional/no-return-void
    OneTrust.NoticeApi.Initialized.then(() => {
      // Tell otnotice-1.0.min.js to fetch the given notice
      // It will then populate the div as described below
      OneTrust.NoticeApi.LoadNotices([oneTrustNoticeURL], false);
    });
  }, [oneTrustNoticeURL]);

  // After fetching the given notice,
  // otnotice-1.0.min.js will look for the below div to populate.
  // To do so it will search for the specific divID
  return <div id={divID} />;
};

export default OneTrustSection;
