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
import { TextColor } from '../common/Common.helpers';
import {
  resolveByThemeVariant,
  variantContentLinkColorMap,
  variantSectionBackgroundAlternativeGreyMap,
} from '../../theme';

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
  const { palette } = useTheme();
  const ctx = { palette, theme };

  const backgroundColor = resolveByThemeVariant(
    variantSectionBackgroundAlternativeGreyMap,
    themeVariant,
    ctx,
  );

  const linkColor = resolveByThemeVariant(
    variantContentLinkColorMap,
    themeVariant,
    ctx,
  );

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
                component='h2'
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
                  theme={theme}
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
