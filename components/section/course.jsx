/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Rating from '../sidebar/rating';

const subTitle = 'Featured Subjects';
const title = 'Pick A Subject To Get Started';

const courseList = [
  {
    imgUrl: 'assets/images/course/01.jpg',
    imgAlt: 'Year 11 Chemistry',
    url: '/course-single',
    price: '$30',
    cate: 'Chemistry',
    reviewCount: '3 reviews',
    title: 'Chemistry - Year 11',
    questionCount: '60 Questions',
    schedule: '2017-2022',
    authorImgUrl: 'assets/images/course/author/01.jpg',
    authorImgAlt: 'course author Musa Mahlangove',
    authorName: 'Musa Mahlangove',
    btnText: 'Start',
  },
  {
    imgUrl: 'assets/images/course/02.jpg',
    imgAlt: 'Year 12 Chemistry',
    url: '/course-view',
    price: '$30',
    cate: 'Chemistry',
    reviewCount: '12 reviews',
    title: 'Chemistry - Year 12',
    questionCount: '40 Questions',
    schedule: '2017-2022',
    authorImgUrl: 'assets/images/course/author/01.jpg',
    authorImgAlt: 'course author Musa Mahlangove',
    authorName: 'Musa Mahlangove',
    btnText: 'Start',
  },
];

const Course = () => {
  return (
    <div className='course-section padding-tb section-bg'>
      <div className='container'>
        <div className='section-header text-center'>
          <span className='subtitle'>{subTitle}</span>
          <h2 className='title'>{title}</h2>
        </div>
        <div className='section-wrapper'>
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
                      <Link href={val.url}>
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
                          <Link href={val.url} className='lab-btn-text'>
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
        </div>
      </div>
    </div>
  );
};

export default Course;
