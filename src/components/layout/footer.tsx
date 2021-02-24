const Footer = () => {
  return (
    <section className={`pt-36 pb-32 bg-white`} data-scroll-section>
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
            <img className={`w-11`} src="/icons/facebook-icon.svg" alt="" />
            <img className={`w-11`} src="/icons/instagram-icon.svg" alt="" />
            <img className={`w-11`} src="/icons/youtube-icon.svg" alt="" />
          </div>
        </div>
        <div className={`w-full h-1 bg-wine opacity-25 mb-5.5`} />
        <div className={`mb-4 text-placeholder-gray text-base`}>
          <a href="" target="_blank" rel="noopener noreferrer">
            <p className={`mb-3 text-center md:text-left`}>
              Политика обработки персональных данных
            </p>
          </a>
          <p className={`text-center md:text-left`}>
            © 2020 Wine Global Management Limited
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
