import AllComponentsDryPage from '@/lib/__dry__/_AllComponents';

const isMockEnabled = process.env['USE_MOCK'] === 'true';

export default function MockPage() {
  if (!isMockEnabled) {
    return null;
  }

  return <AllComponentsDryPage />;
}
