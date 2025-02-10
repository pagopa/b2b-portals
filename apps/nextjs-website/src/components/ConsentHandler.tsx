'use client';
import { SiteWideSEO } from '@/lib/fetch/siteWideSEO';
import mixpanel from 'mixpanel-browser';
import { useEffect } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line functional/no-return-void
    OptanonWrapper: () => void;
    OptanonActiveGroups: string;
    OneTrust: {
      // eslint-disable-next-line functional/no-return-void
      OnConsentChanged: (callback: () => void) => void;
    };
  }
}

const targCookiesGroup = 'C0002'; // Target cookies (Mixpanel)

const hasConsent = () => window.OptanonActiveGroups.includes(targCookiesGroup);

const initMixpanel = (
  mixpanelConfig: NonNullable<SiteWideSEO['data']['attributes']['mixpanel']>,
) =>
  mixpanel.init(mixpanelConfig.token, {
    ...(mixpanelConfig.apiHost && { api_host: mixpanelConfig.apiHost }),
    cookie_domain: '.ioapp.it', // allow across-subdomain
    cookie_expiration: 0, // session cookie
    debug: mixpanelConfig.debug,
    ip: mixpanelConfig.ip,
    persistence: 'cookie',
    secure_cookie: true,
    track_pageview: true,
  });

const ConsentHandler = (
  mixpanelConfig: NonNullable<SiteWideSEO['data']['attributes']['mixpanel']>,
) => {
  useEffect(() => {
    // eslint-disable-next-line functional/immutable-data
    window.OptanonWrapper = function () {
      window.OneTrust.OnConsentChanged(function () {
        if (hasConsent()) {
          initMixpanel(mixpanelConfig);
        }
      });
    };

    if (hasConsent()) {
      initMixpanel(mixpanelConfig);
    }
  }, [mixpanelConfig]);

  return null;
};

export default ConsentHandler;
