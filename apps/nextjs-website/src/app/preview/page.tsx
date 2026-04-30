import { Config } from '@/AppEnv';
import PageSection from '@/components/PageSection/PageSection';
import { getPreviewToken, isPreviewMode, getters } from '@/lib/api';
import { Locale } from '@/lib/fetch/siteWideSEO';
import { ThemeProvider } from '@mui/material/styles';
import { isExperimentalThemeVariant } from '@react-components/components/common/Common.helpers';
import Script from 'next/script';
import { themeBase, themeExperimental } from '../theme';

const {
  getAllPageIDs,
  getAllPageSwitchPageIDs,
  getAllPressReleaseIDs,
  getPageDataFromID,
  getPageSwitchPageDataFromID,
  getPressReleaseDataFromID,
  getPressReleasePages,
  getSiteWideSEO,
} = getters;

const PreviewPage = async ({
  searchParams,
}: {
  searchParams: {
    type: 'page' | 'press-release' | 'page-switch-page' | undefined;
    secret: string | undefined;
    documentID: string | undefined;
    locale: Locale | undefined;
    tenant: Config['ENVIRONMENT'] | undefined;
  };
}) => {
  if (!isPreviewMode()) {
    return null;
  }

  const type = searchParams.type;
  const secret = searchParams.secret;
  const documentID = searchParams.documentID;
  const locale = searchParams.locale ?? 'it';
  const tenant = searchParams.tenant;
  const previewToken = getPreviewToken();

  if (previewToken === undefined || secret !== previewToken) {
    return <div>401: Unathorized request</div>;
  }

  if (documentID === undefined || tenant === undefined) {
    return <div>404: Missing parameters</div>;
  }

  const { oneTrustToken } = await getSiteWideSEO(tenant);

  const documentIDs = await (type === 'press-release'
    ? getAllPressReleaseIDs(tenant, locale)
    : type === 'page-switch-page'
      ? getAllPageSwitchPageIDs(tenant, locale)
      : getAllPageIDs(tenant, locale));

  if (!documentIDs.map((obj) => obj.documentId).includes(documentID)) {
    return <div>404: Missing page</div>;
  }

  const document = await (type === 'press-release'
    ? getPressReleaseDataFromID(tenant, documentID, locale)
    : type === 'page-switch-page'
      ? getPageSwitchPageDataFromID(tenant, documentID, locale)
      : getPageDataFromID(tenant, documentID, locale));

  const { themeVariant, pressReleasesParentSlug } = await getSiteWideSEO();
  const pressReleasePages = await getPressReleasePages(locale);

  return (
    <ThemeProvider
      theme={
        isExperimentalThemeVariant(themeVariant) ? themeExperimental : themeBase
      }
    >
      <style>{`
          html {
            scroll-behavior: smooth;
          }
          @media (prefers-reduced-motion: reduce) {
            html {
              scroll-behavior: auto;
            }
          }
        `}</style>
      <Script
        src='/scripts/otnotice-1.0.min.js'
        type='text/javascript'
        id='otprivacy-notice-script'
        strategy='beforeInteractive'
        {...(oneTrustToken && { 'data-settings': oneTrustToken })}
      />
      <div>
        {document.sections.map((section) =>
          PageSection({
            ...section,
            themeVariant,
            locale: document.locale,
            defaultLocale: document.locale, // Doesn't matter in preview
            pressReleasePages,
            ...(pressReleasesParentSlug && { pressReleasesParentSlug }),
          }),
        )}
      </div>
    </ThemeProvider>
  );
};

export default PreviewPage;
