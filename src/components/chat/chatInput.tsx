const ChatInput = () => {
  return (
    <div
      className={`w-full rounded-30px items-center flex justify-between p-2 pl-4 bg-chat-message-bg`}
    >
      <p className={`text-placeholder-gray`}>Введите сообщение...</p>
      <img src="/icons/send-icon.svg" alt="" />
    </div>
  );
};

export default ChatInput;
