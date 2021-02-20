import SidebarContext from '@/context/sidebarContext';
import {
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import ChatInput from './chatInput';
import ChatMessage from './chatMessage';
import { chatObserver } from './chatobserver';
import SommelierMessage from './sommelierMessage';
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const ChatTwo = () => {
  const sender = {
    name: 'Григорий',
    image: '/images/chat/grisha.png',
  };
  const className = 'msg-2 z-0';
  const [triggered, setTriggered] = useState(false);
  const [triggers, setTriggers] = useState([false, false, false, false, false]);

  const boxRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const triggerSequence = async () => {
      let newArr = triggers;
      for (let trigger in triggers) {
        newArr = triggers.map((a, i) => {
          if (i <= Number(trigger)) {
            return true;
          }
          return false;
        });
        setTriggers(newArr);
        await sleep(3000);
      }
    };

    if (triggered) {
      triggerSequence();
    }
  }, [triggered]);

  useEffect(() => {
    chatObserver(setTriggered, boxRef.current);
  }, []);

  return (
    <div
      ref={boxRef}
      id={`msg-2`}
      className={`w-full flex flex-col lg:w-1/2 bg-chat-bg overflow-hidden items-center justify-end py-6`}
    >
      <div
        className={`w-full ${
          triggered ? 'opacity-100' : 'opacity-50'
        } transition-all transition-500 flex flex-col pl-8 pr-7 md:mt-auto`}
        style={{
          maxWidth: '375px',
        }}
      >
        <ChatMessage
          sender={sender}
          className={className}
          trigger={triggers[0]}
        >
          <p>Посоветуйте красное сухое, танинное, до 1500 рублей</p>
        </ChatMessage>
        <SommelierMessage className={className} trigger={triggers[1]}>
          <p>В каком городе и районе планируете покупку?</p>
        </SommelierMessage>
        <ChatMessage
          sender={sender}
          className={className}
          trigger={triggers[2]}
        >
          <p>
            Санкт-Петербург, Васильевский остров, рядом с метро Василеостровская
          </p>
        </ChatMessage>
        <SommelierMessage
          rounded={true}
          className={className}
          trigger={triggers[3]}
        >
          <p>
            Попробуйте Бордоский бленд от Шато Ла Фавьер. Есть в винном бутике
            «Сыр и вино», 8-я Линия, 44
          </p>
        </SommelierMessage>

        <SommelierMessage trigger={triggers[4]}>
          <div>
            Или закажите доставку <br />
            <a href="" className={`underline`}>
              https://wineshop.ru/shato-la-favier
            </a>
          </div>
        </SommelierMessage>

        <div className={``}>
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default ChatTwo;
