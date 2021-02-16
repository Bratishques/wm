const SommelierMessage = ({ children, rounded = false }) => {
  return (
    <div className={`flex flex-col mb-7`}>
      <div
        className={`flex flex-col `}
        style={{
          width: '260px',
        }}
      >
        <div className={`mb-2 flex`}>
          <img
            className={`rounded-full`}
            src="/images/chat/sommelier.svg"
            alt=""
          />
          <span className={`ml-2 flex items-center text-chat-name font-bold`}>
            Winemate
          </span>
        </div>
        <div
          className={`bg-wine px-5 py-4 text-chat-message text-white font-medium rounded-t-30px rounded-br-30px ${
            rounded ? 'rounded-bl-30px' : ''
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default SommelierMessage;
