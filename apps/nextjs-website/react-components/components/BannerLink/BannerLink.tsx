import { Box, Container, Stack } from '@mui/material';
import { CtaButtons } from '../common/Common';
import { BackgroundColor } from '../common/Common.helpers';
import { Content as BannerLinkContent } from './Content';
import { isJSX } from '../../types/common/Common.types';
import { BannerLinkProps } from '../../types/BannerLink/BannerLink.types';
import { CtaButtonProps } from '../../types/common/Common.types';
import React from 'react';

const styles = {
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: { md: '64px 24px', xs: '32px 24px' },
  },
  twoColumns: {
    display: 'flex',
    flexDirection: { md: 'row', xs: 'column' },
    justifyContent: 'space-between',
  }
};

const BannerLink = (props: BannerLinkProps) => {
  const { theme, sections } = props;
  const backgroundColor = BackgroundColor(theme);

  const iconColor = theme === 'dark' ? '#FFFFFF' : '#0057B7';

  return (
    <Box bgcolor={backgroundColor} component='section'>
      <Container>
        <Stack gap={2} sx={sections.length > 1 ? styles.twoColumns : styles.main}>
          {sections.map((section, index) => (
            <Stack key={index} gap={2} sx={styles.main}>
              {section.icon && React.isValidElement(section.icon) && React.cloneElement(section.icon as React.ReactElement<any>, { style: { fontSize: 60, color: iconColor } })}
              {section.decoration ? (
                isJSX(section.decoration) ? (
                  section.decoration
                ) : (
                  <img {...section.decoration} />
                )
              ) : null}
              <BannerLinkContent {...section} theme={theme} />
              {section.ctaButtons?.length &&
                CtaButtons({
                  ctaButtons: section.ctaButtons.map((button: CtaButtonProps) => ({
                    ...button,
                    sx: { width: 'auto' },
                    variant: 'outlined'
                  })),
                  theme,
                })}
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default BannerLink;
