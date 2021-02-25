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
              minHeight: "calc(100vh - 272px)",
            }}
          >
          </div>
          <div className={`relative lg:w-1/2 w-full  flex flex-col justify-center pt-6 sm:px-9 sm:pr-24 `}>
          <h1 className={`px-9 sm:px-0`}>
            Сомелье в вашем
            <br />
            мессенджере
          </h1>

          <p className={`text-lead mb-4 px-9 sm:px-0 mb-16`}>
          Winemate&nbsp;&mdash; это бесплатный сервис рекомендации вин. Где&nbsp;бы вы&nbsp;ни
находились&nbsp;&mdash; напишете сомелье и&nbsp;он&nbsp;быстро ответит: какое вино и&nbsp;где
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
    </section>
  );
};

export default HeroSection;
