const YoutubeSection = () => {
  return (
    <section className={`mt-12 md:mt-23`}>
      <div className={`w-full px-7 md:px-9 flex flex-col md:flex-row`}>
        <div className={`md:w-2/3 w-full`}>
          <h2 className={`mb-3 md:hidden block`}>
            Подписывайтесь на YouTube-канал о вине
          </h2>
          <img className={`w-full`} src="/images/youtube-image.png" alt="" />
        </div>
        <div className={`md:w-1/3 w-full md:ml-5 flex flex-col justify-center`}>
          <h2 className={`mb-4 hidden md:block`}>
            Подписывайтесь <br /> на YouTube-канал о вине
          </h2>
          <p className={`mt-3 md:mt-0`}>
            Здоров с вином — это шоу о вине. Шоу легко и с юмором поможет вам
            узнать о новом вине, а заодно и много интересного о нём. Новый
            выпуск — каждую среду.
          </p>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;
