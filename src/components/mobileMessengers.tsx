const MobileMessengers = () => {
  return (
    <div
      className={`flex justify-center py-4 px-6 shadow-messenger rounded-r-20px md:max-w-375px md:-ml-7`}
    >
      <div
        className={`w-full flex items-stretch text-caption font-medium justify-between`}
      >
        <a className={`flex flex-col items-center justify-center w-23`} href="">
          <img
            className={`mb-2 px-2.5`}
            src="/icons/fb-messenger-icon.svg"
            alt=""
          />
          <p>FB Messenger</p>
        </a>
        <a className={`flex flex-col items-center justify-center w-23`} href="">
          <img
            className={`mb-2 px-2.5`}
            src="/icons/telegram-icon.svg"
            alt=""
          />
          <p>Telegram</p>
        </a>
        <a className={`flex flex-col items-center justify-center w-23`} href="">
          <img
            className={`mb-2 px-2.5`}
            src="/icons/i-message-icon.svg"
            alt=""
          />
          <p>iMessages</p>
        </a>
      </div>
    </div>
  );
};

export default MobileMessengers;
