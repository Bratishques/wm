import ChatInput from './chatInput';
import ChatMessage from './chatMessage';
import SommelierMessage from './sommelierMessage';

const ChatTwo = () => {
  const sender = {
    name: 'Григорий',
    image: '/images/chat/grisha.png',
  };
  return (
    <div
      className={`w-full flex flex-col  flex pl-8 pr-7 py-6 justify-center m-auto`}
      style={{
        maxWidth: '375px',
      }}
    >
      <ChatMessage sender={sender}>
        <p>Посоветуйте красное сухое, танинное, до 1500 рублей</p>
      </ChatMessage>
      <SommelierMessage>
        <p>В каком городе и районе планируете покупку?</p>
      </SommelierMessage>
      <ChatMessage sender={sender}>
        <p>
          Санкт-Петербург, Васильевский остров, рядом с метро Василеостровская
        </p>
      </ChatMessage>
      <SommelierMessage rounded={true}>
        <p>
          Попробуйте Бордоский бленд от Шато Ла Фавьер. Есть в винном бутике
          «Сыр и вино», 8-я Линия, 44
        </p>
      </SommelierMessage>
      <SommelierMessage>
        <div>
          Или закажите доставку <br />
          <a href="" className={`underline`}>
            https://wineshop.ru/shato-la-favier
          </a>
        </div>
      </SommelierMessage>
      <ChatInput />
    </div>
  );
};

export default ChatTwo;
