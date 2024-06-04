import { Box, Container, Grid } from '@mui/material';
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
      <Grid container spacing={4}>
        <Grid item xs={12} sm={3}>
          <FooterColumn data={aboutUs} companyLink={companyLink} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FooterColumn data={services} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FooterColumn data={resources} />
        </Grid>
        <Grid 
          item 
          xs={12} 
          sm={3} 
          container 
          direction='column' 
          justifyContent={{ xs: 'center', sm: 'space-between' }} 
          alignItems={{ xs: 'center', sm: 'flex-start' }}
        >
          <Box width='100%'>
            <FooterColumn data={followUs} icons={followUs.socialLinks} />
            {langProps.languages.length > 0 && <LangSwitch {...langProps} />}
          </Box>
          {showFundedByNextGenerationEULogo && (
            <Box sx={{ mt: 2 }}>
              <FundedByNextGenerationEU size={180} />
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
    <LegalInfo data={legalInfo} />
  </Box>
);

export default Footer;




