/* eslint-disable @next/next/no-img-element */

const subTitle = 'Well-explained Answers';
const title = (
  <h2 className='title'>
    <span className='d-lg-block'>Pass That Exam</span>
  </h2>
);
const desc =
  "Exam answering tactics taught by experienced Western Australia's Y11 and Y12 teachers. Join today.";

const subjectList = [
  {
    name: 'Chemistry',
    link: '#',
  },
  {
    name: 'English',
    link: '#',
  },
];

const shapeList = [
  {
    name: 'Happy Students',
    link: '#',
    className: 'ccl-shape shape-1',
  },
  {
    name: '1000+ Total Questions',
    link: '#',
    className: 'ccl-shape shape-2',
  },
  {
    name: '89% Successful Students',
    link: '#',
    className: 'ccl-shape shape-3',
  },
  {
    name: 'Learn Anywhere',
    link: '#',
    className: 'ccl-shape shape-4',
  },
  {
    name: 'Exam Practice',
    link: '#',
    className: 'ccl-shape shape-5',
  },
];

const Banner = () => {
  return (
    <section className='banner-section'>
      <div className='container'>
        <div className='section-wrapper'>
          <div className='row align-items-center'>
            <div className='col-xxl-5 col-xl-6 col-lg-10'>
              <div className='banner-content'>
                <h6 className='subtitle text-uppercase fw-medium'>
                  {subTitle}
                </h6>
                {title}
                <p className='desc'>{desc}</p>
                <form action='/'>
                  <div className='banner-icon'>
                    <i className='icofont-search'></i>
                  </div>
                  <input type='text' placeholder='Keywords of your subject' />
                  <button type='submit'>Search</button>
                </form>
                <div className='banner-catagory d-flex flex-wrap'>
                  <p>Most Popular: </p>
                  <ul className='lab-ul d-flex flex-wrap'>
                    {subjectList.map((val, i) => (
                      <li key={i}>
                        <a href={val.link}>{val.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-xxl-7 col-xl-6'>
              <div className='banner-thumb'>
                <img src='/assets/images/banner/01.png' alt='img' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='all-shapes'></div>
      <div className='cbs-content-list d-none'>
        <ul className='lab-ul'>
          {shapeList.map((val, i) => (
            <li className={val.className} key={i}>
              <a href={val.link}>{val.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Banner;
