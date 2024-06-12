import React, { useEffect, useState } from 'react';
import { Box, Grid, Stack } from '@mui/material';
import { Ctas as EditorialCtas } from '../Editorial/Ctas';
import { Image as EditorialImage } from '../Editorial/Image';
import { Content as EditorialContent } from '../Editorial/Content';
import ContainerRC from '../common/ContainerRC';
import { BackgroundColor } from '../common/Common.helpers';
import {
  ButtonSwitchRowBlock,
  TitleSubtitleBlock,
} from './Editorial-Switch.helpers';
import { EditorialSwitchProps, Section } from '../../types/Editorial-Switch/Editorial-Switch.types';

const styles = {
  half: {
    display: 'grid',
    justifyContent: 'center',
  },
  offset: {
    marginLeft: '8.33%',
    paddingRight: '4.15%',
  },
};

const columns: { [key in 'wide' | 'standard' | 'center']: number } = {
  wide: 6,
  standard: 5,
  center: 4,
};

const EditorialSwitch = ({
  sections,
  theme,
  reversed = false,
  width = 'standard',
  toptitle,
  topsubtitle,
  pattern = 'none',
}: EditorialSwitchProps) => {
  if (!sections || sections.length === 0) {
    return <div>No sections available</div>;
  }

  const initialSection = sections[0] as Section;
  const [selectedSection, setSelectedSection] = useState<Section>(initialSection);

  const handleButtonClick = (button: { id: string; text: string }) => {
    const section = sections.find((s) => s.button.id === button.id);
    if (section) {
      setSelectedSection(section);
    }
  };

  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 1024 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        typeof window !== 'undefined' ? window.innerWidth <= 1024 : false
      );
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    } else {
      return () => {};
    }
  }, []);

  const backgroundColor = BackgroundColor(theme);

  const containerDirection = isMobile
    ? reversed
      ? 'column-reverse'
      : 'column'
    : reversed
    ? 'row-reverse'
    : 'row';

  const gridItemStyles =
    width === 'standard' ? { ...styles.half, ...styles.offset } : styles.half;

  return (
    <Box>
      <ContainerRC
        sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}
        background={backgroundColor}
      >
        <TitleSubtitleBlock
          toptitle={toptitle}
          topsubtitle={topsubtitle || ''}
          theme={theme}
        />
        <ButtonSwitchRowBlock
          buttons={sections.map((s) => s.button)}
          selectedButton={selectedSection.button}
          onButtonClick={handleButtonClick}
          theme={theme}
        />
      </ContainerRC>
      {selectedSection && (
        <ContainerRC
          alignItems="center"
          background={backgroundColor}
          direction={containerDirection}
          py={8}
          spacing={2}
        >
          <Grid item md={columns[width]} sx={gridItemStyles}>
            <Stack gap={4}>
              <EditorialContent
                eyelet={selectedSection.content.eyelet}
                title={selectedSection.content.title || ''}
                body={selectedSection.content.body || ''}
                theme={theme}
              />
              <EditorialCtas
                theme={theme}
                ctaButtons={selectedSection.content.ctaButtons || []}
              />
            </Stack>
          </Grid>
          <Grid item md={columns[width]}>
            <EditorialImage
              pattern={pattern}
              image={
                <img
                  src={selectedSection.content.image.src}
                  alt={selectedSection.content.image.alt}
                />
              }
              theme={theme}
            />
          </Grid>
        </ContainerRC>
      )}
    </Box>
  );
};

export default EditorialSwitch;