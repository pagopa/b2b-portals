// route handler enabling draft mode
import PageSection from '@/components/PageSection/PageSection';
import { getAllPageIDs, getPageSectionsFromID } from '@/lib/api';
import { draftMode } from 'next/headers';

export async function GET(request: Request) {
  const ReactDOMServer = (await import('react-dom/server')).default;
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const pageID = Number(searchParams.get('pageID'));

  if (secret !== 'MY_SECRET_TOKEN') {
    // TODO: Load this from env
    return new Response('Invalid token', { status: 401 });
  }

  if (!pageID) {
    return new Response('Missing parameters', { status: 404 });
  }

  const pageIDs = await getAllPageIDs();
  if (!pageIDs.map((obj) => obj.id).includes(pageID)) {
    return new Response('Missing page', { status: 404 });
  }

  draftMode().enable();

  const sections = await getPageSectionsFromID(pageID);
  return new Response(
    `<div>${sections.map((section) => ReactDOMServer.renderToString(PageSection(section) ?? <></>))}</div>`
  );
}
