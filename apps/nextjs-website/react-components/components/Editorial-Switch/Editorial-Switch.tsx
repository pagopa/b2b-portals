import { Box, Grid, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Ctas as EditorialCtas } from '../Editorial/Ctas';
import { Image as EditorialImage } from '../Editorial/Image';
import { Content as EditorialContent } from '../Editorial/Content';
import {
  ContentItem,
  EditorialSwitchProps,
} from '../../types/Editorial-Switch/Editorial-Switch.types';
import ContainerRC from '../common/ContainerRC';
import { BackgroundColor } from '../common/Common.helpers';
import {
  ButtonSwitchRowBlock,
  TitleSubtitleBlock,
} from './Editorial-Switch.helpers';

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

const EditorialSwitch = (props: EditorialSwitchProps) => {
  const {
    buttons,
    content,
    theme,
    reversed = false,
    width = 'standard',
    toptitle,
    topsubtitle,
    image,
    eyelet,
    title,
    body,
    ctaButtons,
    pattern = 'none',
  } = props;
  const [selectedButton, setSelectedButton] = useState(buttons[0]);
  const [currentContent, setCurrentContent] = useState<ContentItem | undefined>(
    content[0]
  );

  const handleButtonClick = (button: string) => {
    const buttonIndex = buttons.indexOf(button);
    if (buttonIndex !== -1) {
      setSelectedButton(button);
      setCurrentContent(content[buttonIndex]);
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
      // Return a no-op function when window is not defined
      return () => {};
    }
  }, []);

  const backgroundColor = BackgroundColor(theme);

  const columns = {
    wide: 6,
    standard: 5,
    center: 4,
  };

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
        {selectedButton && theme && (
          <ButtonSwitchRowBlock
            buttons={buttons}
            selectedButton={selectedButton}
            onButtonClick={handleButtonClick}
            theme={theme}
          />
        )}
      </ContainerRC>
      <ContainerRC
        alignItems='center'
        background={backgroundColor}
        direction={containerDirection}
        py={8}
        spacing={2}
      >
        <Grid item md={columns[width]} sx={gridItemStyles}>
          <Stack gap={4}>
            <EditorialContent
              {...currentContent}
              theme={theme}
              title={title}
              body={body}
              {...(eyelet && { eyelet })}
            />
            <EditorialCtas
              theme={theme}
              {...(ctaButtons ? { ctaButtons } : {})}
              {...(currentContent
                ? {
                    ...currentContent,
                    ctaButtons: currentContent.ctaButtons || [],
                  }
                : {})}
            />
          </Stack>
        </Grid>
        <Grid item md={columns[width]}>
          <EditorialImage {...currentContent} {...{ pattern, image, theme }} />
        </Grid>
      </ContainerRC>
    </Box>
  );
};

export default EditorialSwitch;
