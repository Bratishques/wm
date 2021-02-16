import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './footer';
import Header from './header';

interface Childern {
  children: ReactNode;
}

const Layout = ({ children }: Childern) => {
  return (
    <div className={`w-full`}>
      <Head>
        <title>Winemate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
