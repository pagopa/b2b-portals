'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '@/app/theme';

import Accordion from '@/components/Accordion';
import BannerLink from '@/components/BannerLink';
import Cards from '@/components/Cards';
import DynamicsForm from '@/components/DynamicsForm';
import Editorial from '@/components/Editorial';
import EditorialSwitch from '@/components/EditorialSwitch';
import Feature from '@/components/Feature';
import Footer from '@/components/Footer';
import Form from '@/components/Form';
import FramedVideo from '@/components/FramedVideo';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HeroChips from '@/components/HeroChips';
import HeroCounter from '@/components/HeroCounter';
import HighlightBox from '@/components/HighlightBox';
import HowTo from '@/components/HowTo';
import IFrameSection from '@/components/IFrame';
import MediaResources from '@/components/MediaResources';
import OneTrustSection from '@/components/OneTrust';
import PageSwitch from '@/components/PageSwitch';
import PreFooter from '@/components/PreFooter';
import PreHeader from '@/components/PreHeader';
import PressRelease from '@/components/PressRelease';
import PressReleaseList from '@/components/PressReleaseList';
import RowText from '@/components/RowText';
import ServiceCarousel from '@/components/ServiceCarousel';
import Stats from '@/components/Stats';
import StripeLink from '@/components/StripeLink';
import TextSection from '@/components/TextSection';
import VideoImage from '@/components/VideoImage';

import { accordionMockData } from '@/lib/__mocks__/accordion.mock';
import { bannerLinkMockData } from '@/lib/__mocks__/bannerLink.mock';
import { cardsMockData } from '@/lib/__mocks__/cards.mock';
import { dynamicsFormMockData } from '@/lib/__mocks__/dynamicsForm.mock';
import { editorialMockData } from '@/lib/__mocks__/editorial.mock';
import { editorialSwitchMockData } from '@/lib/__mocks__/editorialSwitch.mock';
import { featureMockData } from '@/lib/__mocks__/feature.mock';
import { footerMockData } from '@/lib/__mocks__/footer.mock';
import { formMockData } from '@/lib/__mocks__/form.mock';
import { framedVideoMockData } from '@/lib/__mocks__/framedVideo.mock';
import { headerMockData } from '@/lib/__mocks__/header.mock';
import { megaHeaderMockData } from '@/lib/__mocks__/megaheader.mock';
import { heroMockData } from '@/lib/__mocks__/hero.mock';
import { heroChipsMockData } from '@/lib/__mocks__/herochips.mock';
import { heroCounterMockData } from '@/lib/__mocks__/herocounter.mock';
import { highlightBoxMockData } from '@/lib/__mocks__/highlightbox.mock';
import { howToMockData } from '@/lib/__mocks__/howto.mock';
import { iframeMockData } from '@/lib/__mocks__/iframe.mock';
import { mediaResourcesMockData } from '@/lib/__mocks__/mediaresources.mock';
import { oneTrustMockData } from '@/lib/__mocks__/oneTrust.mock';
import { pageSwitchMockData } from '@/lib/__mocks__/pageSwitch.mock';
import { preFooterMockData } from '@/lib/__mocks__/preFooter.mock';
import { preHeaderMockData } from '@/lib/__mocks__/preHeader.mock';
import { pressReleaseMockData } from '@/lib/__mocks__/pressRelease.mock';
import { pressReleaseListMockData } from '@/lib/__mocks__/pressReleaseList.mock';
import { rowTextMockData } from '@/lib/__mocks__/rowText.mock';
import { serviceCarouselMockData } from '@/lib/__mocks__/serviceCarousel.mock';
import { statsMockData } from '@/lib/__mocks__/stats.mock';
import { stripeLinkMockData } from '@/lib/__mocks__/stripeLink.mock';
import { textSectionMockData } from '@/lib/__mocks__/textSection.mock';
import { videoImageMockData } from '@/lib/__mocks__/videoImage.mock';

export default function AllComponentsDryPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <Accordion {...accordionMockData} />
        <BannerLink {...bannerLinkMockData} />
        <Cards {...cardsMockData} />
        <DynamicsForm {...dynamicsFormMockData} />
        <Editorial {...editorialMockData} />
        <EditorialSwitch {...editorialSwitchMockData} />
        <Feature {...featureMockData} />
        <Footer
          {...{ ...footerMockData, locales: [...footerMockData.locales] }}
        />
        <Form {...formMockData} />
        <FramedVideo {...framedVideoMockData} />
        <Header {...headerMockData} />
        <Header {...megaHeaderMockData} />
        <Hero {...heroMockData} />
        <HeroChips {...heroChipsMockData} />
        <HeroCounter {...heroCounterMockData} />
        <HighlightBox {...highlightBoxMockData} />
        <HowTo {...howToMockData} />
        <IFrameSection {...iframeMockData} />
        <MediaResources {...mediaResourcesMockData} />
        <OneTrustSection {...oneTrustMockData} />
        <PageSwitch {...pageSwitchMockData} />
        <PreFooter {...preFooterMockData} />
        <PreHeader {...preHeaderMockData} />
        <PressRelease {...pressReleaseMockData} />
        <PressReleaseList {...pressReleaseListMockData} />
        <RowText {...rowTextMockData} />
        <ServiceCarousel {...serviceCarouselMockData} />
        <Stats {...statsMockData} />
        <StripeLink {...stripeLinkMockData} />
        <TextSection {...textSectionMockData} />
        <VideoImage {...videoImageMockData} />
      </>
    </ThemeProvider>
  );
}
