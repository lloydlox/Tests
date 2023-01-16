/* eslint-disable @next/next/no-img-element */
import Rating from '../sidebar/rating';

const title = 'Chemistry - Year 11: Unit 1 & 2';
const desc =
  'A question by question deep-dive into the different answering techniques you can use to ace the Chemistry exam.';
const author = 'Musa Mahlangove';
const reviewCount = '3 reviews';
const videoLink = 'https://www.youtube-nocookie.com/embed/jP649ZHA8Tg';

const categoryList = [
  {
    link: '#',
    text: 'Chemistry',
    className: 'course-cate',
  },
  {
    link: '#',
    text: '30% Off',
    className: 'course-offer',
  },
];

const PageHeaderTwo = () => {
  return (
    <div className='pageheader-section style-2'>
      <div className='container'>
        <div className='row justify-content-center justify-content-lg-between align-items-center flex-row-reverse'>
          <div className='col-lg-7 col-12'>
            <div className='pageheader-thumb'>
              <img
                src='/assets/images/pageheader/chemist.jpg'
                alt='chemistr'
                className='w-100'
              />
              <a
                href={videoLink}
                className='video-button popup'
                target='_blank'
                rel='noreferrer'
              >
                <i className='icofont-ui-play'></i>
              </a>
            </div>
          </div>
          <div className='col-lg-5 col-12'>
            <div className='pageheader-content'>
              <div className='course-category'>
                {categoryList.map((val, i) => (
                  <a href={val.link} className={val.className} key={i}>
                    {val.text}
                  </a>
                ))}
              </div>
              <h2 className='phs-title'>{title}</h2>
              <p className='phs-desc'>{desc}</p>
              <div className='phs-thumb'>
                <img src='/assets/images/pageheader/03.jpg' alt='rajibraj91' />
                <span>{author}</span>
                <div className='course-reiew'>
                  <Rating />
                  <span className='ratting-count'>{reviewCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeaderTwo;
