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

const SommelierMessage = ({
  children,
  rounded = false,
  className = '',
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
      className={`flex flex-col mb-7 ${className} ${
        isDisplayed ? '' : 'hidden'
      }`}
    >
      <div
        className={`flex flex-col`}
        style={{
          width: '260px',
        }}
      >
        <div className={`mb-2 flex`}>
          <img
            className={`rounded-full mr-2`}
            src="/images/chat/sommelier.svg"
            alt=""
          />
          <ChatIndicatior hidden={!isTyping} />
          <span
            className={`${
              isTyping ? 'hidden' : ''
            } flex items-center text-chat-name font-bold`}
          >
            Winemate
          </span>
        </div>
        <div
          ref={msgRef}
          className={`bg-wine ${
            isTyping ? '' : 'py-4'
          } transition-all duration-300 overflow-hidden relative bottom-0  px-5 text-chat-message text-white font-medium rounded-t-30px rounded-br-30px overlow-hidden ${
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

export default SommelierMessage;
