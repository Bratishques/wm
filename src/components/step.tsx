interface Step {
  number: number;
  text: string;
}

const Step = ({ number, text }: Step) => {
  return (
    <div className={`text-regular flex`}>
      <div
        className={`w-6 h-6 px-3 flex justify-center text-white bg-pastel-wine rounded-full`}
      >
        <p className={``}>{number}</p>
      </div>
      <div className={`ml-4`}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Step;
