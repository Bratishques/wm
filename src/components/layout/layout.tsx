import Head from 'next/head';
import { ReactNode } from 'react';
import AgeModal from './ageModal';
import Footer from './footer';
import Header from './header';
import Overlay from './overlay';
import Sidebar from './sidebar';

interface Childern {
  children: ReactNode;
}

const Layout = ({ children }: Childern) => {
  return (
    <div id={`layout`} className={`w-full relative `}>
      <Head>
        <title>Winemate</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AgeModal />
      <Overlay />
      <Sidebar />
      <Header />
      <div className={`pt-30 md:pt-20`}>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
