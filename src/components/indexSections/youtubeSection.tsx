import { useState } from "react";

const YoutubeSection = () => {

  const [triggerYT, setTriggerYT] = useState(false)
  return (
    <section className={`pt-12 md:pt-23 bg-white`}>
      <div className={`w-full px-7 md:px-9 flex flex-col md:flex-row`}>
        <div className={`md:w-2/3 w-full`}>
          <h2 className={`mb-3 md:hidden block`}>
            Подписывайтесь на YouTube-канал о вине
          </h2>
          <div 
          onClick={() => {
            setTriggerYT(true)
          }}
          style={{
            paddingBottom: "56.25%"
          }}
          
          className={`w-full h-full relative cursor-pointer`}>
            <img
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              border: "0"
            }}
            className = {triggerYT ? "hidden" : ""}
            src="/images/youtube-image.png"
            />

          <iframe style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            border: "0"
          }} 
          className = {!triggerYT ? "hidden" : ""}
          src= "https://www.youtube.com/embed/CXdqwO-nWoY?autoplay=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
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
