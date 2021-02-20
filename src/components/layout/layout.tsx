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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AgeModal/>
      <Overlay/>
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
