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

const ChatOne = () => {
  const sender = {
    name: 'Анастасия',
    image: '/images/chat/nastya.png',
  };
  const className = 'msg-1 overflow-hidden';
  const [triggered, setTriggered] = useState(false);
  const [triggers, setTriggers] = useState([false, false, false, false]);

  const scrollY = useContext(SidebarContext).scroll;
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
      className={`w-full flex flex-col lg:w-1/2 bg-chat-bg overflow-hidden items-center justify-end py-6`}
      ref={boxRef}
    >
      <div
        className={`w-full ${
          triggered ? 'opacity-100' : 'opacity-50'
        } transition-all transition-300 flex flex-col pl-8 pr-7 mt-auto`}
        style={{
          maxWidth: '375px',
        }}
      >
        <ChatMessage
          sender={sender}
          className={className}
          trigger={triggers[0]}
        >
          <div className={`flex mb-2`}>
            <img src="/images/chat/preview.png" alt="" />
            <div className={`flex flex-col justify-center ml-2`}>
              <p className={`text-file-name `}>IMAGE 2020-09-..</p>
              <p className={`text-placeholder-gray`}>2,6МБ</p>
            </div>
          </div>
          <p>Какое игристое выбрать? Высылаю фото меню</p>
        </ChatMessage>
        <SommelierMessage className={className} trigger={triggers[1]}>
          <p>Какое предпочитаете — белое, красное или розовое?</p>
        </SommelierMessage>
        <ChatMessage
          sender={sender}
          className={className}
          trigger={triggers[2]}
        >
          <p>Белое сухое, желательно до 5000 за бутылку</p>
        </ChatMessage>
        <SommelierMessage trigger={triggers[3]}>
          <p>
            Попробуйте Просекко «Кюве дель Фондаторе» Грациано Меротто — 4-я
            позиция, идеально подходит под ваш запрос
          </p>
        </SommelierMessage>
      </div>
      <div className={``}>
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatOne;
