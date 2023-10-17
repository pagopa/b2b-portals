export function generateStaticParams() {
  return [{ slug: ['a', '1'] }, { slug: ['b', '2'] }, { slug: ['c', '3'] }];
}

export default function DynamicPages({
  params,
}: {
  params: { slug: string[] };
}) {
  const { slug } = params;
  return (
    <div>
      <p>Ciao, sono la pagina ’{slug.join('/')}’</p>
    </div>
  );
}
