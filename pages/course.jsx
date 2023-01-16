/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import PageHeader from '@/components/layout/pageheader';
import GroupSelect from '@/components/sidebar/group-select';
import Pagination from '@/components/sidebar/pagination';
import Rating from '@/components/sidebar/rating';
import SkillSelect from '@/components/sidebar/skill-select';

const courseList = [
  {
    imgUrl: 'assets/images/course/01.jpg',
    imgAlt: 'course Musa Mahlangove',
    price: '$30',
    cate: 'Chemistry',
    reviewCount: '3 reviews',
    title: '2021 - Chemistry Paper 1',
    questionCount: '18 Questions',
    schedule: 'Online Class',
    authorImgUrl: 'assets/images/course/author/01.jpg',
    authorImgAlt: 'course author Musa Mahlangove',
    authorName: 'Musa Mahlangove',
    btnText: 'Read More',
  },
  {
    imgUrl: 'assets/images/course/02.jpg',
    imgAlt: 'course Musa Mahlangove',
    price: '$30',
    cate: 'Chemistry',
    reviewCount: '3 reviews',
    title: 'Certified Graphic Design with Free Project Course',
    questionCount: '18 Questions',
    schedule: 'Online Class',
    authorImgUrl: 'assets/images/course/author/02.jpg',
    authorImgAlt: 'course author Musa Mahlangove',
    authorName: 'Lora Smith',
    btnText: 'Read More',
  },
  {
    imgUrl: 'assets/images/course/03.jpg',
    imgAlt: 'course Musa Mahlangove',
    price: '$30',
    cate: 'Chemistry',
    reviewCount: '3 reviews',
    title: 'Theory Learn New Student And Fundamentals',
    questionCount: '18 Questions',
    schedule: 'Online Class',
    authorImgUrl: 'assets/images/course/author/03.jpg',
    authorImgAlt: 'course author Musa Mahlangove',
    authorName: 'Robot Smith',
    btnText: 'Read More',
  },
  {
    imgUrl: 'assets/images/course/04.jpg',
    imgAlt: 'course Musa Mahlangove',
    price: '$30',
    cate: 'Chemistry',
    reviewCount: '3 reviews',
    title: 'Computer Fundamentals Basic Startup Ultricies Vitae',
    questionCount: '18 Questions',
    schedule: 'Online Class',
    authorImgUrl: 'assets/images/course/author/04.jpg',
    authorImgAlt: 'course author Musa Mahlangove',
    authorName: 'Zinat Zaara',
    btnText: 'Read More',
  },
  {
    imgUrl: 'assets/images/course/05.jpg',
    imgAlt: 'course Musa Mahlangove',
    price: '$30',
    cate: 'Chemistry',
    reviewCount: '3 reviews',
    title: 'Boozy Halloween Drinks for the Grown Eleifend Kuismod',
    questionCount: '18 Questions',
    schedule: 'Online Class',
    authorImgUrl: 'assets/images/course/author/05.jpg',
    authorImgAlt: 'course author Musa Mahlangove',
    authorName: 'Musa Mahlangove',
    btnText: 'Read More',
  },
  {
    imgUrl: 'assets/images/course/06.jpg',
    imgAlt: 'course Musa Mahlangove',
    price: '$30',
    cate: 'Chemistry',
    reviewCount: '3 reviews',
    title: 'Student Want to Learn About Science And Arts',
    questionCount: '18 Questions',
    schedule: 'Online Class',
    authorImgUrl: 'assets/images/course/author/06.jpg',
    authorImgAlt: 'course author Musa Mahlangove',
    authorName: 'Angel Mili',
    btnText: 'Read More',
  },
];

const CoursePage = () => {
  return (
    <>
      <Header />
      <PageHeader title={'Archives: Courses'} curPage={'Course Page'} />
      <GroupSelect />
      <div className='course-section padding-tb section-bg'>
        <div className='container'>
          <div className='section-wrapper'>
            <div className='course-showing-part'>
              <div className='d-flex flex-wrap align-items-center justify-content-between'>
                <div className='course-showing-part-left'>
                  <p>Showing 1-6 of 10 results</p>
                </div>
                <div className='course-showing-part-right d-flex flex-wrap align-items-center'>
                  <span>Sort by :</span>
                  <div className='select-item'>
                    <SkillSelect select={'all'} />
                    <div className='select-icon'>
                      <i className='icofont-rounded-down'></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1'>
              {courseList.map((val, i) => (
                <div className='col' key={i}>
                  <div className='course-item'>
                    <div className='course-inner'>
                      <div className='course-thumb'>
                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                      </div>
                      <div className='course-content'>
                        <div className='course-price'>{val.price}</div>
                        <div className='course-category'>
                          <div className='course-cate'>
                            <a href='#'>{val.cate}</a>
                          </div>
                          <div className='course-reiew'>
                            <Rating />
                            <span className='ratting-count'>
                              {' '}
                              {val.reviewCount}
                            </span>
                          </div>
                        </div>
                        <Link href='/course-single'>
                          <h4>{val.title}</h4>
                        </Link>
                        <div className='course-details'>
                          <div className='couse-count'>
                            <i className='icofont-video-alt'></i>{' '}
                            {val.questionCount}
                          </div>
                          <div className='couse-topic'>
                            <i className='icofont-signal'></i> {val.schedule}
                          </div>
                        </div>
                        <div className='course-footer'>
                          <div className='course-author'>
                            <img
                              src={`${val.authorImgUrl}`}
                              alt={`${val.authorImgAlt}`}
                            />
                            <Link href='/team-single' className='ca-name'>
                              {val.authorName}
                            </Link>
                          </div>
                          <div className='course-btn'>
                            <Link
                              href='/course-single'
                              className='lab-btn-text'
                            >
                              {val.btnText}{' '}
                              <i className='icofont-external-link'></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Pagination />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursePage;
