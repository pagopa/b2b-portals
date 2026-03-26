import {
  Grid,
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
}: FormCategoryProps) => {
  return (
    <>
      <RadioGroup
        value={selectedCategory}
        onChange={handleRadioChange}
        aria-invalid={categoryError ? 'true' : 'false'}
        aria-errormessage={categoryError ? 'category-error-text' : undefined}
        aria-describedby={categoryError ? 'category-error-text' : undefined}
      >
        {categories.map(({ categoryID, label, additionalInfo }) => (
          <Grid
            key={categoryID}
            container
            alignItems='center'
            justifyContent='space-between'
            sx={{
              borderBottom: `1px solid ${borderColor}`,
              zIndex: 3,
              display: 'flex',
              flexWrap: 'nowrap',
            }}
          >
            <Grid item sx={{ textAlign: 'left' }}>
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
            </Grid>

            <Grid item sx={{ textAlign: 'right' }}>
              <FormControlLabel
                id={categoryID}
                value={categoryID}
                control={
                  <Radio
                    sx={{
                      color: textColor,
                      '&.Mui-checked': { color: textColor },
                      '&:hover': { bgcolor: 'transparent' },
                    }}
                    inputProps={{ 'aria-label': label }}
                  />
                }
                label=''
                labelPlacement='end'
                sx={{ ml: 0, pr: 0, mr: 0, py: 1 }}
              />
            </Grid>
          </Grid>
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
