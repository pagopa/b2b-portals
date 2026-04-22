'use client';

import { DynamicsForm as DynamicsFormRC } from '@react-components/components';
import { DynamicsFormSectionProps } from '@/lib/fetch/types/PageSection';
import { Box, useTheme } from '@mui/material';
import { FONT_THEME_BASE, FONT_THEME_WALLET } from '@/app/theme';

const DynamicsForm = (
  props: DynamicsFormSectionProps & { themeVariant: 'SEND' | 'IO' | 'WALLET' },
) => {
  const { palette } = useTheme();
  const { themeVariant } = props;

  const primaryColor = (() => {
    switch (themeVariant) {
      case 'SEND':
        return palette.primary.main;
      case 'IO':
        return palette.custom.blueIO[500];
      case 'WALLET':
        return palette.custom.blueIO[500];
    }
  })();

  const fontFamily =
    themeVariant === 'WALLET' ? FONT_THEME_WALLET : FONT_THEME_BASE;

  return (
    <Box
      sx={{
        '[data-layout="true"]': {
          maxWidth: '100% !important',
          backgroundColor: '#e4eaf2 !important',
          display: 'grid',
          justifyContent: 'center',
        },
        '.columnContainer': {
          paddingLeft: 'unset !important',
          paddingRight: 'unset !important',
        },
        '.textFormFieldBlock label, .dateTimeFormFieldBlock label, .lookupFormFieldBlock label, .twoOptionFormFieldBlock label.block-label, .optionSetFormFieldBlock label.block-label, .multiOptionSetFormFieldBlock label.block-label, div[data-editorblocktype="Captcha"] label[id^="wlspispHipInstructionContainer"], .textFormFieldBlock label *, .dateTimeFormFieldBlock label *, .lookupFormFieldBlock label *, .twoOptionFormFieldBlock label.block-label *, .optionSetFormFieldBlock label.block-label *, .multiOptionSetFormFieldBlock label.block-label *, .consentBlock label p':
          {
            fontFamily,
            fontSize: '18px',
          },
        '.optionSetFormFieldBlock select, .textFormFieldBlock input, .dateTimeFormFieldBlock input, .lookupFormFieldBlock input, .marketingForm textarea, div[data-editorblocktype="Captcha"] input':
          {
            fontFamily,
            borderRadius: '6px',
            fontSize: '18px',
            padding: '16.5px 14px',
            backgroundColor: '#fff',
          },
        '.optionSetFormFieldBlock select, .textFormFieldBlock input, .dateTimeFormFieldBlock input, .lookupFormFieldBlock input, .marketingForm textarea, div[data-editorblocktype="Captcha"] input:focus-visible':
          {
            outlineColor: '#0073e6',
          },
        '.optionSetFormFieldBlock select:-webkit-autofill, .textFormFieldBlock input:-webkit-autofill, .dateTimeFormFieldBlock input:-webkit-autofill, .lookupFormFieldBlock input:-webkit-autofill, .marketingForm textarea:-webkit-autofill, div[data-editorblocktype="Captcha"] input:-webkit-autofill':
          {
            WebkitBoxShadow: '0 0 0px 100px white inset !important',
          },
        '.twoOptionFormFieldBlock div.radiobuttons div input, .twoOptionFormFieldBlock div.twooption_checkbox div input, .optionSetFormFieldBlock div.radiobuttons div input, .multiOptionSetFormFieldBlock fieldset > div > input[type="checkbox"], .eventSession > div > input[type="checkbox"], .eventSession > div > input[type="radio"], .consentBlock div input:focus-visible':
          {
            outlineColor: '#0073e6',
            outlineOffset: '0px',
          },
        '.multiOptionSetFormFieldBlock fieldset > div > label': {
          fontSize: '16px',
        },
        '.twoOptionFormFieldBlock div.radiobuttons, .twoOptionFormFieldBlock div.twooption_checkbox, .optionSetFormFieldBlock div.radiobuttons, .multiOptionSetFormFieldBlock fieldset':
          {
            fontFamily,
          },
        '.twoOptionFormFieldBlock div.twooption_checkbox div label, .twoOptionFormFieldBlock div.twooption_checkbox div label div, .consentBlock div label p':
          {
            fontFamily,
            fontSize: '16px',
          },
        '.marketingForm .primaryButton, .submitButton': {
          backgroundColor: primaryColor,
          fontFamily,
          fontWeight: 600,
          fontSize: '16px',
          padding: '0px 24px',
          lineHeight: '48px',
          borderRadius: '4px',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: primaryColor,
          },
        },
      }}
    >
      <DynamicsFormRC {...props} />
    </Box>
  );
};

export default DynamicsForm;
