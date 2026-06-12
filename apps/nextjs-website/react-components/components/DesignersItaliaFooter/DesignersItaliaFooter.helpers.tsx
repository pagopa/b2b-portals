import Image from 'next/image';
import copyClipboardIcon from '@react-components/assets/icons/icon-copy-clipboard-white.svg';

import {
  SxProps,
  Typography,
  List,
  Link,
  ListItem,
  Button,
  Box,
} from '@mui/material';
import { DesignersItaliaFooterProps } from '@react-components/types';
import { ExternalLinkIcon, isValidExternalLink } from '../common/Common';

const listStyle: SxProps = {
  width: '100%',
  listStyleType: 'none',
  li: {
    mb: 2,
    width: 'auto',
    a: {
      m: '0 !important',
      p: '0 !important',
      color: 'inherit',
      textDecoration: 'underline',
      textDecorationThickness: 1,
    },
  },
};
const titleStyle: SxProps = {
  width: '100%',
  color: 'inherit',
  fontSize: '16px',
  fontWeight: 600,
  mb: '12px',
  mt: { xs: 1, md: 0 },
};

export const MenuPolicies = ({
  links_Policies,
}: {
  links_Policies: DesignersItaliaFooterProps['links_Policies'];
}) => (
  <Box
    sx={{
      width: '100%',
      backgroundColor: '#003366',
      padding: { xs: '24px 24px 8px 24px', md: '24px 70px' },
    }}
  >
    {links_Policies.links.length > 0 && (
      <List
        role='navigation'
        {...(links_Policies.title && {
          'aria-label': links_Policies.title,
        })}
        sx={{
          ...listStyle,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {links_Policies.links.map((link, index) => (
          <ListItem
            disablePadding
            key={`key_footer_policies_${index}`}
            sx={{ mb: { md: '0 !important' }, mr: { md: 3 } }}
          >
            <Link
              href={link.href}
              {...(link.ariaLabel && { 'aria-label': link.ariaLabel })}
              variant='body2'
              sx={{
                fontSize: '14px',
              }}
            >
              {link.label}
              <ExternalLinkIcon
                show={isValidExternalLink(link.href)}
                {...(isValidExternalLink(link.href) && {
                  target: '_blank',
                })}
              />
            </Link>
          </ListItem>
        ))}
      </List>
    )}
  </Box>
);

export const MenuSocial = ({
  links_Social,
}: {
  links_Social: DesignersItaliaFooterProps['links_Social'];
}) => (
  <>
    {links_Social.title && (
      <Typography sx={titleStyle}>{links_Social.title}</Typography>
    )}
    {links_Social.links.length > 0 && (
      <List
        disablePadding
        role='navigation'
        {...(links_Social.title && {
          'aria-label': links_Social.title,
        })}
        sx={{
          ...listStyle,
          display: 'inline',
        }}
      >
        {links_Social.links.map((social, index) => (
          <ListItem
            disablePadding
            key={`key_footer_social_${index}`}
            sx={{ m: '0 32px 0 0', display: 'inline' }}
          >
            <Link
              variant='body2'
              href={social.href}
              {...(social.ariaLabel && {
                'aria-label': social.ariaLabel,
              })}
            >
              <img
                src={social.iconURL}
                alt={social.ariaLabel}
                width={24}
                height={24}
              />
            </Link>
          </ListItem>
        ))}
      </List>
    )}
  </>
);

export const HashTags = ({
  hashtags,
  labels,
}: {
  labels: DesignersItaliaFooterProps['labels'];
  hashtags: DesignersItaliaFooterProps['hashtags'];
}) => {
  const copyHashtagToClipboard = async (hashtag: string) => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(hashtag);
      return;
    }
  };

  return (
    <>
      {hashtags.title && (
        <Typography sx={titleStyle}>{hashtags.title}</Typography>
      )}
      {hashtags.hashtags.length > 0 && (
        <List
          disablePadding
          sx={listStyle}
          {...(hashtags.title && {
            'aria-label': hashtags.title,
          })}
        >
          {hashtags.hashtags.map((hashtag, index) => (
            <ListItem disablePadding key={`key_footer_hashtag_${index}`}>
              <Button
                aria-label={labels.copyToClipboard(hashtag)}
                onClick={() => copyHashtagToClipboard(hashtag)}
                variant='text'
                sx={{
                  fontWeight: 400,
                  p: 0,
                  m: 0,
                  height: 'auto',
                  color: 'inherit',
                  textAlign: 'left',
                  '&:hover': {
                    color: 'inherit !important',
                  },
                  wordBreak: 'break-all',
                }}
                endIcon={
                  <Image
                    src={copyClipboardIcon}
                    alt={labels.copyToClipboard(hashtag)}
                    height={20}
                    width={20}
                  />
                }
              >
                {hashtag}
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export const MenuSiteIndex = ({
  links_SiteIndex,
}: {
  links_SiteIndex: DesignersItaliaFooterProps['links_SiteIndex'];
}) => {
  return (
    <>
      {links_SiteIndex.title && (
        <Typography sx={titleStyle}>{links_SiteIndex.title}</Typography>
      )}
      {links_SiteIndex.links.length > 0 && (
        <List
          disablePadding
          role='navigation'
          {...(links_SiteIndex.title && {
            'aria-label': links_SiteIndex.title,
          })}
          sx={{
            ...listStyle,
            columns: { xs: 1, md: 2 },
            columnGap: '24px',
          }}
        >
          {links_SiteIndex.links.map((link, index) => (
            <ListItem disablePadding key={`key_footer_siteindex_${index}`}>
              <Link
                href={link.href}
                {...(link.ariaLabel && { 'aria-label': link.ariaLabel })}
                variant='body2'
              >
                {link.label}
                <ExternalLinkIcon
                  show={isValidExternalLink(link.href)}
                  {...(isValidExternalLink(link.href) && {
                    target: '_blank',
                  })}
                />
              </Link>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};
