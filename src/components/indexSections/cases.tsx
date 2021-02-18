import ChatOne from '../chat/chatOne';
import ChatTwo from '../chat/chatTwo';

const Cases = () => {
  return (
    <section className={`mt-14 md:mt-31`}>
      <div className={`flex flex-col md:flex-row md:max-h-675px`}>
        <div
          className={`w-full md:w-1/2 flex items-end text-white px-7 py-9 md:py-23 md:px-14 `}
          style={{
            backgroundImage: 'url(/images/case-one-desktop.png)',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            minHeight: '600px',
          }}
        >
          <h2 className={`md:text-h2-big`}>
            Пишите, когда вы в баре, ресторане или магазине
          </h2>
        </div>
        <div
          className={`w-full md:w-1/2 bg-chat-bg md:max-h-675px overflow-y-scroll`}
        >
          <ChatOne />
        </div>
      </div>
      <div
        className={`flex flex-col md:flex-row-reverse overflow-hidden md:max-h-675px`}
      >
        <div
          className={`w-full md:w-1/2 flex items-end text-white px-7 py-9 md:py-23 md:px-14`}
          style={{
            backgroundSize: "100%",
            background:
              'linear-gradient(180.04deg, rgba(0, 0, 0, 0) 0.04%, rgba(0, 0, 0, 0.7) 67.17%), url(/images/case-two-desktop.png)',
            minHeight: '600px',
          }}
        >
          <h2 className={`md:text-h2-big`}>
            Подскажем, где купить или заказать доставку{' '}
          </h2>
        </div>
        <div className={`w-full md:w-1/2 bg-chat-bg overflow-y-scroll`}>
          <ChatTwo />
        </div>
      </div>
    </section>
  );
};

export default Cases;
