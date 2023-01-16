/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const newsTitle = 'Want Us To Email You About Special Offers And Updates?';
const siteTitle = 'Site Map';
const useTitle = 'Useful Links';
const socialTitle = 'Social Contact';
const supportTitle = 'Our Support';

const siteList = [
  {
    text: 'Documentation',
    link: '#',
  },
  {
    text: 'Feedback',
    link: '#',
  },
  {
    text: 'Plugins',
    link: '#',
  },
  {
    text: 'Support Forums',
    link: '#',
  },
  {
    text: 'Themes',
    link: '#',
  },
];

const useList = [
  {
    text: 'About Us',
    link: '#',
  },
  {
    text: 'Help Link',
    link: '#',
  },
  {
    text: 'Terms & Conditions',
    link: '#',
  },
  {
    text: 'Contact Us',
    link: '#',
  },
  {
    text: 'Privacy Policy',
    link: '#',
  },
];

const socialMediaList = [
  {
    text: 'Facebook',
    link: '#',
  },
  {
    text: 'Twitter',
    link: '#',
  },
  {
    text: 'Instagram',
    link: '#',
  },
  {
    text: 'YouTube',
    link: '#',
  },
  {
    text: 'Github',
    link: '#',
  },
];

const supportList = [
  {
    text: 'Help Center',
    link: '#',
  },
  {
    text: 'Paid with Mollie',
    link: '#',
  },
  {
    text: 'Status',
    link: '#',
  },
  {
    text: 'Changelog',
    link: '#',
  },
  {
    text: 'Contact Support',
    link: '#',
  },
];

const Footer = () => {
  return (
    <div className='news-footer-wrap'>
      <div className='fs-shape'>
        <img
          src='/assets/images/shape-img/03.png'
          alt='fst'
          className='fst-1'
        />
        <img
          src='/assets/images/shape-img/04.png'
          alt='fst'
          className='fst-2'
        />
      </div>

      <div className='news-letter'>
        <div className='container'>
          <div className='section-wrapper'>
            <div className='news-title'>
              <h3>{newsTitle}</h3>
            </div>
            <div className='news-form'>
              <form action='/'>
                <div className='nf-list'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Enter Your Email'
                  />
                  <input type='submit' name='submit' value='Subscribe Now' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer>© 2023 URevise Ltd.</footer>
    </div>
  );
};

export default Footer;
