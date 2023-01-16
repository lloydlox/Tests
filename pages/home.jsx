import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import About from '@/components/section/about';
import Achievement from '@/components/section/achievement';
import Banner from '@/components/section/banner';
import Blog from '@/components/section/blog';
import Category from '@/components/section/category';
import Course from '@/components/section/course';
import Instructor from '@/components/section/instructor';
import Sponsor from '@/components/section/sponsor';
import Student from '@/components/section/student';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Sponsor />
      <Category />
      <Course />
      <About />
      <Instructor />
      <Student />
      <Blog />
      <Achievement />
      <Footer />
    </>
  );
};

export default Home;
