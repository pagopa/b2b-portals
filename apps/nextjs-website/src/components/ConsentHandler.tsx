'use client';
import { SiteWideSEO } from '@/lib/fetch/siteWideSEO';
import mixpanel from 'mixpanel-browser';
import { useEffect } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line functional/no-return-void
    OptanonWrapper: () => void;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const OneTrust: any;
declare const OnetrustActiveGroups: string;

const targCookiesGroup = 'C0002'; // Target cookies (Mixpanel)

const initMixpanel = (
  mixpanelConfig: NonNullable<SiteWideSEO['data']['attributes']['mixpanel']>,
) => {
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
};

const hasConsent = () => {
  const OTCookieValue: string =
    document.cookie
      .split('; ')
      .find((row) => row.startsWith('OptanonConsent=')) || '';
  const checkValue = `${targCookiesGroup}%3A1`;
  return OTCookieValue.indexOf(checkValue) > -1;
};

const ConsentHandler = (
  mixpanelConfig: NonNullable<SiteWideSEO['data']['attributes']['mixpanel']>,
) => {
  useEffect(() => {
    // eslint-disable-next-line functional/immutable-data
    window.OptanonWrapper = function () {
      OneTrust.OnConsentChanged(function () {
        if (OnetrustActiveGroups.indexOf(targCookiesGroup) > -1) {
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
