import { ReactNode, useState } from 'react';

interface Question {
  children: ReactNode;
  question: string;
}

const Question = ({ question, children }: Question) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`w-full mb-6`}>
      <div className={`flex justify-between items-center`}>
        <p className={`text-lead pr-4`}>{question}</p>
        <button
          className={`min-w-max`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img
            className={`w-full text-regular ${
              isOpen ? 'rotate-45' : ''
            } transform transition-transform duration-200`}
            src="/icons/plus-icon.svg"
            alt=""
          />
        </button>
      </div>
      <div
        className={`w-full transition-all duration-700 overflow-hidden ${
          !isOpen ? `max-h-0` : `max-h-screen`
        }`}
      >
        <div className={`font-medium pt-3 md:pt-4`}>{children}</div>
      </div>
      <div className={`h-1 mt-4 bg-pastel-wine w-full`}></div>
    </div>
  );
};

export default Question;
