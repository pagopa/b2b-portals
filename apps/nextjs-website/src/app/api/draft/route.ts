// route handler enabling draft mode
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

// TODO: Find way to build pages for different tenants based on searchParams

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');
  const tenant = searchParams.get('tenant');

  if (secret !== 'MY_SECRET_TOKEN' || !slug) {
    return new Response('Invalid token', { status: 401 });
  }

  //TODO: Check slug exists by fetching navigation and return error if it doesn't

  draftMode().enable();
  redirect(slug); // TODO: Use slug fetched by navigation to prevent open redirect vulnerabilities
  // TODO: We'll probably sub the redirect for the actual generation of the page, which will be served directly to the client
}
