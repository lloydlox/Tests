import Link from 'next/link';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import PageHeader from '@/components/layout/pageheader';

const title = 'Forget Password';
const socialTitle = 'Forget Password With Social Media';
const btnText = 'Submit Now';

const socialMediaList = [
  {
    link: '#',
    iconName: 'icofont-facebook',
    className: 'facebook',
  },
  {
    link: '#',
    iconName: 'icofont-twitter',
    className: 'twitter',
  },
  {
    link: '#',
    iconName: 'icofont-linkedin',
    className: 'linkedin',
  },
  {
    link: '#',
    iconName: 'icofont-instagram',
    className: 'instagram',
  },
  {
    link: '#',
    iconName: 'icofont-pinterest',
    className: 'pinterest',
  },
];

const ForgetPass = () => {
  return (
    <>
      <Header />
      <PageHeader title={'Forget Password'} curPage={'Forget Password'} />
      <div className='login-section padding-tb section-bg'>
        <div className='container'>
          <div className='account-wrapper'>
            <h3 className='title'>{title}</h3>
            <form className='account-form'>
              <div className='form-group'>
                <input type='text' name='email' placeholder='User Email *' />
              </div>
              <div className='form-group text-center'>
                <button className='d-block lab-btn'>
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            <div className='account-bottom'>
              <span className='d-block cate pt-10'>
                Don’t Have any Account? <Link href='/login'>Login</Link>
              </span>
              <span className='or'>
                <span>or</span>
              </span>
              <h5 className='subtitle'>{socialTitle}</h5>
              <ul className='lab-ul social-icons justify-content-center'>
                {socialMediaList.map((val, i) => (
                  <li key={i}>
                    <a href={val.link} className={val.className}>
                      <i className={val.iconName}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgetPass;
