'use client';
import { usePathname } from 'next/navigation';
import MarkdownRenderer from './MarkdownRenderer';
import Icon from './Icon';
import { Footer as FooterRC } from '@react-components/components';
import { FooterProps } from '@react-components/types';
import { FooterData } from '@/lib/fetch/footer';

const makeFooterProps = ({
  legalInfo,
  links_aboutUs,
  links_services,
  links_resources,
  links_followUs,
  locales,
  defaultLocale,
  activeLocale,
  ...rest
}: FooterData['data']['attributes'] & {
  locales: Array<'it' | 'en'>;
  defaultLocale: 'it' | 'en';
  activeLocale: 'it' | 'en';
}): FooterProps => ({
  legalInfo: MarkdownRenderer({
    markdown: legalInfo,
    locale: activeLocale,
    defaultLocale,
    variant: 'caption',
  }),
  links: {
    aboutUs: {
      links: links_aboutUs.links.map((link) => ({
        linkType: 'internal', // unused
        ...link,
      })),
      ...(links_aboutUs.title && { title: links_aboutUs.title }),
    },
    services: {
      links: links_services.links.map((link) => ({
        linkType: 'internal', // unused
        ...link,
      })),
      ...(links_services.title && { title: links_services.title }),
    },
    resources: {
      links: links_resources.links.map((link) => ({
        linkType: 'internal', // unused
        ...link,
      })),
      ...(links_resources.title && { title: links_resources.title }),
    },
    followUs: {
      title: links_followUs.title,
      links: links_followUs.links.map((link) => ({
        linkType: 'internal', // unused
        ...link,
      })),
      socialLinks: links_followUs.socialLinks.map(
        ({ icon, href, ariaLabel }) => ({
          icon: Icon(icon),
          href,
          linktype: 'external', // default
          'aria-label': ariaLabel,
          // above conversion is needed because social icons just pass through all props other than icon
          // this means we need to format them as if they were HTML attributes
        })
      ),
    },
  },
  languages: locales.map((locale) => ({
    id: locale,
    value: locale === 'en' ? 'English' : 'Italiano',
    href: defaultLocale === locale ? '/' : `/${locale}`,
  })),
  activeLanguage: {
    id: activeLocale,
    value: activeLocale === 'en' ? 'English' : 'Italiano',
    href: '',
  },
  ...rest,
});

const Footer = (
  props: FooterData['data']['attributes'] & {
    locales: Array<'it' | 'en'>;
    defaultLocale: 'it' | 'en';
  }
) => {
  const pathname = usePathname();
  const activeLocale = pathname.slice(1, 3) as 'it' | 'en';

  return <FooterRC {...makeFooterProps({ ...props, activeLocale })} />;
};
export default Footer;
