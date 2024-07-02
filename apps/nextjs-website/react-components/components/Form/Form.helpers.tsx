import { Checkbox, Divider, Grid, Typography } from "@mui/material";

interface OptionRowProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  additionalText?: string; // Making additionalText optional
  color: string;
}

export const OptionRow: React.FC<OptionRowProps> = ({ label, checked, onChange, name, additionalText, color }) => (
  <Grid container alignItems='center' justifyContent='space-between'>
    <Grid item xs={additionalText ? 10 : true}>
      <Typography variant='body1' fontWeight='bold' sx={{ color }}>
        {label}
      </Typography>
      {additionalText && <Typography variant='body2' sx={{ color }}>{additionalText}</Typography>}
    </Grid>
    <Grid item xs={additionalText ? 2 : false} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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