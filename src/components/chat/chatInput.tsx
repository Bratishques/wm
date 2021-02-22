const ChatInput = ({ className = '' }) => {
  return (
    <div
      style={{
        width: 320,
      }}
      className={`mx-auto w-full rounded-30px items-center flex justify-between p-2 pl-4 bg-chat-message-bg ${className}`}
    >
      <p className={`text-placeholder-gray`}>Введите сообщение...</p>
      <img src="/icons/send-icon.svg" alt="" />
    </div>
  );
};

export default ChatInput;
