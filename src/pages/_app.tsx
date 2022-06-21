import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
