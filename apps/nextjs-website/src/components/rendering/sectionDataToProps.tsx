import { EditorialProps } from '@pagopa/pagopa-editorial-components/dist/components/Editorial';
import { EditorialSection } from '@/lib/fetch/types/PageSection';

export const SectionDataToEditorialProps = ({
  title,
  eyelet,
  body,
  pattern,
  width,
  reversed,
  image,
  ctaButtons,
}: EditorialSection): EditorialProps => ({
  title,
  ...(eyelet && { eyelet }),
  body, // TODO: Parse rich text (markdown)
  reversed,
  width,
  pattern,
  ctaButtons,
  image: <img src={image?.url} alt={image?.alternativeText ?? ''} />,
});
