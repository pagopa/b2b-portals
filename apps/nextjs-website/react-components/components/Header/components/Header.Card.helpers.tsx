import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Button } from '@mui/material';
import { TextColor } from '@react-components/components/common/Common.helpers';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { EIcon, EIconProps } from '@react-components/components/common/EIcon';

interface ActionAreaCardProps {
  title: string;
  subtitle: string;
  stackIcon: EIconProps;
  buttonText: string;
  href: string;
  theme: 'dark' | 'light';
}

export default function ActionAreaCard({
  title,
  subtitle,
  stackIcon,
  buttonText,
  href,
  theme,
}: ActionAreaCardProps) {
  const handleButtonClick = () => {
    window.location.href = href;
  };
  const textColor = TextColor(theme);

  return (
    <Card
      sx={{ maxWidth: 345, border: '1px solid #000', borderRadius: '15px' }}
    >
      <CardActionArea>
        <EIcon {...stackIcon} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size='small'
          onClick={handleButtonClick}
          endIcon={<ArrowForwardIcon />}
          sx={{
            '& .MuiButton-label': { color: textColor },
            padding: 0,
          }}
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
}
