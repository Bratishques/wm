import { ReactNode } from 'react';

interface Childern {
  children: ReactNode;
  rounded?: boolean;
  sender: {
    image: string;
    name: string;
  };
}

const ChatMessage = ({ children, rounded = false, sender }: Childern) => {
  return (
    <div className={`flex flex-col items-end mb-7`}>
      <div
        className={`flex flex-col justify-end `}
        style={{
          width: '260px',
        }}
      >
        <div className={`mb-2 flex justify-end`}>
          <span className={`mr-2 flex items-center text-chat-name font-bold`}>
            {sender.name}
          </span>
          <img src={sender.image} alt={sender.name} />
        </div>
        <div
          className={`bg-chat-message-bg font-medium  px-5 py-4 text-chat-message rounded-t-30px rounded-bl-30px ${
            rounded ? 'rounded-br-30px' : ''
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;

ChatMessage.propTypes = {};
