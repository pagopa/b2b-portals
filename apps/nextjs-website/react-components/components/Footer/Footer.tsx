import { Box, Container } from '@mui/material';
import { FundedByNextGenerationEU } from './assets/FundedByNextGenerationEU';
import { FooterColumn } from './helpers/FooterColumn';
import { LangSwitch } from './helpers/LangSwitch';
import { LegalInfo } from './helpers/LegalInfo';
import { FooterProps } from '../../types/Footer/Footer.types';

const Footer = ({
  companyLink,
  legalInfo,
  links: { aboutUs, resources, followUs, services },
  showFundedByNextGenerationEULogo = false,
  ...langProps
}: FooterProps) => (
  <Box
    borderColor='divider'
    borderTop='1px'
    component='footer'
    px={{ sm: 8, xs: 2 }}
    sx={{ backgroundColor: 'background.paper' }}
  >
    <Container
      maxWidth={false}
      sx={{
        py: 8,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 4,
      }}
    >
      <FooterColumn data={aboutUs} companyLink={companyLink} />
      <FooterColumn data={services} />
      <FooterColumn data={resources} />
      <Box
        display='flex'
        flexDirection='column'
        alignItems={{ sm: 'flex-start', xs: 'center' }}
      >
        <FooterColumn data={followUs} icons={followUs.socialLinks} />
        {langProps.languages.length > 0 && <LangSwitch {...langProps} />}
        {showFundedByNextGenerationEULogo && ( <FundedByNextGenerationEU size={180} /> )}
      </Box>
    </Container>
    <LegalInfo data={legalInfo} />
  </Box>
);

export default Footer;
