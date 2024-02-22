import {
  AccountBalanceWalletOutlined,
  AutoFixHighOutlined,
  CachedRounded,
  CheckCircleOutlined,
  CloudOutlined,
  EnergySavingsLeafOutlined,
  Facebook,
  ForwardToInboxOutlined,
  GradingOutlined,
  GroupAddOutlined,
  HelpOutlineOutlined,
  HourglassEmptyRounded,
  HubOutlined,
  Instagram,
  LinkedIn,
  MarkEmailReadOutlined,
  MarkunreadMailboxOutlined,
  NotificationsActiveOutlined,
  SavingsOutlined,
  Twitter,
  UploadFileOutlined,
} from '@mui/icons-material';
import { AllowedMUIIcon } from '@/lib/fetch/types/mui/AllowedIcon';

// Return requested MUI Icon
// This solution was preferred over the previous usage of <Icon>
// With this solution, we can avoid importing the Material Icons font

const iconMapping = {
  // Button Icons
  HelpOutlineOutlined: <HelpOutlineOutlined />,

  // Feature Item Icons
  HubOutlined: <HubOutlined />,
  AutoFixHighOutlined: <AutoFixHighOutlined />,
  MarkunreadMailboxOutlined: <MarkunreadMailboxOutlined />,
  CheckCircleOutlined: <CheckCircleOutlined />,
  SavingsOutlined: <SavingsOutlined />,
  HourglassEmptyRounded: <HourglassEmptyRounded />,
  EnergySavingsLeafOutlined: <EnergySavingsLeafOutlined />,
  CloudOutlined: <CloudOutlined />,

  // HowTo Step Icons
  UploadFileOutlined: <UploadFileOutlined />,
  CachedRounded: <CachedRounded />,
  ForwardToInboxOutlined: <ForwardToInboxOutlined />,
  MarkEmailReadOutlined: <MarkEmailReadOutlined />,
  NotificationsActiveOutlined: <NotificationsActiveOutlined />,
  GradingOutlined: <GradingOutlined />,
  AccountBalanceWalletOutlined: <AccountBalanceWalletOutlined />,
  GroupAddOutlined: <GroupAddOutlined />,

  // Social Icons
  Instagram: <Instagram />,
  LinkedIn: <LinkedIn />,
  Facebook: <Facebook />,
  Twitter: <Twitter />,
};

const MUIIcon = (name: AllowedMUIIcon): JSX.Element => iconMapping[name];

export default MUIIcon;
