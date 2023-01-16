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
];

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 70) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    });
  }, []);

  return (
    <header
      className={`header-section ${headerFixed ? 'header-fixed fadeInUp' : ''}`}
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
                <p>Follow us on : </p>
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
                  <li>
                    <Link href='/'>Home</Link>
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
                      Subjects
                    </a>
                    <ul className='lab-ul dropdown-menu'>
                      <li>
                        <Link href='/course-single'>Chemisty - Year 11</Link>
                      </li>
                      <li>
                        <Link href='/course-view'>Chemisty - Year 12</Link>
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
                className='ellepsis-bar d-lg-none'
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

export default Header;
