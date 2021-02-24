import SidebarContext from '@/context/sidebarContext';
import { useContext, useEffect, useRef, useState } from 'react';
import Messengers from '../messengers';

const HeroSection = () => {
  const [margin, setMargin] = useState(0);

  const srcSet = `
                /images/hero-image-mobile.png 640w,
                /images/hero-image-desktop.png 1024w
                `;
  return (
    <section className={`lg:h-screen z-0`}>
      <div className={`relative`}>
        <div
          className={`relative flex flex-col lg:flex-row-reverse lg:h-screen lg:max-h-minus-header`}
        >
          <div
            className={`w-full lg:w-1/2 flex items-end text-white px-7 py-9 md:py-23 md:px-14`}
            style={{
              backgroundImage: 'url(/images/hero-image-mobile.png)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              minHeight: '600px',
            }}
          >
          </div>
          <div className={`relative sm:w-1/2 w-full  flex flex-col justify-center pt-6 sm:px-9 sm:pr-24 `}>
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
          <div
            className={`fixed bottom-0 z-40 block sm:hidden w-full`}
          >
            <Messengers className={`rounded-t-30px`} />
          </div>
        </div>
        </div>
        </div>
      <div
        className={`relative h-full w-full sm:px-7 flex flex-col sm:flex-row-reverse`}
      >
        <div className={`w-full sm:w-1/2 w-7/12 mb-6 md:mb-0`}>
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

      </div>
    </section>
  );
};

export default HeroSection;
