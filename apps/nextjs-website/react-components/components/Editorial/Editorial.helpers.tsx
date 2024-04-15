import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 1024 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        typeof window !== 'undefined' ? window.innerWidth <= 1024 : false
      );
      return undefined;
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
        return undefined;
      };
    } else {
      return undefined;
    }
  }, []);

  return isMobile;
};

export const Eyelet = (eyeletColor: string, eyelet?: string) => {
  if (!eyelet) {
    return null;
  }

  return (
    <Typography variant='overline' color={eyeletColor}>
      {eyelet}
    </Typography>
  );
};