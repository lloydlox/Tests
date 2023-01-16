import '@/styles/global.css';
import type { AppProps } from 'next/app';
import 'swiper/css';
// import reportWebVitals from '../reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

import '../assets/css/icofont.min.css';
import '../assets/css/animate.css';
import '../assets/css/style.min.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
