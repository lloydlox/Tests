import Footer from '@/components/layout/footer';
import HeaderTwo from '@/components/layout/header-2';
import AboutTwo from '@/components/section/about-2';
import AchievementTwo from '@/components/section/achievement-2';
import BannerTwo from '@/components/section/banner-2';
import Blog from '@/components/section/blog';
import CategoryTwo from '@/components/section/category-2';
import CourseTwo from '@/components/section/course-2';
import Instructor from '@/components/section/instructor';
import Skill from '@/components/section/skill';
import Student from '@/components/section/student';

const HomeTwo = () => {
  return (
    <>
      <HeaderTwo />
      <BannerTwo />
      <AboutTwo />
      <CourseTwo />
      <CategoryTwo />
      <Student />
      <Instructor />
      <Skill />
      <AchievementTwo />
      <Blog />
      <Footer />
    </>
  );
};

export default HomeTwo;
