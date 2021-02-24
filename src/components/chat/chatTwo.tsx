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
  const [accumHeight, setAccumHeight] = useState(24);
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
      className={`w-full flex flex-col lg:w-1/2 bg-white py-6 justify-end overflow-hidden lg:h-auto max-h-minus-header-mobile lg:max-h-minus-header transition-all`}
      ref={boxRef}
    >
      <div className={`pt-4 pr-8 pb-4 pt-4`}>
        <div
          ref={containRef}
          className={`w-full ${
            triggered ? 'opacity-100' : 'opacity-50'
          } transition-all duration-300 pl-8 pr-7 h-full mx-auto min-h-minus-chat-mobile lg:min-h-minus-chat relative`}
          style={{
            maxWidth: '320px',
            marginTop: '10px',
          }}
        >
          <ChatMessage
            containRef={containRef}
            accumHeight={accumHeight}
            setAccumHeight={setAccumHeight}
            sender={sender}
            className={className}
            trigger={triggers[0]}
          >
            <p>Посоветуйте красное сухое, танинное, до 1500 рублей</p>
          </ChatMessage>
          <SommelierMessage
            containRef={containRef}
            accumHeight={accumHeight}
            setAccumHeight={setAccumHeight}
            className={className}
            trigger={triggers[1]}
          >
            <p>В каком городе и районе планируете покупку?</p>
          </SommelierMessage>
          <ChatMessage
            containRef={containRef}
            accumHeight={accumHeight}
            setAccumHeight={setAccumHeight}
            sender={sender}
            className={className}
            trigger={triggers[2]}
          >
            <p>
              Санкт-Петербург, Васильевский остров, рядом с метро
              Василеостровская
            </p>
          </ChatMessage>
          <SommelierMessage
            containRef={containRef}
            accumHeight={accumHeight}
            setAccumHeight={setAccumHeight}
            rounded={true}
            className={className}
            trigger={triggers[3]}
            last={true}
          >
            <p>
              Попробуйте Бордоский бленд от Шато Ла Фавьер. Есть в винном бутике
              «Сыр и вино», 8-я Линия, 44
            </p>
            <br/>
            <div>
              Или закажите доставку <br />
              <a href="" className={`underline`}>
                https://wineshop.ru/shato-la-favier
              </a>
            </div>
          </SommelierMessage>
        </div>
      </div>
      <div className={`mt-auto h-14`}>
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatTwo;
