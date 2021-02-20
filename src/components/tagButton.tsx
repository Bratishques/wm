import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  handler?: Function
}

const TagButton = ({ children, className, handler=()=>{} }: Props) => {
  return (
    <button
      onClick={() => handler()}
      className={`border rounded-30px border-wine text-wine px-3 py-2.5 font-medium mr-2.5 whitespace-nowrap ${className}`}
    >
      {children}
    </button>
  );
};

export default TagButton;
