import { Getters } from '../types';

export const mockPreHeaderProps: Getters['getPreHeaderProps'] = async () => ({
  include: [],
  leftCtas: [
    {
      href: 'mock',
      icon: null,
      size: 'medium',
      text: 'mock',
    },
  ],
  rightCtas: [
    {
      href: 'mock',
      icon: 'HelpOutlineOutlined',
      size: 'medium',
      text: 'mock',
    },
  ],
});
