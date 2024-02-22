import { HelpOutlineOutlined } from '@mui/icons-material';
import { AllowedMUIIcon } from '@/lib/fetch/types/mui/AllowedIcon';

// Return requested MUI Icon
// This solution was preferred over the previous usage of <Icon>
// With this solution, we can avoid importing the Material Icons font

const iconMapping = {
  // Button Icons
  HelpOutlineOutlined: <HelpOutlineOutlined />,
};

const MUIIcon = (name: AllowedMUIIcon): JSX.Element => iconMapping[name];

export default MUIIcon;
