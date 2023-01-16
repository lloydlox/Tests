import FooterFour from '@/components/layout/footer-4';
import HeaderSeven from '@/components/layout/header-7';
import BannerSeven from '@/components/section/banner-7';
import BlogThree from '@/components/section/blog-3';
import CourseFour from '@/components/section/course-4';
import FeatureFour from '@/components/section/feature-4';
import InstructorThree from '@/components/section/instructor-3';
import NewsletterTwo from '@/components/section/newsletter-2';
import Offer from '@/components/section/offer';

const HomeSeven = () => {
  return (
    <>
      <HeaderSeven />
      <BannerSeven />
      <CourseFour />
      <FeatureFour />
      <Offer />
      <InstructorThree />
      <BlogThree />
      <NewsletterTwo />
      <FooterFour />
    </>
  );
};

export default HomeSeven;
