import SidebarContext from '@/context/sidebarContext';
import Link from 'next/link';
import { useContext } from 'react';
import LangSwitch from './langSwitch';

const Header = () => {
  const context = useContext(SidebarContext);
  return (
    <section data-scroll-sticky className={`bg-white z-20 `}>
      <div
        className={`pt-4 z-20 md:pt-9 pb-4 px-7 md:pb-4 w-full top-0 fixed bg-white `}
      >
        <div className={`flex justify-between`}>
          <Link href={`/`}>
            <div className={`flex items-end cursor-pointer`}>
              <img src={'/logo/logo-image.svg'} alt="Winemate" />
              <img
                className={`ml-3`}
                src={'/logo/logo-text.svg'}
                alt="Winemate"
              />
            </div>
          </Link>
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
