import { Box, Container, Link, Typography } from '@mui/material';
import { LastUpdatedProps } from '@react-components/types/LastUpdated/LastUpdated.types';
import { ExternalLinkIcon, isValidExternalLink } from '../common/Common';

const LastUpdated = ({
  lastUpdated,
  label,
  sectionID,
  link,
}: LastUpdatedProps) => {
  return (
    <Box
      component='section'
      sx={{ backgroundColor: '#ffffff', py: { xs: 3, md: 5 } }}
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
            href={link.href}
            {...(link.ariaLabel && {
              'aria-label': link.ariaLabel,
            })}
            sx={{ fontWeight: 'bold' }}
          >
            {link.label}
            <ExternalLinkIcon show={isValidExternalLink(link.href)} />
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default LastUpdated;
