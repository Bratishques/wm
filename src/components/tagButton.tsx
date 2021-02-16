import { ReactNode } from 'react';

interface Childern {
  children: ReactNode;
}

const TagButton = ({ children }: Childern) => {
  return (
    <button
      className={`border rounded-30px border-wine text-wine px-3 py-2.5 font-medium mr-2.5 whitespace-nowrap`}
    >
      {children}
    </button>
  );
};

export default TagButton;
