import Messengers from '../messengers';

const HeroSection = () => {
  const srcSet = `
                /images/hero-image-mobile.png 640w,
                /images/hero-image-desktop.png 1024w
                `;
  return (
    <section className={`sm:mt-25`}>
      <div
        className={`relative w-full sm:px-7 flex flex-col sm:flex-row-reverse`}
      >
        <div className={`w-full sm:w-1/2 lg:w-7/12 mb-6 md:mb-0`}>
          <img
            className={`w-full lg:hidden`}
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
          <div className={`absolute block sm:hidden w-full`}>
            <Messengers />
          </div>
          <p className={`text-lead mb-4 px-9 sm:px-0`}>
            Winemate — это бесплатный сервис рекомендации вин. Где бы вы ни
            находились — напишете сомелье и он быстро ответит: какое вино и где
            купить
          </p>
          <div className={`sm:block hidden -ml-7`}>
            <Messengers />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
