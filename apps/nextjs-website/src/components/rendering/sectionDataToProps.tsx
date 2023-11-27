import { EditorialProps } from '@pagopa/pagopa-editorial-components/dist/components/Editorial';
import { EditorialSectionData } from '@/lib/fetch/page';

export const SectionDataToEditorialProps = ({
  title,
  eyelet,
  body,
  pattern,
  width,
  reversed,
  image,
  ctaButtons,
}: EditorialSectionData): EditorialProps => ({
  title,
  ...(eyelet && { eyelet }),
  body, // TODO: Parse rich text (markdown)
  reversed,
  width,
  pattern,
  ctaButtons,
  image: (
    <img
      src={'http://localhost:1337' + (image.data?.attributes.url ?? '')} // TODO: Sub "http://localhost:1337" for config.STRAPI_API_BASE_URL
      alt={image.data?.attributes.alternativeText ?? ''}
    />
  ),
});
