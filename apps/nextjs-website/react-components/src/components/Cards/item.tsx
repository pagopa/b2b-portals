import { Card, CardContent, Typography, Stack, Link, Box } from '@mui/material';
import { EIcon } from '../EIcon';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { IItem } from '../../utils/Components.types';
import { RenderGenericBody, RenderGenericTitle } from '../../utils/Components.helpers';

const Item = ({
  title,
  text,
  cardIcon,
  links,
  textAlign,
  label,
  masonry,
}: IItem) => {
  return (
    <Card
      elevation={16}
      sx={{
        display: 'flex',
        minHeight: '100px',
        width: 'auto',
        flex: { md: masonry ? '0 0 auto' : '1 1 0' },
        borderRadius: '16px',
      }}
    >
      <CardContent>
        <Stack px={4} justifyContent="flex-start" alignItems={textAlign}>
          <Box mb={2} color="primary.dark">
            {cardIcon?.icon && <EIcon icon={cardIcon.icon} fontSize="large" />}
          </Box>
          {label && (
            <Typography
              mb={1}
              textTransform="uppercase"
              fontSize="12px"
              fontWeight="600"
              color="text.secondary"
            >
              {label}
            </Typography>
          )}
          <RenderGenericTitle
            variant='h5'
            color={'inherit'}
            title={title}
            marginBottom={1}
          />
          <RenderGenericBody
            variant='body2'
            body={text}
            marginBottom={5}
            textAlign={textAlign}
          />
          {links?.length
            ? links.map((link, index) => (
                <Stack
                  key={index}
                  mt={2}
                  direction="row"
                  alignItems="center"
                  color="primary.main"
                  justifyContent={textAlign}
                >
                  <Link
                    color="primary.main"
                    underline="none"
                    textTransform="capitalize"
                    href={link.href}
                    title={link.title}
                    fontSize={14}
                    fontWeight={400}
                  >
                    {link.text}
                  </Link>
                  <ArrowRightAltIcon sx={{ color: 'inerith', fontSize: 18 }} />
                </Stack>
              ))
            : null}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Item;
