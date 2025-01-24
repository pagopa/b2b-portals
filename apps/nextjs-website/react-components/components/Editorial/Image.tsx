import React from 'react';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { cloneElement } from 'react';
import { EditorialImageProps } from '../../types/Editorial/Editorial.types';

const translateTopRight = 'translate(40px, -30px)';
const scaleAndTranslateBottomLeft = 'translate(-20px, 10px) scale(0.89)';
const dots = 'radial-gradient(circle at 3px 3px, #EEEEEE 3px, transparent 0)';

export const Image = ({
  image,
  mobileImage,
  pattern = 'none',
  breakpoint = 834,
}: EditorialImageProps) => {
  const patterns: { [key: string]: SxProps<Theme> } = {
    dots: {
      backgroundColor: 'transparent',
      backgroundImage: dots,
      backgroundSize: '21px 21px',
      backgroundRepeat: 'repeat',
      transform: scaleAndTranslateBottomLeft,
    },
    solid: {
      backgroundColor: '#C4C4C4',
      transform: scaleAndTranslateBottomLeft,
    },
    none: {},
  };

  const desktopStyle = {
    ...image.props.style,
    objectFit: 'contain',
    objectPosition: 'center',
    height: 'auto',
    width: '100%',
    maxHeight: 490,
    maxWidth: 'auto',
    userSelect: 'none',
    transform: pattern && pattern !== 'none' ? translateTopRight : '',
  };

  const mobileStyle = mobileImage
    ? {
        ...mobileImage.props.style,
        ...desktopStyle,
      }
    : {};

  return (
    <Box
      sx={{
        boxSizing: 'border-box',
        width: '100%',
        height: 'auto',
        ...patterns[pattern],
        '& > img': {
          display: 'block',
          borderRadius: '16px',
        },
        '& > img:last-of-type': {
          display: 'none',
        },
        [`@media (max-width:${breakpoint}px)`]: {
          '& > img:first-of-type': {
            display: 'none',
          },
          '& > img:last-of-type': {
            display: 'block',
          },
        },
      }}
    >
      {cloneElement(image, { style: desktopStyle })}
      {mobileImage && cloneElement(mobileImage, { style: mobileStyle })}
    </Box>
  );
};
