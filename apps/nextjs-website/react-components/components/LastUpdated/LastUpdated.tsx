import { Box, Container, Link, Typography } from '@mui/material';
import { LastUpdatedProps } from '@react-components/types/LastUpdated/LastUpdated.types';
import { ExternalLinkIcon, isValidExternalLink } from '../common/Common';

const LastUpdated = ({
  lastUpdated,
  label,
  sectionID,
  licenseLink,
}: LastUpdatedProps) => {
  return (
    <Box
      component='section'
      py={{ xs: 3, md: 5 }}
      {...(sectionID && { sectionID })}
    >
      <Container sx={{ px: 3, width: { xs: '100%', md: '75%' } }}>
        <Box
          sx={{ display: { xs: 'block', md: 'flex' } }}
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography variant='body2' sx={{ marginBottom: { xs: 3, md: 0 } }}>
            {label}: {lastUpdated}
          </Typography>
          <Link
            href={licenseLink.href}
            {...(licenseLink.ariaLabel && {
              'aria-label': licenseLink.ariaLabel,
            })}
            sx={{ fontWeight: 'bold' }}
          >
            {licenseLink.label}
            <ExternalLinkIcon show={isValidExternalLink(licenseLink.href)} />
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default LastUpdated;
