'use client';
import { useEffect } from 'react';
import { Box } from '@mui/material';
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

  return (
    <Box
      id={divID}
      sx={{
        '.otnotice-content': {
          fontFamily: '"Titillium Web",sans-serif',
          // eslint-disable-next-line sonarjs/no-duplicate-string
          color: 'text.primary',
          paddingTop: '64px',
        },
        '.otnotice-content .otnotice-menu': {
          position: 'absolute',
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          maxHeight: 'none',
          marginLeft: 0,
          paddingTop: 0,
        },
        '.otnotice-content .otnotice-menu-mobile': {
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'custom.otMenuMobile',
        },
        '.otnotice-content .otnotice-menu-mobile .otnotice-menu-mobile-container':
          {
            backgroundColor: 'transparent',
          },
        '.otnotice-content .otnotice-menu > .otnotice-menu-section': {
          margin: 0,
          padding: '1rem',
          width: '100%',
        },
        '.otnotice-content .otnotice-menu > .otnotice-menu-section:hover, .otnotice-content .otnotice-menu-mobile .otnotice-menu-section-mobile:hover':
          {
            backgroundColor: 'action.hover',
          },
        '.otnotice-content .otnotice-menu > .otnotice-menu-section a, .otnotice-content .otnotice-menu-mobile .otnotice-menu-selected, .otnotice-content .otnotice-menu-mobile .otnotice-menu-section-mobile a':
          {
            fontSize: '1.125rem',
            fontWeight: 600,
            lineHeight: 1.5,
            color: 'text.primary !important',
          },
        '.otnotice-menu-mobile .otnotice-menu-selected-container .otnotice-menu-display__expand::after, .otnotice-menu-mobile .otnotice-menu-selected-container .otnotice-menu-display__collapse::after':
          {
            color: 'text.primary !important',
          },
        '.otnotice-content .otnotice-section:first-child h2': {
          fontSize: '2.375rem',
          color: 'text.primary',
        },
        '.otnotice-content .otnotice-section:not(:first-child) h2': {
          fontSize: '1.75rem',
          color: 'text.primary',
        },
      }}
    />
  );
};

export default OneTrustSection;
