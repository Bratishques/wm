import SidebarContext from '@/context/sidebarContext';
import { useContext } from 'react';

const Overlay = () => {
  const { sidebarOpen, modalOpen } = useContext(SidebarContext);

  return (
    <div
      className={`w-full top-0 h-screen bg-black fixed z-30 opacity-25 ${
        sidebarOpen || modalOpen ? '' : 'hidden'
      } animate-overlay-appear`}
    ></div>
  );
};

export default Overlay;
