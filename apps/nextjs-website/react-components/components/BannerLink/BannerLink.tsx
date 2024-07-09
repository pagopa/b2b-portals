import { Box, Container, Stack } from '@mui/material';
import { CtaButtons } from '../common/Common';
import { BackgroundColor } from '../common/Common.helpers';
import { Content as BannerLinkContent } from './Content';
import { isJSX } from '../../types/common/Common.types';
import { BannerLinkProps } from '../../types/BannerLink/BannerLink.types';
import { CtaButtonProps } from '../../types/common/Common.types';
import MailIcon from '@mui/icons-material/Mail';

const styles = {
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: { md: '64px 24px', xs: '32px 24px' },
  },
};

const BannerLink = (props: BannerLinkProps) => {
  const { theme, normalText, boldText, link, title, ctaButtons, decoration = <></>, icon } = props;
  const backgroundColor = BackgroundColor(theme);
  const iconColor = theme === 'dark' ? '#FFFFFF' : '#0057B7';

  return (
    <Box bgcolor={backgroundColor} component='section'>
      <Container>
        <Stack gap={2} sx={styles.main}>
          {icon && <MailIcon style={{ fontSize: 60, color: iconColor }} />}
          {decoration ? (
            isJSX(decoration) ? (
              decoration
            ) : (
              <img {...decoration} />
            )
          ) : null}
          <BannerLinkContent {...{ normalText, boldText, link, title, theme }} />
          {ctaButtons?.length &&
            CtaButtons({
              ctaButtons: ctaButtons.map((button: CtaButtonProps) => ({
                ...button,
                sx: { width: 'auto' },
                variant: 'outlined'
              })),
              theme,
            })}
        </Stack>
      </Container>
    </Box>
  );
};

export default BannerLink;
