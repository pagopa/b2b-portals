import { Typography } from '@mui/material';
import { LastUpdatedProps } from '@react-components/types/LastUpdated/LastUpdated.types';
import ContainerRC from '../common/ContainerRC';

const LastUpdated = ({ lastUpdated, label, sectionID }: LastUpdatedProps) => {
  return (
    <ContainerRC py={{ xs: 6, md: 8 }} {...(sectionID && { sectionID })}>
      <Typography>
        {label}: {lastUpdated}
      </Typography>
    </ContainerRC>
  );
};

export default LastUpdated;
