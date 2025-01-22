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
  PageSwitchContent,
  PageSwitchPage,
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
  pages,
  theme,
  themeVariant,
  title,
  subtitle,
}: PageSwitchProps) => {
  if (pages[0] === undefined) {
    return null;
  }

  const [currentPage, setCurrentPage] = useState<PageSwitchPage>(pages[0]);

  const handleButtonClick = (pageID: number) => {
    const page = pages.find((page) => page.id === pageID);
    if (page !== undefined) {
      setCurrentPage(page);
    }
  };

  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 1024 : false,
  );

  useEffect((): void | VoidFunction => {
    const handleResize = () => {
      setIsMobile(
        typeof window !== 'undefined' ? window.innerWidth <= 1024 : false,
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
            buttons={pages.map((s) => ({
              id: s.id,
              text: s.buttonText,
            }))}
            selectedButton={{
              id: currentPage.id,
              text: currentPage.buttonText,
            }}
            onButtonClick={handleButtonClick}
            theme={theme}
            themeVariant={themeVariant}
          />
        ) : (
          <ButtonGroup
            variant='outlined'
            aria-label='buttonGroup'
            sx={{ margin: '16px auto' }}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => handleButtonClick(page.id)}
                sx={getButtonStyles(
                  theme,
                  themeVariant,
                  page.id,
                  currentPage.id,
                  palette,
                )}
                disableRipple
              >
                {page.buttonText}
              </Button>
            ))}
          </ButtonGroup>
        )}
      </ContainerRC>
      {renderContent(currentPage.sections)}
    </Box>
  );
};

export default PageSwitch;
