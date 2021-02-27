const Footer = () => {
  return (
    <section className={`pt-36 pb-32 md:pb-8 bg-white`} data-scroll-section>
      <div className={`md:px-8 px-12`}>
        <div className={`w-full md:flex md:flex-row md:justify-between mb-11`}>
          <img
            className={`
            mx-auto md:mx-0 mb-8 md:mb-0
          `}
            src="/logo/logo-footer.svg"
            alt=""
          />
          <div className={`w-41.5 flex justify-between  mx-auto md:mx-0`}>
            <a href="">
              <img className={`w-11`} src="/icons/facebook-icon.svg" alt="" />
            </a>

            <a href="">
              <img className={`w-11`} src="/icons/instagram-icon.svg" alt="" />
            </a>

            <a
              className={`w-11`}
              href="https://www.youtube.com/channel/UCJoTqbRHZA-f3_cl8dwzoCw"
            >
              <img src="/icons/youtube-icon.svg" alt="Youtube" />
            </a>
          </div>
        </div>
        <div className={`w-full h-1 bg-wine opacity-25 mb-5.5`} />
        <div className={`mb-4 text-placeholder-gray text-base`}>
          <a href="" target="_blank" rel="noopener noreferrer">
            <p className={`mb-3 text-center md:text-right`}>
              Политика обработки персональных данных
            </p>
          </a>
          <p className={`text-center md:text-right`}>
            © 2020 Wine Global Management Limited
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
