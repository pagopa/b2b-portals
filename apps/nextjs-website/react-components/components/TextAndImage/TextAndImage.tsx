import { Link, Stack, Typography } from '@mui/material';
import { TextAndImageProps } from '../../types';

const TextAndImage = ({ sectionID, body, image }: TextAndImageProps) => (
  <Stack
    {...(sectionID && { id: sectionID })}
    p={4}
    gap={2.5}
    alignItems='center'
    tabIndex={0}
  >
    <Typography variant='body2' textAlign='center' maxWidth={420}>
      {body}
    </Typography>

    <Link href={image.href} title={image.title} target='_blank'>
      <img src={image.src} width='280px' height='auto' />
    </Link>
  </Stack>
);

export default TextAndImage;
