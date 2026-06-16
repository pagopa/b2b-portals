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
  Snackbar,
} from '@mui/material';
import { DesignersItaliaFooterProps } from '@react-components/types';
import { ExternalLinkIcon, isValidExternalLink } from '../common/Common';
import { useState } from 'react';

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

export const MenuBottomLinks = ({
  bottomLinks,
}: {
  bottomLinks: DesignersItaliaFooterProps['bottomLinks'];
}) =>
  bottomLinks && bottomLinks.links.length > 0 ? (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#003366',
        padding: { xs: '24px 24px 8px 24px', md: '24px 70px' },
      }}
    >
      {bottomLinks && bottomLinks.links.length > 0 && (
        <List
          role='navigation'
          {...(bottomLinks.title && {
            'aria-label': bottomLinks.title,
          })}
          sx={{
            ...listStyle,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {bottomLinks.links.map((link, index) => (
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
                {...(isValidExternalLink(link.href) && {
                  target: '_blank',
                })}
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
  ) : null;

export const MenuSocial = ({
  socialLinks,
}: {
  socialLinks: DesignersItaliaFooterProps['socialLinks'];
}) =>
  socialLinks ? (
    <>
      {socialLinks && socialLinks.title && (
        <Typography sx={titleStyle}>{socialLinks.title}</Typography>
      )}
      {socialLinks && socialLinks.links.length > 0 && (
        <List
          disablePadding
          role='navigation'
          {...(socialLinks.title && {
            'aria-label': socialLinks.title,
          })}
          sx={{
            ...listStyle,
            display: 'inline',
          }}
        >
          {socialLinks.links.map((social, index) => (
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
                {...(isValidExternalLink(social.href) && {
                  target: '_blank',
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
  ) : null;

export const HashTags = ({
  hashtags,
  labels,
}: {
  labels: DesignersItaliaFooterProps['labels'];
  hashtags: DesignersItaliaFooterProps['hashtags'];
}) => {
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const copyHashtagToClipboard = async (hashtag: string) => {
    if (navigator.clipboard) {
      setOpenSnackBar(true);
      await navigator.clipboard.writeText(hashtag);
      return;
    }
  };

  return hashtags ? (
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
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackBar(false)}
        message={labels.copiedToClipboard}
      />
    </>
  ) : null;
};

export const MenuLinks = ({
  links,
}: {
  links: DesignersItaliaFooterProps['links'];
}) => {
  return (
    <>
      {links.title && <Typography sx={titleStyle}>{links.title}</Typography>}
      {links.links.length > 0 && (
        <List
          disablePadding
          role='navigation'
          {...(links.title && {
            'aria-label': links.title,
          })}
          sx={{
            ...listStyle,
            columns: { xs: 1, md: 2 },
            columnGap: '24px',
          }}
        >
          {links.links.map((link, index) => (
            <ListItem disablePadding key={`key_footer_siteindex_${index}`}>
              <Link
                href={link.href}
                {...(link.ariaLabel && { 'aria-label': link.ariaLabel })}
                variant='body2'
                {...(isValidExternalLink(link.href) && {
                  target: '_blank',
                })}
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
