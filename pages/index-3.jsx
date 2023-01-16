import FooterTwo from '@/components/layout/footer-2';
import HeaderThree from '@/components/layout/header-3';
import AchievementThree from '@/components/section/achievement-3';
import BannerThree from '@/components/section/banner-3';
import BlogTwo from '@/components/section/blog-2';
import Clients from '@/components/section/clients';
import CourseThree from '@/components/section/course-3';
import Event from '@/components/section/event';
import Feature from '@/components/section/feature';
import NewsLetter from '@/components/section/newsletter';
import Workshop from '@/components/section/workshop';
import WorkshopTwo from '@/components/section/workshop-2';

const HomeThree = () => {
  return (
    <>
      <HeaderThree />
      <BannerThree />
      <Feature />
      <CourseThree />
      <AchievementThree />
      <Event />
      <Workshop />
      <WorkshopTwo />
      <BlogTwo />
      <Clients />
      <NewsLetter />
      <FooterTwo />
    </>
  );
};

export default HomeThree;
