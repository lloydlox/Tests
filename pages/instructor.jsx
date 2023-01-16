/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import PageHeader from '@/components/layout/pageheader';
import Achievement from '@/components/section/achievement';
import Student from '@/components/section/student';

const subTitle = 'Teach on URevise';
const title = 'Discover Your Potential. Make A Global Impact.';
const btnText = 'Browse All Categories';

let categoryItemList = [
  {
    imgUrl: 'assets/images/category/icon/15.jpg',
    imgAlt: 'category',
    title: 'Build Your Brand',
    desc: 'Like graphic design, business anaytics coding and much more',
  },
  {
    imgUrl: 'assets/images/category/icon/16.jpg',
    imgAlt: 'category',
    title: 'Plan Your Course',
    desc: 'Like graphic design, business anaytics coding and much more',
  },
  {
    imgUrl: 'assets/images/category/icon/17.jpg',
    imgAlt: 'category',
    title: 'Help Shape Future',
    desc: 'Like graphic design, business anaytics coding and much more',
  },
];

const InstructorPage = () => {
  return (
    <>
      <Header />
      <PageHeader title={'All Best Instructors'} curPage={'instructor'} />
      <div className='category-section padding-tb section-bg style-3'>
        <div className='container'>
          <div className='section-header text-center'>
            <span className='subtitle'>{subTitle}</span>
            <h2 className='title'>{title}</h2>
          </div>
          <div className='section-wrapper'>
            <div className='row g-4 justify-content-center row-cols-lg-3 row-cols-sm-2 row-cols-1'>
              {categoryItemList.map((val, i) => (
                <div className='col' key={i}>
                  <div className='category-item text-center'>
                    <div className='category-inner'>
                      <div className='category-thumb'>
                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                      </div>
                      <div className='category-content'>
                        <Link href='/signup'>
                          <h4>{val.title}</h4>
                        </Link>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='text-center mt-5'>
              <Link href='/course' className='lab-btn'>
                <span>{btnText}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Student />
      <Achievement />
      <Footer />
    </>
  );
};

export default InstructorPage;
