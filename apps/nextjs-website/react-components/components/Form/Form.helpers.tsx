import {
  Box,
  FormControlLabel,
  Radio,
  Typography,
  RadioGroup,
} from '@mui/material';
import { FormCategoryProps } from '@react-components/types/Form/Form.types';

export const FormCategories = ({
  categories,
  textColor,
  borderColor,
  selectedCategory,
  handleRadioChange,
  categoryError,
  radioGroupTitleId,
}: FormCategoryProps) => {
  return (
    <>
      <RadioGroup
        value={selectedCategory}
        onChange={handleRadioChange}
        aria-labelledby={radioGroupTitleId}
        aria-invalid={categoryError ? 'true' : 'false'}
        aria-errormessage={categoryError ? 'category-error-text' : undefined}
        aria-describedby={categoryError ? 'category-error-text' : undefined}
      >
        {categories.map(({ categoryID, label, additionalInfo }) => (
          <FormControlLabel
            key={categoryID}
            value={categoryID}
            htmlFor={`radio-${categoryID}`}
            labelPlacement='start'
            label={
              <Box sx={{ textAlign: 'left' }}>
                <Typography
                  variant='body1'
                  fontWeight='bold'
                  sx={{ color: textColor }}
                >
                  {label}
                </Typography>
                {additionalInfo && (
                  <Typography variant='body2' sx={{ color: textColor }}>
                    {additionalInfo}
                  </Typography>
                )}
              </Box>
            }
            control={
              <Radio
                id={`radio-${categoryID}`}
                sx={{
                  color: textColor,
                  '&.Mui-checked': { color: textColor },
                  '&:hover': { bgcolor: 'transparent' },
                }}
              />
            }
            sx={{
              width: '100%',
              justifyContent: 'space-between',
              borderBottom: `1px solid ${borderColor}`,
              zIndex: 3,
              ml: 0,
              pr: 0,
              mr: 0,
              py: 1,
            }}
          />
        ))}
      </RadioGroup>

      {categoryError && (
        <Typography
          id='category-error-text'
          variant='caption'
          sx={{
            color: 'error.main',
            display: 'block',
            mt: 1,
            textAlign: 'left',
          }}
        >
          {categoryError}
        </Typography>
      )}
    </>
  );
};
