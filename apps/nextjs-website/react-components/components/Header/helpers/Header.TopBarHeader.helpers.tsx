import { Box, Link, Typography } from '@mui/material';
import LangSwitch from './Header.LangSwitch.helpers';
import { LangSwitchProps } from '@react-components/types/Footer/Footer.types';
import { isValidExternalLink } from '@react-components/components/common/Common';

interface Props extends LangSwitchProps {
  topBarHeaderLogo?: {
    src: string;
    alt: string;
    href: string;
  };
  topBarHeaderTitle?: string;
  topBarHeaderTitleMobile?: string;
  topBarHeaderLink?: string;
  isMobile: boolean;
}

const TopBarHeaderCheckLink = ({
  topBarHeaderLink,
  children,
}: {
  topBarHeaderLink?: string;
  children: JSX.Element;
}) =>
  topBarHeaderLink ? (
    <Link
      href={topBarHeaderLink}
      sx={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        alignItems: 'center',
      }}
      {...(isValidExternalLink(topBarHeaderLink) && { target: '_blank' })}
    >
      {children}
    </Link>
  ) : (
    children
  );
export const TopBarHeader = ({
  topBarHeaderLogo,
  topBarHeaderTitle,
  topBarHeaderLink,
  topBarHeaderTitleMobile,
  isMobile,
  languages,
  activeLanguage,
}: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#004D99',
        color: '#FFFFFF',
        p: { xs: '14px 24px', md: '12px 60px' },
        zIndex: 1000,
      }}
    >
      <TopBarHeaderCheckLink {...(topBarHeaderLink && { topBarHeaderLink })}>
        <>
          {topBarHeaderLogo && (
            <img
              src={topBarHeaderLogo.src}
              alt={topBarHeaderLogo.alt ?? ''}
              style={{ marginRight: 8, height: 24 }}
            />
          )}
          {!isMobile && topBarHeaderTitle && (
            <Typography
              sx={{ color: 'inherit', fontWeight: 600, fontSize: 14 }}
            >
              {topBarHeaderTitle}
            </Typography>
          )}
          {isMobile && topBarHeaderTitleMobile && (
            <Typography
              sx={{ color: 'inherit', fontWeight: 600, fontSize: 14 }}
            >
              {topBarHeaderTitleMobile}
            </Typography>
          )}
        </>
      </TopBarHeaderCheckLink>
      <LangSwitch
        isMobile={isMobile}
        activeLanguage={activeLanguage}
        languages={languages}
      />
    </Box>
  );
};
