import React from 'react';
import * as MuiIcons from '@mui/icons-material';
import { Typography, type SvgIconProps } from '@mui/material';
import { isJSX, Generic } from '../../types/common/Common.types';

export interface EIconProps extends Omit<SvgIconProps, 'color'> {
  icon?: keyof typeof MuiIcons | Generic;
  color?: string;
}

export const EIcon = (props: EIconProps) => {
  const IconWrapper = ({ icon, ...rest }: EIconProps) => {
    if (isJSX(icon)) {
      return React.cloneElement(icon, { ...rest, ...icon.props });
    }

    const Icon = icon && MuiIcons[icon];
    return Icon ? <Icon {...rest} color='inherit' /> : null;
  };

  return (
    <Typography color={props?.color ?? 'inherit'}>
      <IconWrapper {...props} />
    </Typography>
  );
};
