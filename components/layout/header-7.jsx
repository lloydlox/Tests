/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import Link from 'next/link';

const phoneNumber = '+61-4567 6587';
const address = 'Perth, WA';

let socialMediaList = [
  {
    iconName: 'icofont-facebook-messenger',
    siteLink: '#',
  },
  {
    iconName: 'icofont-twitter',
    siteLink: '#',
  },
  {
    iconName: 'icofont-vimeo',
    siteLink: '#',
  },
  {
    iconName: 'icofont-skype',
    siteLink: '#',
  },
  {
    iconName: 'icofont-rss-feed',
    siteLink: '#',
  },
];

const HeaderSeven = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    });
  }, []);

  return (
    <header
      className={`header-section style-7 ${
        headerFixed ? 'header-fixed fadeInUp' : ''
      }`}
    >
      <div className={`header-top ${socialToggle ? 'open' : ''}`}>
        <div className='container'>
          <div className='header-top-area'>
            <ul className='lab-ul left'>
              <li>
                <i className='icofont-ui-call'></i> <span>{phoneNumber}</span>
              </li>
              <li>
                <i className='icofont-location-pin'></i> {address}
              </li>
            </ul>
            <ul className='lab-ul social-icons d-flex align-items-center'>
              <li>
                <p>Find us on : </p>
              </li>
              {socialMediaList.map((val, i) => (
                <li key={i}>
                  <a href={val.siteLink}>
                    <i className={val.iconName}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='header-bottom'>
        <div className='container'>
          <div className='header-wrapper'>
            <div className='logo'>
              <Link href='/'>
                <img
                  src='/assets/images/logo/01.png'
                  alt='logo'
                  width='180px'
                />
              </Link>
            </div>
            <div className='menu-area'>
              <div className='menu'>
                <ul className={`lab-ul ${menuToggle ? 'active' : ''}`}>
                  <li className='menu-item-has-children'>
                    <a
                      href='#'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                      data-bs-offset='0,0'
                    >
                      Home
                    </a>
                    <ul className='lab-ul dropdown-menu'>
                      <li>
                        <Link href='/'>Home One</Link>
                      </li>
                      <li>
                        <Link href='/index-2'>Home Two</Link>
                      </li>
                      <li>
                        <Link href='/index-3'>Home Three</Link>
                      </li>
                      <li>
                        <Link href='/index-4'>Home Four</Link>
                      </li>
                      <li>
                        <Link href='/index-5'>Home Five</Link>
                      </li>
                      <li>
                        <Link href='/index-6'>Home Six</Link>
                      </li>
                      <li>
                        <Link href='/index-7'>Home Seven</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='menu-item-has-children'>
                    <a
                      href='#'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                      data-bs-offset='0,0'
                    >
                      Courses
                    </a>
                    <ul className='lab-ul dropdown-menu'>
                      <li>
                        <Link href='/course'>Course</Link>
                      </li>
                      <li>
                        <Link href='/course-single'>Course Details</Link>
                      </li>
                      <li>
                        <Link href='/course-view'>Course View</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='menu-item-has-children'>
                    <a
                      href='#'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                      data-bs-offset='0,0'
                    >
                      Blog
                    </a>
                    <ul className='lab-ul dropdown-menu'>
                      <li>
                        <Link href='/blog'>Blog Grid</Link>
                      </li>
                      <li>
                        <Link href='/blog-2'>Blog Style 2</Link>
                      </li>
                      <li>
                        <Link href='/blog-3'>Blog Style 3</Link>
                      </li>
                      <li>
                        <Link href='/blog-single'>Blog Single</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='menu-item-has-children'>
                    <a
                      href='#'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                      data-bs-offset='0,0'
                    >
                      Pages
                    </a>
                    <ul className='lab-ul dropdown-menu'>
                      <li>
                        <Link href='/about'>About</Link>
                      </li>
                      <li>
                        <Link href='/team'>Team</Link>
                      </li>
                      <li>
                        <Link href='/instructor'>Instructor</Link>
                      </li>
                      <li>
                        <Link href='/shop'>Shop Page</Link>
                      </li>
                      <li>
                        <Link href='/shop-single'>Shop Details Page</Link>
                      </li>
                      <li>
                        <Link href='/cart-page'>Shop Cart Page</Link>
                      </li>
                      <li>
                        <Link href='/search-page'>Search Page</Link>
                      </li>
                      <li>
                        <Link href='/search-none'>Search None</Link>
                      </li>
                      <li>
                        <Link href='/404'>404</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href='/contact'>Contact</Link>
                  </li>
                </ul>
              </div>

              <Link href='/login' className='login'>
                <i className='icofont-user'></i> <span>LOG IN</span>{' '}
              </Link>
              <Link href='/signup' className='signup'>
                <i className='icofont-users'></i> <span>SIGN UP</span>{' '}
              </Link>

              <div
                className={`header-bar d-lg-none ${menuToggle ? 'active' : ''}`}
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div
                className='ellepsis-bar d-md-none'
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className='icofont-info-square'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSeven;
