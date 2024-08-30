import { redirect } from 'next/navigation';

// If user requests homepage with no locale, redirect them to default locale
export default function RootPage() {
  return redirect('/it');
}
