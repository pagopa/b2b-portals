'use client';
import { useEffect } from 'react';
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

const IDFromURL = (cdnURL: string): string | null => {
  const splitURL = cdnURL.split('/');
  const fileName = splitURL[splitURL.length - 1];

  return fileName?.split('.')[0] ?? null;
};

const OneTrustSection = (props: OneTrustSectionProps) => {
  const { cdnURL } = props;
  const divID = `otnotice-${IDFromURL(cdnURL)}`;

  // eslint-disable-next-line functional/no-return-void
  useEffect(() => {
    // eslint-disable-next-line functional/no-return-void
    OneTrust.NoticeApi.Initialized.then(() => {
      OneTrust.NoticeApi.LoadNotices([cdnURL], false);
    });
  }, [cdnURL]);

  return <div id={divID} />;
};

export default OneTrustSection;
