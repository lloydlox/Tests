import FooterThree from '@/components/layout/footer-3';
import HeaderFour from '@/components/layout/header-4';
import AppSection from '@/components/section/appsection';
import BannerFour from '@/components/section/banner-4';
import CategoryThree from '@/components/section/category-3';
import ClientsTwo from '@/components/section/clients-2';
import CourseFour from '@/components/section/course-4';
import InstructorTwo from '@/components/section/instructor-2';
import Register from '@/components/section/register';
import Sponsor from '@/components/section/sponsor';

const HomeFour = () => {
  return (
    <>
      <HeaderFour />
      <BannerFour />
      <CategoryThree />
      <CourseFour />
      <Register />
      <ClientsTwo />
      <InstructorTwo />
      <AppSection />
      <Sponsor />
      <FooterThree />
    </>
  );
};

export default HomeFour;
