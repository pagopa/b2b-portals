'use client';

import { Box } from '@mui/material';
import Script from 'next/script';
import { DynamicsFormProps } from '@react-components/types/DynamicsForm/DynamicsForm.types';

const DynamicsForm = ({ formId, apiUrl, cachedUrl }: DynamicsFormProps) => {
  return (
    <Box sx={{ width: '100%', minHeight: '600px' }}>
      <div
        id='dynamics-form-container'
        data-form-id={formId}
        data-form-api-url={apiUrl}
        data-cached-form-url={cachedUrl}
      />

      <Script src='https://cxppusa1formui01cdnsa01-endpoint.azureedge.net/eur/FormLoader/FormLoader.bundle.js' />
    </Box>
  );
};

export default DynamicsForm;
