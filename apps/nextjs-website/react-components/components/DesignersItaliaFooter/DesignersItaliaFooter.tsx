import { Box } from '@mui/material';
import { DesignersItaliaFooterProps } from '@react-components/types';
import {
  HashTags,
  MenuBottomLinks,
  MenuLinks,
  MenuSocial,
} from './DesignersItaliaFooter.helpers';

const DesignersItaliaFooter = ({
  links,
  bottomLinks,
  socialLinks,
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
          <MenuLinks links={links} />
        </Box>
        <Box sx={{ width: { xs: '100%', md: '25%' } }}>
          <HashTags labels={labels} hashtags={hashtags} />
        </Box>
        <Box sx={{ width: { xs: '100%', md: '25%' } }}>
          <MenuSocial socialLinks={socialLinks} />
        </Box>
      </Box>
      <MenuBottomLinks bottomLinks={bottomLinks} />
    </Box>
  );
};

export default DesignersItaliaFooter;
