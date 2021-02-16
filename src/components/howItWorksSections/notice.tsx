const Notice = () => {
  return (
    <div className={`w-full bg-notice-gray p-5 rounded-2xl`}>
      <div className={`flex items-center mb-2`}>
        <img src="/icons/info-circle-icon.svg" alt="" />
        <h2 className={`ml-3`}>Важно</h2>
      </div>
      <div>
        <p>
          Winemate не продает и не доставляет вино. Мы только даем рекомендации
          относительно самого вина.
        </p>
      </div>
    </div>
  );
};

export default Notice;
