import { Config } from '@/AppEnv';
import PageSection from '@/components/PageSection/PageSection';
import {
  getAllPageIDs,
  getPageSectionsFromID,
  getPreviewToken,
  getSiteWideSEO,
  isPreviewMode,
} from '@/lib/api';
import { ThemeVariant } from '@/lib/fetch/siteWideSEO';

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
    secret: string | undefined;
    pageID: string | undefined;
    tenant: Config['ENVIRONMENT'] | undefined;
  };
}) => {
  if (!isPreviewMode()) {
    return null;
  }

  const secret = searchParams.secret;
  const pageID = Number(searchParams.pageID);
  const tenant = searchParams.tenant;
  const previewToken = getPreviewToken();

  if (previewToken === undefined || secret !== previewToken) {
    return <div>401: Unathorized request</div>;
  }

  if (!pageID || tenant === undefined) {
    return <div>404: Missing parameters</div>;
  }

  const pageIDs = await getAllPageIDs(tenant);
  if (!pageIDs.map((obj) => obj.id).includes(pageID)) {
    return <div>404: Missing page</div>;
  }

  const sections = await getPageSectionsFromID(tenant, pageID);
  const themeVariant = await GetThemeVariantForPreview();

  return (
    <div>
      {sections.map((section) =>
        PageSection({
          ...section,
          themeVariant,
          locale: 'it', // Doesn't matter in preview
          defaultLocale: 'it', // Doesn't matter in preview
        })
      )}
    </div>
  );
};

export default PreviewPage;
