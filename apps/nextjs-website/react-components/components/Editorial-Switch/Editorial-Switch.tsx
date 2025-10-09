import React, { useEffect, useState } from 'react';
import { Box, ButtonGroup, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ContainerRC from '../common/ContainerRC';
import {
  SendBackgroundColor,
  IoBackgroundColor,
} from '../common/Common.helpers';
import {
  ButtonSwitchRowBlock,
  TitleSubtitleBlock,
} from './Editorial-Switch.helpers';
import {
  EditorialSwitchProps,
  EditorialSwitchSection,
} from '../../types/Editorial-Switch/Editorial-Switch.types';
import Editorial from '../Editorial/Editorial';
import { getButtonStyles } from '../common/Common';

const EditorialSwitch = ({
  sections,
  theme,
  themeVariant,
  title,
  subtitle,
}: EditorialSwitchProps) => {
  if (sections[0] === undefined) {
    return null;
  }

  const [currentSection, setCurrentSection] = useState<EditorialSwitchSection>(
    sections[0]
  );

  const handleButtonClick = (sectionID: number) => {
    const section = sections.find((s) => s.id === sectionID);
    if (section !== undefined) {
      setCurrentSection(section);
    }
  };

  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 1024 : false
  );

  useEffect((): void | VoidFunction => {
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
    }
  }, []);

  const { palette } = useTheme();
  const backgroundColor =
    themeVariant === 'SEND'
      ? SendBackgroundColor(theme)
      : IoBackgroundColor(theme);

  return (
    <Box tabIndex={0}>
      <ContainerRC
        sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}
        background={backgroundColor}
      >
        <TitleSubtitleBlock
          title={title}
          {...(subtitle && { subtitle })}
          theme={theme}
          themeVariant={themeVariant}
        />
        {isMobile ? (
          <ButtonSwitchRowBlock
            buttons={sections.map((s) => ({
              id: s.id,
              text: s.buttonText,
            }))}
            selectedButton={{
              id: currentSection.id,
              text: currentSection.buttonText,
            }}
            onButtonClick={handleButtonClick}
            theme={theme}
            themeVariant={themeVariant}
          />
        ) : (
          <ButtonGroup
            variant='outlined'
            aria-label='buttonGroup'
            sx={{ margin: '16px 0' }}
          >
            {sections.map((section) => (
              <Button
                key={section.id}
                onClick={() => handleButtonClick(section.id)}
                sx={getButtonStyles(
                  theme,
                  themeVariant,
                  section.id,
                  currentSection.id,
                  palette
                )}
                disableRipple
              >
                {section.buttonText}
              </Button>
            ))}
          </ButtonGroup>
        )}
      </ContainerRC>
      <Editorial {...currentSection.content} />
    </Box>
  );
};

export default EditorialSwitch;
