import { Box, Container, Stack } from '@mui/material';
import { CtaButtons } from '../common/Common';
import { BackgroundColor } from '../common/Common.helpers';
import { Content as BannerLinkContent } from './Content';
import { isJSX } from '../../types/common/Common.types';
import { BannerLinkProps } from '../../types/BannerLink/BannerLink.types';
import { CtaButtonProps } from '../../types/common/Common.types';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

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

  return (
    <Box bgcolor={backgroundColor} component='section'>
      <Container>
        <Stack gap={2} sx={styles.main}>
          {icon && <MailOutlineIcon style={{ fontSize: 60 }} />}
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
              })),
              theme,
            })}
        </Stack>
      </Container>
    </Box>
  );
};

export default BannerLink;