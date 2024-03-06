import {
  Facebook,
  HelpOutlineOutlined,
  Instagram,
  LinkedIn,
  Twitter,
} from '@mui/icons-material';
import { MediumIcon } from '@pagopa/mui-italia/dist/icons/MediumIcon';

const iconMapping = {
  // Button Icons
  HelpOutlineOutlined: <HelpOutlineOutlined />,

  // Social Icons
  Instagram: <Instagram />,
  LinkedIn: <LinkedIn />,
  Facebook: <Facebook />,
  Twitter: <Twitter />,
  Medium: <MediumIcon />,
};

const Icon = (name: keyof typeof iconMapping): JSX.Element => iconMapping[name];

export default Icon;
