import FooterThree from '@/components/layout/footer-3';
import HeaderFive from '@/components/layout/header-5';
import AboutThree from '@/components/section/about-3';
import BannerFive from '@/components/section/banner-5';
import ClientsThree from '@/components/section/clients-3';
import CourseFive from '@/components/section/course-5';
import CourseSix from '@/components/section/course-6';
import FeatureTwo from '@/components/section/feature-2';
import Register from '@/components/section/register';

const HomeFive = () => {
  return (
    <>
      <HeaderFive />
      <BannerFive />
      <AboutThree />
      <CourseFive />
      <Register />
      <FeatureTwo />
      <ClientsThree />
      <CourseSix />
      <FooterThree />
    </>
  );
};

export default HomeFive;
