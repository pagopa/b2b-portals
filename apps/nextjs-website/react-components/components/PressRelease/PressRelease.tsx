import React, { useState } from 'react';
import {
  Box,
  Typography,
  Link,
  Stack,
  Button,
  Snackbar,
} from '@mui/material';
import {
  TextColor,
  BackgroundColor,
  ExtraTextColor,
  TextAlternativeColor,
} from '../common/Common.helpers';
import { PressReleaseProps } from '@react-components/types';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import shareIcon from '@react-components/assets/icons/share.svg';
import linkIcon from '@react-components/assets/icons/link.svg';
import Image from 'next/image';

const PressRelease = (props: PressReleaseProps) => {
  const {
    date,
    title,
    subtitle,
    body,
    sectionID,
    backlink,
    metadata,
  } = props;
  const textColor = TextColor('light');
  const eyeletColor = ExtraTextColor('light');
  const backgroundColor = BackgroundColor('light');
  const backlinkColor = TextAlternativeColor('light');
  const [copyLinkSnackBarOpen, setCopyLinkSnackBarOpen] = useState(false);

  const ShareLink = () => {
    if (navigator.share) {
      navigator.share({
        title,
        url: window.location.href,
      });
    }
  };

  const CopyLink = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setCopyLinkSnackBarOpen(true);
    }
  };

  return (
    <Box
      component='section'
      {...(sectionID && { id: sectionID })}
      sx={{
        width: '100%',
        maxWidth: '1800px',
        bgcolor: backgroundColor,
        color: textColor,
        py: { xs: 6, md: 10 },
        px: { xs: 4, md: 15 },
        mx: 'auto',
      }}
    >
      {backlink && (
        <Stack direction='row' alignItems='center' spacing={1} sx={{ mb: 4 }}>
          <ArrowBackIcon sx={{ color: backlinkColor }} />
          <Link
            href={backlink.href}
            color={backlinkColor}
            underline='none'
            fontWeight='bold'
            fontSize='16px'
            {...(backlink.ariaLabel && { 'aria-label': backlink.ariaLabel })}
          >
            {backlink.label}
          </Link>
        </Stack>
      )}
      <Typography
        variant='overline'
        component='div'
        sx={{
          color: eyeletColor,
          fontSize: { xs: '16px', md: '16px' },
          fontWeight: 400,
        }}
      >
        {date}
      </Typography>
      <Typography
        variant='h4'
        component='h2'
        sx={{ fontSize: { xs: '32px', md: '38px' }, color: textColor, mt: 2 }}
        width='75%'
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant='h6'
          component='h3'
          sx={{
            fontSize: { xs: '22px', md: '24px' },
            mt: 2,
            color: textColor,
          }}
          width='75%'
        >
          {subtitle}
        </Typography>
      )}
      <Typography
        component='div'
        variant='body1'
        sx={{
          fontSize: { xs: '14px', md: '16px' },
          mt: 1,
          color: textColor,
          '& a': {
            color: textColor,
            textDecoration: 'underline',
            '&:hover': {
              color: textColor,
              textDecoration: 'underline',
            },
          },
        }}
        width='75%'
      >
        {body}
      </Typography>
      {metadata && (
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'left', md: 'center' }}
          justifyContent='space-between'
          mt={5}
          gap={1}
        >
          {metadata.readingTime && (
            <Typography>
              {metadata.labels.readingTime}
              <strong>{metadata.readingTime}</strong>
            </Typography>
          )}
          <Stack direction='row' alignItems='center'>
            <Button
              sx={{
                paddingInline: '0',
                height: '24px',
              }}
              onClick={ShareLink}
              endIcon={
                <Image
                  src={shareIcon}
                  alt={metadata.labels.shareLink}
                  width={24}
                  height={24}
                />
              }
            >
              {metadata.labels.shareLink}
            </Button>
            <Box
              width='1px'
              height='24px'
              sx={{ backgroundColor: '#C5C7C9', marginInline: '8px' }}
            />
            <Button
              sx={{
                paddingInline: '0',
                height: '24px',
              }}
              onClick={CopyLink}
              endIcon={
                <Image
                  src={linkIcon}
                  alt={metadata.labels.copyLink}
                  width={24}
                  height={24}
                />
              }
            >
              {metadata.labels.copyLink}
            </Button>
            <Snackbar
              open={copyLinkSnackBarOpen}
              autoHideDuration={5000}
              onClose={() => setCopyLinkSnackBarOpen(false)}
              message={metadata.labels.linkCopied}
            />
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default PressRelease;
