'use client';
import { usePathname } from 'next/navigation';
import MarkdownRenderer from './MarkdownRenderer';
import { Footer as FooterRC } from '@react-components/components';
import { FooterProps } from '@react-components/types';
import { FooterData } from '@/lib/fetch/footer';
import { LocalizeURL } from '@/lib/linkLocalization';
import { Locale } from '@/lib/fetch/siteWideSEO';

const LanguageSwitchValues = {
  it: 'Italiano',
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  sl: 'Slovenski',
};

const makeFooterProps = ({
  legalInfo,
  links_aboutUs,
  links_services,
  links_resources,
  links_followUs,
  locales,
  defaultLocale,
  activeLocale,
  companyLink,
  ...rest
}: FooterData['data']['attributes'] & {
  locales: Array<Locale>;
  defaultLocale: Locale;
  activeLocale: Locale;
}): FooterProps => ({
  legalInfo: MarkdownRenderer({
    markdown: legalInfo,
    locale: activeLocale,
    defaultLocale,
    variant: 'caption',
  }),
  links: {
    aboutUs: {
      links: links_aboutUs.links.map(({ href, ...link }) => ({
        ...link,
        href: LocalizeURL({ URL: href, locale: activeLocale, defaultLocale }),
      })),
      ...(links_aboutUs.title && { title: links_aboutUs.title }),
    },
    services: {
      links: links_services.links.map(({ href, ...link }) => ({
        ...link,
        href: LocalizeURL({ URL: href, locale: activeLocale, defaultLocale }),
      })),
      ...(links_services.title && { title: links_services.title }),
    },
    resources: {
      links: links_resources.links.map(({ href, ...link }) => ({
        ...link,
        href: LocalizeURL({ URL: href, locale: activeLocale, defaultLocale }),
      })),
      ...(links_resources.title && { title: links_resources.title }),
    },
    followUs: {
      title: links_followUs.title,
      links: links_followUs.links.map(({ href, ...link }) => ({
        ...link,
        href: LocalizeURL({ URL: href, locale: activeLocale, defaultLocale }),
      })),
      socialLinks: links_followUs.socialLinks.map(
        ({ icon, href, ariaLabel }) => ({
          iconURL: icon?.data?.attributes?.url ?? '',
          href: LocalizeURL({ URL: href, locale: activeLocale, defaultLocale }),
          ariaLabel,
        }),
      ),
    },
  },
  languages: locales.map((locale) => ({
    id: locale,
    value: LanguageSwitchValues[locale],
    href: defaultLocale === locale ? '/' : `/${locale}`,
  })),
  activeLanguage: {
    id: activeLocale,
    value: LanguageSwitchValues[activeLocale],
    href: '',
  },
  companyLink: {
    ariaLabel: companyLink.ariaLabel,
    href: LocalizeURL({
      URL: companyLink.href,
      locale: activeLocale,
      defaultLocale,
    }),
  },
  ...rest,
});

const Footer = (
  props: FooterData['data']['attributes'] & {
    locales: Array<Locale>;
    defaultLocale: Locale;
  },
) => {
  const pathname = usePathname() + '/'; // Add final slash to make sure not to miss a non-default locale's homepage (e.g.: \en)
  const activeLocale = ['it/', 'en/', 'de/', 'fr/', 'sl/'].includes(
    pathname.slice(1, 4),
  ) // Include '/' to make sure not to detect slugs happening to begin with the same letters (e.g.: /enroll)
    ? (pathname.slice(1, 3) as Locale)
    : props.defaultLocale;

  return <FooterRC {...makeFooterProps({ ...props, activeLocale })} />;
};
export default Footer;
