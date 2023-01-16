import FooterThree from '@/components/layout/footer-3';
import HeaderSix from '@/components/layout/header-6';
import BannerSix from '@/components/section/banner-6';
import Choose from '@/components/section/choose';
import ClientsThree from '@/components/section/clients-3';
import ContactInfo from '@/components/section/contact-info';
import EventTwo from '@/components/section/event-2';
import FeatureThree from '@/components/section/feature-3';
import Video from '@/components/section/video';

const HomeSix = () => {
  return (
    <>
      <HeaderSix />
      <BannerSix />
      <FeatureThree />
      <Choose />
      <EventTwo />
      <Video />
      <ClientsThree />
      <ContactInfo />
      <FooterThree />
    </>
  );
};

export default HomeSix;
