import {
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
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
      const asyncAnim = async () => {
        setWasTriggered(true);
        setDisplayed(true);
        setIsTyping(true);
        await sleep(2500);
        msgRef.current.style.marginTop =
          msgRef.current.scrollHeight + 32 + 'px';
        setIsTyping(false);
        msgRef.current.style.marginTop = '0px';
        msgRef.current.style.height = msgRef.current.scrollHeight + 32 + 'px';
      };

      asyncAnim();
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
