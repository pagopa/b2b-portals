import { Box } from '@mui/material';
import { DesignersItaliaFooterProps } from '@react-components/types';
import {
  HashTags,
  MenuPolicies,
  MenuSiteIndex,
  MenuSocial,
} from './DesignersItaliaFooter.helpers';

const DesignersItaliaFooter = ({
  links_SiteIndex,
  links_Policies,
  links_Social,
  hashtags,
  labels,
}: DesignersItaliaFooterProps) => {
  return (
    <Box
      component='footer'
      sx={{ backgroundColor: '#004D99', color: '#FFFFFF' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          width: '100%',
          p: { xs: '40px 24px', md: '72px' },
          gap: { xs: 0, md: '24px' },
        }}
      >
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <MenuSiteIndex links_SiteIndex={links_SiteIndex} />
        </Box>
        <Box sx={{ width: { xs: '100%', md: '25%' } }}>
          <HashTags labels={labels} hashtags={hashtags} />
        </Box>
        <Box sx={{ width: { xs: '100%', md: '25%' } }}>
          <MenuSocial links_Social={links_Social} />
        </Box>
      </Box>
      <MenuPolicies links_Policies={links_Policies} />
    </Box>
  );
};

export default DesignersItaliaFooter;
