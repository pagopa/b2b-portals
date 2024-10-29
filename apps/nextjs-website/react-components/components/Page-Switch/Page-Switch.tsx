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
} from './Page-Switch.helpers';
import {
  PageSwitchProps,
  PageSwitchSection,
  PageSwitchContent,
} from '../../types/Page-Switch/Page-Switch.types';
import Editorial from '../Editorial/Editorial';
import Cards from '../Cards/Cards';
import BannerLink from '../BannerLink/BannerLink';
import { getButtonStyles } from '../common/Common';

const renderContent = (contents: PageSwitchContent[]) => {
  return contents.map((content, index) => {
    switch (content.type) {
      case 'Editorial':
        return <Editorial key={index} {...content.props} />;
      case 'Cards':
        return <Cards key={index} {...content.props} />;
      case 'BannerLink':
        return <BannerLink key={index} {...content.props} />;
      default:
        return null;
    }
  });
};

const PageSwitch = ({
  sections,
  theme,
  themeVariant = 'SEND',
  title,
  subtitle,
}: PageSwitchProps) => {
  if (sections[0] === undefined) {
    return null;
  }

  const [currentSection, setCurrentSection] = useState<PageSwitchSection>(
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
    <Box>
      <ContainerRC
        sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}
        background={backgroundColor}
      >
        <TitleSubtitleBlock
          title={title}
          themeVariant={themeVariant}
          {...(subtitle && { subtitle })}
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
      {renderContent(currentSection.contents)}
    </Box>
  );
};

export default PageSwitch;
