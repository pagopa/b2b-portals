'use client';
import { Analytics, MixpanelConfig } from '@/lib/fetch/siteWideSEO';
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
    // OptanonActiveGroups will only be missing when CMS user inputs an invalid oneTrustDomainID
    // We are only considering the case because we have no way to check beforehand if the id is valid
    // Hence, this would cause a runtime error and break the built static website (which we want to avoid)
    // Instead the cookie banner just won't show and an error will be logged to console
    OptanonActiveGroups?: string;
    OneTrust: {
      // eslint-disable-next-line functional/no-return-void
      OnConsentChanged: (callback: () => void) => void;
    };
  }
}

const targCookiesGroup = 'C0002'; // Target cookies (Mixpanel)

const hasConsent = () => window.OptanonActiveGroups?.includes(targCookiesGroup);

const initMixpanel = (mixpanelConfig: NonNullable<MixpanelConfig>) =>
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
    opt_out_tracking_by_default: true,
  });

const ConsentHandler = ({
  oneTrustDomainID,
  mixpanel: mixpanelConfig,
  matomoID,
}: NonNullable<Analytics>) => {
  if (mixpanelConfig) {
    initMixpanel(mixpanelConfig);
  }

  useEffect(() => {
    if (window.OptanonActiveGroups === undefined) {
      console.error('ERROR: Invalid OneTrust domain ID');
    }

    // eslint-disable-next-line functional/immutable-data
    window.OptanonWrapper = function () {
      window.OneTrust.OnConsentChanged(function () {
        if (hasConsent() && mixpanelConfig) {
          mixpanel.opt_in_tracking();
          // Track page view of page where consent is given
          mixpanel.track_pageview();
        }
      });
    };

    if (hasConsent() && mixpanelConfig) {
      mixpanel.opt_in_tracking();
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
