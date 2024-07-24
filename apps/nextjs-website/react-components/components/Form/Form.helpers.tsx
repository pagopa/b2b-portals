import {
  Checkbox,
  Divider,
  Grid,
  FormControlLabel,
  Radio,
  Typography,
  RadioGroup,
} from '@mui/material';
import {
  FormCategoryProps,
  OptionRowProps,
} from '@react-components/types/Form/Form.types';

export const OptionRow: React.FC<OptionRowProps> = ({
  label,
  checked,
  onChange,
  name,
  additionalText,
  color,
}) => (
  <Grid container alignItems='center' justifyContent='space-between'>
    <Grid item xs={additionalText ? 10 : true}>
      <Typography variant='body1' fontWeight='bold' sx={{ color }}>
        {label}
      </Typography>
      {additionalText && (
        <Typography variant='body2' sx={{ color }}>
          {additionalText}
        </Typography>
      )}
    </Grid>
    <Grid
      item
      xs={additionalText ? 2 : false}
      sx={{ display: 'flex', justifyContent: 'flex-end' }}
    >
      <Checkbox
        checked={checked}
        onChange={onChange}
        name={name}
        sx={{
          color: color,
          '&.Mui-checked': {
            color: color,
          },
        }}
      />
    </Grid>
    <Divider sx={{ width: '100%' }} />
  </Grid>
);

export const FormCategories = ({
  formCategories,
  textColor,
  borderColor,
  selectedOption,
  handleRadioChange,
}: FormCategoryProps & {
  selectedOption: string;
  handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <RadioGroup value={selectedOption} onChange={handleRadioChange}>
      {formCategories.map(({ key, label, additionalLabel }) => (
        <Grid
          key={key}
          container
          alignItems='center'
          justifyContent='space-between'
          sx={{ borderBottom: `1px solid ${borderColor}`, zIndex: 3,  }}
        >
          <Grid item sx={{ textAlign: 'left' }}>
            <Typography
              variant='body1'
              fontWeight='bold'
              sx={{ color: textColor }}
            >
              {label}
            </Typography>
            {additionalLabel && (
              <Typography variant='body2' sx={{ color: textColor }}>
                {additionalLabel}
              </Typography>
            )}
          </Grid>
          <Grid item sx={{ textAlign: 'right' }}>
            <FormControlLabel
              value={key} // TODO: This value should not be auto-generated, it should probably be inserted by the user depending on what the newsletter service requires
              control={
                <Radio
                  sx={{
                    color: textColor,
                    '&.Mui-checked': { color: textColor },
                    '&:hover': { bgcolor: 'transparent' },
                  }}
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
  );
};
