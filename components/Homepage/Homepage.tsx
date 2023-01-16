import styles from './Homepage.module.scss';
import Link from 'next/link'
import Image from 'next/image';
import logo from '../../public/logo.png';
import { Button } from '@material-ui/core';
const Homepage = ()=>{
  return (
   <>
      <Image src={logo} alt="urevise logo" width={300} height={300} />

        <h1 role="heading" className={styles.title}>
          Welcome to Urevise exam preparation
        </h1>


        <div className={styles.grid}>
          <Link href="/login"> <Button >Login</Button> </Link>
          <Link href="/signup"> <Button> Sign up</Button></Link>
        </div>

        <div className={styles.grid}>
        <Link href="/privacypolicy"> Privacy policy </Link>
        <Link href="/termandconditions"> Terms and conditions </Link>
        </div>
   </>
  );
};

export default Homepage;