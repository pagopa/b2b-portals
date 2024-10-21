import { redirect } from 'next/navigation';

// If user requests homepage with no locale, redirect them to default locale
export default function RootPage() {
  return redirect('/it');
}

// TODO: Evaluate if we can redirect any locale-less request to the default /it locale
