import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import About from '@/components/section/about';
import Banner from '@/components/section/banner';
import Course from '@/components/section/course';
import Student from '@/components/section/student';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Course />
      <About />
      <Student />
      <Footer />
    </>
  );
};

export default Home;
