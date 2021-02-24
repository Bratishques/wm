import SidebarContext from '@/context/sidebarContext';
import Head from 'next/head';
import {
  MutableRefObject,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import AgeModal from './ageModal';
import Footer from './footer';
import Header from './header';
import Overlay from './overlay';
import Sidebar from './sidebar';

interface Childern {
  children: ReactNode;
  title?: string;
}
//@ts-ignore
const Layout = ({ children, title = 'Winemate' }: Childern) => {
  const [triggered, setTriggered] = useState(false);
  const { scroll } = useContext(SidebarContext);

  const refScrollContainer = useRef() as MutableRefObject<HTMLDivElement>;

 useEffect(() => {
    async function getLocomotive() {
      const Locomotive = (await import('locomotive-scroll')).default;
      const scroll = new Locomotive({
        el: refScrollContainer.current,
        smooth: true,
        tablet: {
          smooth: true,
        },
        getDirection: true,
      });

  scroll.on('scroll', (args) => {
        if (typeof args.currentElements['case1'] === 'object') {
          let progress = args.currentElements['case1'].progress;
          console.log(args);
          if (window.innerWidth >= 1024) {
            if (
              progress > 0.01 &&
              progress < 0.04 &&
              args.direction === 'down'
            ) {
              scroll.scrollTo(document.getElementById(`case1`), {
                offset: -94,
                duration: 500,
              });
            }
          }
          // ouput log example: 0.34
          // gsap example : myGsapAnimation.progress(progress);
        }

        if (typeof args.currentElements['case2'] === 'object') {
          let progress = args.currentElements['case2'].progress;

          if (window.innerWidth >= 1024) {
            if (
              progress > 0.01 &&
              progress < 0.04 &&
              args.direction === 'down'
            ) {
              scroll.scrollTo(document.getElementById(`case2`), {
                offset: -94,
                duration: 500,
              });
            }
          }
        }
      })
    }

    getLocomotive();
  }, []); 

  return (
    <div id={`layout`} className={`w-full relative`}>
      <Head>
        <title>{title}</title>
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

      <div ref={refScrollContainer}>
        <AgeModal />
        <Overlay />
        <Sidebar />
        <Header />
        <div className={`pt-30 md:pt-20`}>
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
