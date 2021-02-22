import Messengers from '../messengers';
import Step from '../step';

const StepsSection = () => {
  const sender = {
    name: 'Анастасия',
    image: '/images/chat/nastya.png',
  };

  const steps = [
    {
      number: 1,
      text:
        'Выберите любимый мессенджер и напишите сомлелье, что вы ищете: вино для ужина с друзьями или что-то новое в магазине рядом с домом',
    },
    {
      number: 2,
      text:
        'Если вы уже в магазине или ресторане — отправьте фото витрины или винной карты',
    },
    {
      number: 3,
      text:
        'Сомелье Winemate уточнит подробности и даст рекомендацию. Если нужно, посоветует магазин',
    },
  ];

  return (
    <section className={` px-7 relative`} data-scroll-section>
      <div className={`mt-12 md:mt-15 flex flex-col lg:flex-row`}>
        <div className={'lg:w-1/3 w-full mb-12'}>
          <div>
            <Step text={steps[0].text} number={steps[0].number} />
          </div>
          <div className={`mt-8 md:ml-0 md:pl-10 relative w-full`}>
            <Messengers />
          </div>
        </div>
        <div className={'lg:w-1/3  w-full lg:ml-5 mb-12'}>
          <div>
            <Step text={steps[1].text} number={steps[1].number} />
          </div>
          <div className={`mt-8 md:pl-10`}>
            <div className={`flex flex-col mb-7`}>
              <div className={`flex flex-col `}>
                <div className={`mb-2 flex`}>
                  <img src={sender.image} alt={sender.name} />
                  <span
                    className={` ml-2 flex items-center text-chat-name font-bold`}
                  >
                    {sender.name}
                  </span>
                </div>
                <div
                  className={`bg-chat-message-bg font-medium  px-5 py-4 text-chat-message rounded-t-30px rounded-bl-30px rounded-br-30px w-260px`}
                >
                  <div className={`flex mb-2`}>
                    <img src="/images/chat/preview.png" alt="" />
                    <div className={`flex flex-col justify-center ml-2`}>
                      <p className={`text-file-name `}>IMAGE 2020-09-..</p>
                      <p className={`text-placeholder-gray`}>2,6МБ</p>
                    </div>
                  </div>
                  <p>
                    Посоветуйте, какое игристое выбрать? Я в баре, отправляю
                    фото
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={'lg:w-1/3 lg:ml-5'}>
          <div>
            <Step text={steps[2].text} number={steps[2].number} />
          </div>
          <div className={`mt-8 md:pl-10 w-full`}>
            <div className={`flex flex-col mb-7`}>
              <div className={`flex flex-col `}>
                <div className={`mb-2 flex`}>
                  <img
                    className={`rounded-full`}
                    src="/images/chat/sommelier.svg"
                    alt=""
                  />
                  <span
                    className={`ml-2 flex items-center text-chat-name font-bold`}
                  >
                    Winemate
                  </span>
                </div>
                <div
                  className={`bg-wine px-5 py-4 text-chat-message text-white font-medium rounded-t-30px rounded-br-30px rounded-bl-30px w-260px`}
                >
                  <p>
                    Попробуйте Бордоский бленд от Шато Ла Фавьер. Есть в винном
                    бутике «Сыр и вино», 8-я Линия, 44
                  </p>
                  <br />
                  <p>
                    Или закажите доставку <br />
                    <a href="" className={`underline`}>
                      https://wineshop.ru/shato-la-favier
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
