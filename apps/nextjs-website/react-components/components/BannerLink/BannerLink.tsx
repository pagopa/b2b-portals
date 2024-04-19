import { Box, Container, Stack } from '@mui/material';
import { CtaButtons } from '../common/Common';
import { BackgroundColor } from '../common/Common.helpers';
import { Content as BannerLinkContent } from './Content';
import { isJSX } from '../../types/common/Common.types';
import { BannerLinkProps } from '../../types/BannerLink/BannerLink.types';
import { CtaButtonProps } from '../../types/common/Common.types';

const styles = {
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: { md: '64px 24px', xs: '32px 24px' },
  },
};

const BannerLink = (props: BannerLinkProps) => {
  const { theme, body, title, ctaButtons, decoration = <></> } = props;
  const backgroundColor = BackgroundColor(theme);

  return (
    <Box bgcolor={backgroundColor} component='section'>
      <Container>
        <Stack gap={4} sx={styles.main}>
          {decoration ? (
            isJSX(decoration) ? (
              decoration
            ) : (
              <img {...decoration} />
            )
          ) : null}
          <BannerLinkContent {...{ body, title, theme }} />
          {ctaButtons?.length &&
            CtaButtons({
              ctaButtons: ctaButtons.map((button: CtaButtonProps) => ({
                ...button,
                sx: { width: { md: 'auto', xs: '100%' } },
              })),
              theme,
            })}
        </Stack>
      </Container>
    </Box>
  );
};

export default BannerLink;
