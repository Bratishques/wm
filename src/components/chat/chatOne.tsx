import ChatInput from './chatInput';
import ChatMessage from './chatMessage';
import SommelierMessage from './sommelierMessage';

const ChatOne = () => {
  const sender = {
    name: 'Анастасия',
    image: '/images/chat/nastya.png',
  };
  return (
    <div
      className={`w-full flex flex-col  flex pl-8 pr-7 py-6 justify-center m-auto`}
      style={{
        maxWidth: '375px',
      }}
    >
      <ChatMessage sender={sender}>
        <div className={`flex mb-2`}>
          <img src="/images/chat/preview.png" alt="" />
          <div className={`flex flex-col justify-center ml-2`}>
            <p className={`text-file-name `}>IMAGE 2020-09-..</p>
            <p className={`text-placeholder-gray`}>2,6МБ</p>
          </div>
        </div>
        <p>Какое игристое выбрать? Высылаю фото меню</p>
      </ChatMessage>
      <SommelierMessage>
        <p>Какое предпочитаете — белое, красное или розовое?</p>
      </SommelierMessage>
      <ChatMessage sender={sender}>
        <p>Белое сухое, желательно до 5000 за бутылку</p>
      </ChatMessage>
      <SommelierMessage>
        <p>
          Попробуйте Просекко «Кюве дель Фондаторе» Грациано Меротто — 4-я
          позиция, идеально подходит под ваш запрос
        </p>
      </SommelierMessage>
      <ChatInput />
    </div>
  );
};

export default ChatOne;
