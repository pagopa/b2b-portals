'use client';
import { Analytics } from '@/lib/fetch/siteWideSEO';
import mixpanel from 'mixpanel-browser';
import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line functional/no-return-void
    OptanonWrapper: () => void;
    OneTrust: {
      // eslint-disable-next-line functional/no-return-void
      OnConsentChanged: (callback: () => void) => void;
      // eslint-disable-next-line functional/no-return-void
      ToggleInfoDisplay: () => void;
    };
  }
}

const targCookiesGroup = 'C0002'; // Target cookies (Mixpanel)

// Reading cookie instead of checking window.OneTrust.OptanonActiveGroups
// because it will NEVER be instantiated at page load when we first check
const hasConsent = () => {
  const OTCookieValue: string =
    document.cookie
      .split('; ')
      .find((row) => row.startsWith('OptanonConsent=')) || '';
  const checkValue = `${targCookiesGroup}%3A1`;
  return OTCookieValue.indexOf(checkValue) > -1;
};

const ConsentHandler = ({
  oneTrustDomainID,
  mixpanel: mixpanelConfig,
}: NonNullable<Analytics>) => {
  useEffect(() => {
    const initMixpanel = () => {
      if (!mixpanelConfig) return;

      mixpanel.init(mixpanelConfig.token, {
        ...(mixpanelConfig.apiHost && { api_host: mixpanelConfig.apiHost }),
        ...(mixpanelConfig.cookieDomain && {
          cookie_domain: mixpanelConfig.cookieDomain,
        }), // allow across-subdomain
        cookie_expiration: 0, // session cookie
        debug: mixpanelConfig.debug,
        ip: mixpanelConfig.ip,
        persistence: 'cookie',
        secure_cookie: true,
        batch_requests: false,
      });

      // Track page view of page where consent is given
      mixpanel.track_pageview();
    };

    // eslint-disable-next-line functional/immutable-data
    window.OptanonWrapper = function () {
      window.OneTrust.OnConsentChanged(() => {
        if (hasConsent()) {
          initMixpanel();
        }
      });
    };

    if (hasConsent()) {
      initMixpanel();
    }
  }, [mixpanelConfig]);

  return (
    <>
      <div
        id='onetrust-consent-sdk'
        style={{ fontFamily: 'Titillium Web, sans-serif' }}
      />
      <Script
        src='https://cdn.cookielaw.org/scripttemplates/otSDKStub.js'
        type='text/javascript'
        data-domain-script={oneTrustDomainID}
        strategy='afterInteractive'
      />
    </>
  );
};

export default ConsentHandler;
