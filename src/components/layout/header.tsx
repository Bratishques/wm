import SidebarContext from '@/context/sidebarContext';
import { useContext } from 'react';
import LangSwitch from './langSwitch';

const Header = () => {
  const context = useContext(SidebarContext);
  return (
    <section className={`bg-white z-20 fixed`}>
      <div className={`pt-15 md:pt-9 pb-4 px-7 md:pb-4`}>
        <div className={`flex justify-between`}>
          <div className={`flex items-end`}>
            <img src={'/logo/logo-image.svg'} alt="Winemate" />
            <img
              className={`ml-3`}
              src={'/logo/logo-text.svg'}
              alt="Winemate"
            />
          </div>
          <div className={`flex items-end pb-1`}>
            <LangSwitch />
            <img
              onClick={context.setSidebarOpen}
              className={`cursor-pointer`}
              src={'/icons/burger-icon.svg'}
              alt="Winemate"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
