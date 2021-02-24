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
  const className = 'msg-1 overflow-hidden flex-shrink-0';
  const [triggered, setTriggered] = useState(false);
  const [triggers, setTriggers] = useState([false, false, false, false]);
  const [accumHeight, setAccumHeight] = useState(20);
  const [prevHeight, setPrevHeight] = useState(0);

  const boxRef = useRef() as MutableRefObject<HTMLDivElement>;
  const containRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    setPrevHeight(containRef.current.getBoundingClientRect().height);
    containRef.current.style.height =
      containRef.current.getBoundingClientRect().height + 'px';
  }, []);

  useEffect(() => {
    console.log(accumHeight);
    if (accumHeight > prevHeight - 48 && prevHeight != 0) {
      containRef.current.style.marginTop =
        -(accumHeight - prevHeight + 48) + 'px';
      containRef.current.style.height =
        -parseInt(containRef.current.style.marginTop, 10) +
        prevHeight +
        48 +
        'px';
    }
  }, [accumHeight]);

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
        await sleep(2000);
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
      className={`w-full flex flex-col lg:w-1/2 bg-white py-6 justify-end overflow-hidden lg:h-auto max-h-minus-header-mobile lg:max-h-minus-header transition-all bg-chatting-box-bg`}
      ref={boxRef}
    >
      <div className={`pt-4 pr-4 pb-4 pt-8`}>
        <div
          ref={containRef}
          className={`w-full ${
            triggered ? 'opacity-100' : 'opacity-50'
          } transition-all duration-300 pl-8 pr-7 h-full  mx-auto min-h-minus-chat-mobile lg:min-h-minus-chat relative`}
          style={{
            maxWidth: '320px',
            marginTop: '10px',
          }}
        >
          <div className={`w-full`}></div>
          <ChatMessage
            containRef={containRef}
            accumHeight={accumHeight}
            setAccumHeight={setAccumHeight}
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
          <SommelierMessage
            containRef={containRef}
            accumHeight={accumHeight}
            setAccumHeight={setAccumHeight}
            className={className}
            trigger={triggers[1]}
          >
            <p>Какое предпочитаете — белое, красное или розовое?</p>
          </SommelierMessage>
          <ChatMessage
            containRef={containRef}
            accumHeight={accumHeight}
            setAccumHeight={setAccumHeight}
            sender={sender}
            className={className}
            trigger={triggers[2]}
          >
            <p>Белое сухое, желательно до 5000 за бутылку</p>
          </ChatMessage>
          <SommelierMessage
            last={true}
            containRef={containRef}
            accumHeight={accumHeight}
            setAccumHeight={setAccumHeight}
            trigger={triggers[3]}
          >
            <p>
              Попробуйте Просекко «Кюве дель Фондаторе» Грациано Меротто — 4-я
              позиция, идеально подходит под ваш запрос
            </p>
          </SommelierMessage>
        </div>
      </div>
      <div className={`mt-auto h-14`}>
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatOne;
