'use client';
import { Box } from '@mui/material';
import Script from 'next/script';
import { DynamicsFormProps } from '@react-components/types/DynamicsForm/DynamicsForm.types';

const DynamicsForm = ({ formID, orgID, scriptEndpoint }: DynamicsFormProps) => (
  <Box sx={{ width: '100%', minHeight: '600px' }}>
    <div
      id='dynamics-form-container'
      data-form-id={formID}
      data-form-api-url={`https://public-eur.mkt.dynamics.com/api/v1.0/orgs/${orgID}/landingpageforms`}
      data-cached-form-url={`https://assets-eur.mkt.dynamics.com/${orgID}/digitalassets/forms/${formID}`}
    />

    <Script src={`https://${scriptEndpoint}-endpoint.azureedge.net/eur/FormLoader/FormLoader.bundle.js`} />
  </Box>
);

export default DynamicsForm;
