import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { ReactElement, cloneElement } from 'react';
import { CommonProps } from '../../types/components';

export interface EditorialImageProps extends CommonProps {
  image: ReactElement;
  pattern?: 'dots' | 'solid' | 'none';
}

const translateTopRight = 'translate(40px, -30px)';
const scaleAndTranslateBottomLeft = 'translate(-20px, 10px) scale(0.89)';
const dots = 'radial-gradient(circle at 3px 3px, #EEEEEE 3px, transparent 0)';

export const Image = ({ image, pattern = 'none' }: EditorialImageProps) => {
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

  return (
    <Box
      sx={{
        boxSizing: 'border-box',
        width: '100%',
        height: 'auto',
        paddingBottom: '40px',
        ...patterns[pattern],
      }}
    >
      {cloneElement(image, {
        style: {
          objectFit: 'cover',
          objectPosition: 'center',
          height: 'auto',
          width: '100%',
          maxHeight: 490,
          maxWidth: 'auto',
          userSelect: 'none',
          transform: pattern && pattern !== 'none' ? translateTopRight : '',
        },
      })}
    </Box>
  );
};
