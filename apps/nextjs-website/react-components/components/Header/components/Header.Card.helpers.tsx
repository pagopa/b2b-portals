import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Button, Box } from '@mui/material';
import { TextAlternativeColor } from '@react-components/components/common/Common.helpers';
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
  const textColorAlternative = TextAlternativeColor(theme);

  return (
    <Card
      sx={{
        width: '100%',
        border: '1px solid rgb(227, 231, 235)',
        borderRadius: '15px',
      }}
    >
      <CardActionArea>
        <CardContent
          sx={{
            padding: '1.5rem',
            paddingBottom: '0.5rem',
          }}
        >
          <Box
            mx='auto'
            sx={{
              svg: {
                height: '2rem',
                width: '2rem',
              },
            }}
            color={textColorAlternative}
          >
            <EIcon {...stackIcon} />
          </Box>
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
          href={href}
          endIcon={<ArrowForwardIcon />}
          sx={{
            '& .MuiButtonBase-root': { color: textColorAlternative },
            '& .MuiSvgIcon-root': { fontSize: '20px' },
            color: textColorAlternative,
            fontSize: '16px',
            padding: 0,
          }}
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
}
