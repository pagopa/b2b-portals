import { Config } from '@/AppEnv';
import PageSection from '@/components/PageSection/PageSection';
import {
  getAllPageIDs,
  getAllPageSwitchPageIDs,
  getAllPressReleaseIDs,
  getPageDataFromID,
  getPageSwitchPageDataFromID,
  getPressReleaseDataFromID,
  getPressReleasePages,
  getPreviewToken,
  getSiteWideSEO,
  isPreviewMode,
} from '@/lib/api';
import { Locale, ThemeVariant } from '@/lib/fetch/siteWideSEO';

// Fetch themeVariant from General
// Default to 'SEND' if General isn't present
const GetThemeVariantForPreview = async (): Promise<ThemeVariant> => {
  // Disable eslint because making the preview work when General has not been filled by the CMS user is more important
  // eslint-disable-next-line functional/no-try-statements
  try {
    const { themeVariant } = await getSiteWideSEO();
    return themeVariant;
  } catch {
    return 'SEND';
  }
};

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

  const themeVariant = await GetThemeVariantForPreview();
  const pressReleasePages = await getPressReleasePages(locale);

  return (
    <div>
      {document.sections.map((section) =>
        PageSection({
          ...section,
          themeVariant,
          locale: document.locale,
          defaultLocale: document.locale, // Doesn't matter in preview
          pressReleasePages,
        }),
      )}
    </div>
  );
};

export default PreviewPage;
