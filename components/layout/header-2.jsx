/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import Link from 'next/link';
import SelectCatagory from '../sidebar/selectCatagory';

const HeaderTwo = () => {
  const [menuToggle, setMenuToggle] = useState(false);
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
      className={`header-section style-2 ${
        headerFixed ? 'header-fixed fadeInUp' : ''
      }`}
    >
      <div className='header-bottom'>
        <div className='header-wrapper'>
          <div className='logo-search-acte'>
            <div className='logo'>
              <Link href='/'>
                <img
                  src='/assets/images/logo/01.png'
                  alt='logo'
                  width='180px'
                />
              </Link>
            </div>
            <div className='cate-search d-none d-xxl-block'>
              <div className='d-flex flex-wrap align-items-center'>
                <div className='header-cate'>
                  <SelectCatagory select={'all'} />
                </div>
                <div className='header-search'>
                  <form action='/'>
                    <input type='text' placeholder='Search Here.....' />
                    <button type='submit'>
                      <i className='icofont-search'></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
