interface FooterLinkGroup {
  title?: string;
  links: FooterLinksType[];
}
interface FooterLinksType {
  label: string;
  href: string;
  ariaLabel?: string;
  showOneTrustPreferencies?: boolean;
}

interface FooterSocialLinksType {
  iconURL: string;
  href: string;
  ariaLabel: string;
}
interface HashTagsGroup {
  title?: string;
  hashtags: string[];
}
interface FooterSocialLinksGroup {
  title?: string;
  links: FooterSocialLinksType[];
}
export interface DesignersItaliaFooterProps {
  links_Policies: FooterLinkGroup;
  links_SiteIndex: FooterLinkGroup;
  links_Social: FooterSocialLinksGroup;
  hashtags: HashTagsGroup;
  labels: {
    copyToClipboard: (hashtag: string) => string;
  };
}
