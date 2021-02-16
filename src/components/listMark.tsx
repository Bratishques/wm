import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const ListMark = ({ children, className = '' }: Props) => {
  return (
    <div className={`flex  ${className}`}>
      <div className={`w-3 h-3 mr-4 flex-shrink-0 pt-2.5`}>
        <img
          className={`min-h-full min-w-full`}
          src="/icons/check-icon.svg"
          alt=""
        />
      </div>

      {children}
    </div>
  );
};

export default ListMark;
