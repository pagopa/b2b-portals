'use client';

import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { DynamicsFormProps } from '@react-components/types/DynamicsForm/DynamicsForm.types';

const DynamicsForm = ({ formId, apiUrl, cachedUrl }: DynamicsFormProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://cxppusa1formui01cdnsa01-endpoint.azureedge.net/eur/FormLoader/FormLoader.bundle.js';
    script.async = true;
    document.documentElement.lang = navigator.language;

    const container = containerRef.current;
    container?.appendChild(script);

    return () => {
      container?.removeChild(script);
    };
  }, []);

  return (
    <Box sx={{ width: '100%', minHeight: '600px' }}>
      <div ref={containerRef} style={{ width: '100%' }}>
        <div
          data-form-id={formId}
          data-form-api-url={apiUrl}
          data-cached-form-url={cachedUrl}
        />
      </div>
    </Box>
  );
};

export default DynamicsForm;
