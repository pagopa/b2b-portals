import React, { useEffect, useState } from 'react';
import { Box, ButtonGroup, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ContainerRC from '../common/ContainerRC';
import { BackgroundColor } from '../common/Common.helpers';
import {
  ButtonSwitchRowBlock,
  TitleBodyBlock,
} from './Editorial-Switch.helpers';
import {
  EditorialSwitchProps,
  EditorialSwitchSection,
} from '../../types/Editorial-Switch/Editorial-Switch.types';
import Editorial from '../Editorial/Editorial';

const EditorialSwitch = ({
  sections,
  theme,
  title,
  body,
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

  const backgroundColor = BackgroundColor(theme);

  return (
    <Box>
      <ContainerRC
        sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}
        background={backgroundColor}
      >
        <TitleBodyBlock
          title={title}
          {...(body && { body })}
          theme={theme}
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
          />
        ) : (
          <ButtonGroup
            variant="outlined"
            aria-label="buttonGroup"
            sx={{ margin: '16px 0' }}
          >
            {sections.map((section) => (
              <Button
                key={section.id}
                onClick={() => handleButtonClick(section.id)}
                sx={{
                  backgroundColor:
                    section.id === currentSection.id
                      ? theme === 'light'
                        ? palette.custom
                            .editorialSwitchButtonsBackgroundLightBlue
                        : palette.background.paper
                      : 'transparent',
                  color:
                    section.id === currentSection.id
                      ? theme === 'light'
                        ? palette.primary.main
                        : palette.custom.primaryColorDark
                      : theme === 'light'
                        ? palette.primary.main
                        : palette.primary.contrastText,
                  borderColor:
                    theme === 'light'
                      ? palette.primary.main
                      : palette.background.paper,
                  '&:hover': {
                    backgroundColor:
                      theme === 'light'
                        ? palette.custom
                            .editorialSwitchButtonsBackgroundLightBlue
                        : palette.background.paper,
                    color:
                      theme === 'light'
                        ? palette.primary.main
                        : palette.custom.primaryColorDark,
                    borderColor:
                      theme === 'light'
                        ? palette.primary.main
                        : palette.background.paper,
                  },
                }}
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
