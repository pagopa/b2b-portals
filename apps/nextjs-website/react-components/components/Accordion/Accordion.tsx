import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { AccordionItem } from './AccordionItem';
import { Title, Subtitle } from '../common/Common';
import { AccordionProps } from '../../types/Accordion/Accordion.types';
import {
  SendBackgroundColorAlternativeGrey,
  IoBackgroundColorAlternativeGrey,
  TextColor,
} from '../common/Common.helpers';

const Accordion = (props: AccordionProps) => {
  const {
    title,
    subtitle,
    description,
    trackItemOpen,
    accordionItems,
    theme,
    themeVariant,
    layout,
    textAlignment,
    sectionID,
  } = props;

  const textColor = TextColor(theme);

  const backgroundColor =
    themeVariant === 'SEND'
      ? SendBackgroundColorAlternativeGrey(theme)
      : IoBackgroundColorAlternativeGrey(theme);

  const { palette } = useTheme();

  const linkColor =
    theme === 'dark'
      ? palette.custom.white
      : themeVariant === 'SEND'
      ? palette.primary.main
      : palette.custom.primaryColorDark;

  return (
    <Box
      sx={{ py: { xs: 4, md: 10 } }}
      bgcolor={backgroundColor}
      component='section'
      {...(sectionID && { id: sectionID })}
    >
      <Container>
        <Grid container spacing={4} alignItems='flex-start'>
          <Grid item xs={12} md={layout === 'center' ? 12 : 4}>
            <Stack px={{ xs: 1, md: 0 }} spacing={{ xs: 2, md: 4 }}>
              <Title
                variant='h4'
                textColor={textColor}
                title={title}
                textAlign={layout === 'center' ? textAlignment : 'left'}
              />
              {subtitle && (
                <Subtitle
                  variant='h6'
                  textColor={textColor}
                  subtitle={subtitle}
                  textAlign={layout === 'center' ? textAlignment : 'left'}
                />
              )}
              {description && (
                <Typography
                  component='div'
                  variant='body2'
                  textAlign={layout === 'center' ? textAlignment : 'left'}
                  sx={{
                    fontSize: '18px',
                    '& a': {
                      color: linkColor,
                      textDecoration: 'underline',
                      '&:hover': {
                        color: linkColor,
                      },
                    },
                    '& p': {
                      marginBottom: '0px',
                      color: textColor,
                    },
                  }}
                >
                  {description}
                </Typography>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12} md={layout === 'center' ? 12 : 8}>
            <Stack spacing={2}>
              {accordionItems.map((accordionItem, i) => (
                <AccordionItem
                  key={i}
                  {...accordionItem}
                  trackItemOpen={trackItemOpen}
                  themeVariant={themeVariant}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Accordion;
