import { PreHeader } from '@react-components/components';
import { PreHeaderProps } from '@react-components/types';
import Icon from '@/components/Icon';
import { CtaButtonProps } from '@react-components/types/common/Common.types';

export interface StorybookPreHeaderProps {
  leftText: string;
  rightText: string;
  showLeftIcon: boolean;
  showRightIcon: boolean;
}

const makeCta = (
  text: string,
  showIcon: boolean
): CtaButtonProps => ({
  text,
  ...(showIcon && { startIcon: Icon('HelpOutlineOutlined') }),
  href: '#',
  variant: 'text',
});

const makePreHeaderProps = ({
  leftText,
  rightText,
  showLeftIcon,
  showRightIcon,
}: StorybookPreHeaderProps): PreHeaderProps => ({
  leftCtas: [makeCta(leftText, showLeftIcon)],
  rightCtas: [makeCta(rightText, showRightIcon)],
});

export const StorybookPreHeader = (props: StorybookPreHeaderProps) => {
  return <PreHeader {...makePreHeaderProps(props)} />;
};
