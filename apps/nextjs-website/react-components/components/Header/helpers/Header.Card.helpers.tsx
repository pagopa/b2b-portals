import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActions, Button, Stack } from '@mui/material';
import { TextAlternativeColor } from '@react-components/components/common/Common.helpers';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';

interface ActionAreaCardProps {
  title: string;
  subtitle: string | JSX.Element;
  icons: string[];
  buttonText: string;
  href: string;
  theme: 'dark' | 'light';
}

export default function ActionAreaCard({
  title,
  subtitle,
  icons,
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
      <div>
        <CardContent sx={{ padding: '1.5rem', paddingBottom: '0.5rem' }}>
          <Stack flexDirection='row' gap={2} marginBottom={2}>
            {icons.map((iconURL) => (
              <Image src={iconURL} alt='' height={32} width={32} />
            ))}
          </Stack>

          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            <Stack>
              <Typography gutterBottom variant='h5' component='div'>
                {title}
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                component='div'
              >
                {subtitle}
              </Typography>
            </Stack>

            <Button
              size='small'
              href={href}
              endIcon={<ArrowForwardIcon />}
              sx={{
                color: textColorAlternative,
                fontSize: '16px',
                padding: '0 10px',
                minWidth: 'auto',
              }}
            >
              {buttonText}
            </Button>
          </Stack>
        </CardContent>
      </div>

      <CardActions sx={{ display: 'none' }} />
    </Card>
  );
}
