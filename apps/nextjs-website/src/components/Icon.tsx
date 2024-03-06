import {
  Facebook,
  HelpOutlineOutlined,
  Instagram,
  LinkedIn,
  Twitter,
} from '@mui/icons-material';
import Medium from './icons/Medium';

const iconMapping = {
  // Button Icons
  HelpOutlineOutlined: <HelpOutlineOutlined />,

  // Social Icons
  Instagram: <Instagram />,
  LinkedIn: <LinkedIn />,
  Facebook: <Facebook />,
  Twitter: <Twitter />,
  Medium: <Medium />,
};

const Icon = (name: keyof typeof iconMapping): JSX.Element => iconMapping[name];

export default Icon;
