import ChatOne from '../chat/chatOne';
import ChatTwo from '../chat/chatTwo';

const Cases = () => {
  return (
    <section id={``} className={``}>
      <div className={`relative`}>
        <div
          data-scroll
          data-scroll-id="case1"
          data-scroll-section
          id={`case1`}
          className={`relative flex flex-col lg:flex-row lg:h-screen  lg:max-h-minus-header`}
        >
          <div
            className={`w-full lg:w-1/2 flex items-end text-white px-7 py-9 md:py-23 md:px-14`}
            style={{
              backgroundImage: 'url(/images/case-one-desktop.png)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              minHeight: '600px',
            }}
          >
            <h2 className={`md:text-h2-big`}>
              Пишите, когда вы в баре, ресторане или магазине
            </h2>
          </div>
          <ChatOne />
        </div>
        <div
          id={`case2`}
          data-scroll
          data-scroll-id="case2"
          data-scroll-section
          className={`top-0 flex flex-col lg:flex-row-reverse overflow-hidden lg:h-screen lg:max-h-minus-header`}
        >
          <div
            className={`w-full lg:w-1/2 flex items-end text-white px-7 py-9 md:py-23 md:px-14  `}
            style={{
              background:
                'linear-gradient(180.04deg, rgba(0, 0, 0, 0) 0.04%, rgba(0, 0, 0, 0.7) 67.17%), url(/images/case-two-desktop.png)',
              backgroundImage: 'url(/images/case-two-desktop.png)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              minHeight: '600px',
            }}
          >
            <h2 className={`md:text-h2-big`}>
              Подскажем, где купить или заказать доставку{' '}
            </h2>
          </div>
          <ChatTwo />
        </div>
      </div>
    </section>
  );
};

export default Cases;
