'use client';
import { Analytics } from '@/lib/fetch/siteWideSEO';
import mixpanel from 'mixpanel-browser';
import Script from 'next/script';
import { useEffect } from 'react';

const MatomoScript = (id: string): string => `
var _paq = (window._paq = window._paq || []);
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);
(function () {
  var u = "https://pagopa.matomo.cloud/";
  _paq.push(["setTrackerUrl", u + "matomo.php"]);
  _paq.push(["setSiteId", "${id}"]);
  var d = document,
    g = d.createElement("script"),
    s = d.getElementsByTagName("script")[0];
  g.async = true;
  g.src = "//cdn.matomo.cloud/pagopa.matomo.cloud/matomo.js";
  s.parentNode.insertBefore(g, s);
})();`;

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
  matomoID,
}: NonNullable<Analytics>) => {
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
    });

    if (mixpanel.has_opted_out_tracking()) {
      // Explicitely opt into tracking because init doesn't overwrite this value (wherever it's persisted)
      // which means if the user previously opted out (when the code implemented the function), init won't change that
      mixpanel.opt_in_tracking();
    }

    // Track page view of page where consent is given
    mixpanel.track_pageview();
  };

  useEffect(() => {
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
  }, [initMixpanel]);

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
      {matomoID && (
        <Script
          id='matomo'
          key='script-matomo'
          dangerouslySetInnerHTML={{ __html: MatomoScript(matomoID) }}
          strategy='lazyOnload'
        />
      )}
    </>
  );
};

export default ConsentHandler;
