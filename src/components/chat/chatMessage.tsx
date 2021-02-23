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
  setAccumHeight: Function;
  accumHeight: number;
  containRef: MutableRefObject<HTMLDivElement>;
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
  setAccumHeight,
  accumHeight,
  containRef,
}: Props) => {
  const msgRef = useRef() as MutableRefObject<HTMLDivElement>;
  const msgBoxRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [wasTriggered, setWasTriggered] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isDisplayed, setDisplayed] = useState(false);

  useEffect(() => {
    if (trigger && !wasTriggered) {
      asyncAnim(
        msgRef,
        setWasTriggered,
        setDisplayed,
        setIsTyping,
        setAccumHeight,
        accumHeight,
        msgBoxRef,
        containRef,
      );
    }
  }, [trigger]);

  return (
    <div
      className={`flex transition-all duration-500 flex-col items-end absolute  right-0  ${className} ${
        isDisplayed ? '' : 'hidden'
      }`}
      style={{
        top: '90%',
      }}
      ref={msgBoxRef}
    >
      <div
        className={`flex flex-col mb-7`}
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
          } transition-all duration-300 overflow-hidden relative bottom-0  px-5 text-chat-message bg-chat-message-bg font-medium rounded-t-30px rounded-bl-30px overlow-hidden ${
            rounded ? 'rounded-bl-30px' : ''
          }`}
          style={{
            height: '0px',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;

ChatMessage.propTypes = {};
