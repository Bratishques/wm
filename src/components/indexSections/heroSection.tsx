import SidebarContext from '@/context/sidebarContext';
import { useContext, useEffect, useRef, useState } from 'react';
import Messengers from '../messengers';


const HeroSection = () => {
  const [margin, setMargin] = useState(0)

  



  const srcSet = `
                /images/hero-image-mobile.png 640w,
                /images/hero-image-desktop.png 1024w
                `;
  return (
    <section 
    
    data-scroll-target="#fixed-target"
    className={`lg:h-screen z-0`}>
      <div className={`md:pt-25`}>

      </div>
      <div
        className={`relative w-full sm:px-7 flex flex-col sm:flex-row-reverse`}
      >
        <div className={`w-full sm:w-1/2 lg:w-7/12 mb-6 md:mb-0`}>
          <img
            className={`w-full mt-16 md:mt-0 lg:hidden`}
            src="/images/hero-image-mobile.png"
            alt=""
          />
          <img
            className={`hidden lg:block w-full`}
            src={`/images/hero-image-desktop.png`}
          />
        </div>
        <div className={`relative sm:w-1/2 lg:w-5/12 sm:px-0 sm:pr-5 `}>
          <h1 className={`px-9 sm:px-0`}>
            Сомелье в вашем
            <br />
            мессенджере
          </h1>

          <p className={`text-lead mb-4 px-9 sm:px-0 mb-16`}>
            Winemate — это бесплатный сервис рекомендации вин. Где бы вы ни
            находились — напишете сомелье и он быстро ответит: какое вино и где
            купить
          </p>
          <div className={`fixed z-40 block sm:hidden w-full`} data-scroll-offset="20">
            <Messengers className={`rounded-t-30px`} />
          </div>
      <div className={`sm:block z-40 hidden`}>
            <Messengers className={`rounded-r-30px`} />
          </div>
      <div className={``}>
        </div>
      </div>
 

      </div>
    </section>
  );
};

export default HeroSection;
