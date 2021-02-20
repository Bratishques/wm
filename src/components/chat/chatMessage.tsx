import {
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import asyncAnim from './asyncChatAnim';
import ChatIndicatior from './chatIndicator';

interface Props {
  children: ReactNode;
  rounded?: boolean;
  sender: {
    image: string;
    name: string;
  };
  className?: string;
  trigger: boolean;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isInViewport(element: HTMLDivElement) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const ChatMessage = ({
  children,
  rounded = false,
  sender,
  className,
  trigger,
}: Props) => {
  const msgRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [wasTriggered, setWasTriggered] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isDisplayed, setDisplayed] = useState(false);

  useEffect(() => {
    if (trigger && !wasTriggered) {
      asyncAnim(msgRef, setWasTriggered, setDisplayed, setIsTyping);
    }
  }, [trigger]);

  return (
    <div
      className={`flex flex-col items-end mb-7 ${className} ${
        isDisplayed ? '' : 'hidden'
      }`}
    >
      <div
        className={`flex flex-col justify-end `}
        style={{
          width: '260px',
        }}
      >
        <div className={`mb-2 flex justify-end`}>
          <ChatIndicatior hidden={!isTyping} />
          <span
            className={` flex items-center text-chat-name font-bold ${
              isTyping ? 'hidden' : ''
            }`}
          >
            {sender.name}
          </span>
          <img className={`ml-2`} src={sender.image} alt={sender.name} />
        </div>
        <div
          ref={msgRef}
          className={`${
            isTyping ? '' : 'py-4'
          } h-0 px-5 transition-all duration-500 relative bottom-0 overflow-hidden bg-chat-message-bg font-medium   text-chat-message rounded-t-30px rounded-bl-30px ${
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
