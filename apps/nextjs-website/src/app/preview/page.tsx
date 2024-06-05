import PageSection from '@/components/PageSection/PageSection';
import {
  getAllPageIDs,
  getPageSectionsFromID,
  getPreviewToken,
  isPreviewMode,
} from '@/lib/api';

const PreviewPage = async ({
  searchParams,
}: {
  searchParams: { secret: string | undefined; pageID: string | undefined };
}) => {
  if (!isPreviewMode()) {
    return null;
  }

  const secret = searchParams.secret;
  const pageID = Number(searchParams.pageID);
  const previewToken = getPreviewToken();

  if (previewToken === undefined || secret !== previewToken) {
    return <div>401: Unathorized request</div>;
  }

  if (!pageID) {
    return <div>404: Missing parameters</div>;
  }

  const pageIDs = await getAllPageIDs();
  if (!pageIDs.map((obj) => obj.id).includes(pageID)) {
    return <div>404: Missing page</div>;
  }

  const sections = await getPageSectionsFromID(pageID);

  return <div>{sections.map(PageSection)}</div>;
};

export default PreviewPage;

// TODO: Remove this page from SSG (currently generates an empty page)
