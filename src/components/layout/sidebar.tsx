import SidebarContext from '@/context/sidebarContext';
import { useContext } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);

  const closeSidebar = () => {
    setSidebarOpen();
  };

  return (
    <div
      id={`sidebar-container`}
      className={`h-full flex flex-col fixed right-0 z-50 bg-white w-full px-5 pt-12 md:pt-16 sm:w-auto transition-all duration-300 md:duration-500 pb-8`}
      style={{
        marginRight: sidebarOpen ? '0%' : '-100%',
      }}
    >
      <div className={`flex justify-between items-start`}>
        <Link href={'/'}>
          <div className={`flex cursor-pointer`} onClick={closeSidebar}>
            <img className={`w-14 h-14`} src="/images/invest-logo.svg" alt="" />
            <p className={`pl-7 -mt-1 font-semibold`}>
              Бесплатные <br />
              рекомендации <br /> от сомелье
            </p>
          </div>
        </Link>
        <button className={`ml-12`} onClick={closeSidebar}>
          <img src="/icons/cross-icon.svg" alt="" />
        </button>
      </div>
      <div className={`mt-16 sm:mt-12 text-lead`}>
        <p
          className={`uppercase opacity-25 text-regular font-semibold tracking-widest`}
        >
          компания
        </p>
        <Link href={`/how-it-works`}>
          <p className={`cursor-pointer mt-5`} onClick={closeSidebar}>
            Как это работает
          </p>
        </Link>
        <Link href={`/news`}>
          <p className={`cursor-pointer mt-5`} onClick={closeSidebar}>
            Новости
          </p>
        </Link>
      </div>
      <div className={`mt-12 sm:mt-8 text-lead`}>
        <p
          className={`uppercase opacity-25 text-regular font-semibold tracking-widest`}
        >
          компания
        </p>
        <Link href={`/sommelier`}>
          <p className={`cursor-pointer mt-5`} onClick={closeSidebar}>
            Сомелье
          </p>
        </Link>
        <Link href={`/sales`}>
          <p className={`cursor-pointer mt-5`} onClick={closeSidebar}>
            Виноделу и продавцу
          </p>
        </Link>
        <Link href={`/investment`}>
          <p className={`cursor-pointer mt-5`} onClick={closeSidebar}>
            Инвестору
          </p>
        </Link>
      </div>

      <div className={`w-41.5 flex justify-between mt-auto`}>
        <a href="">
          <img className={`w-11`} src="/icons/facebook-icon.svg" alt="" />
        </a>

        <a href="">
          <img className={`w-11`} src="/icons/instagram-icon.svg" alt="" />
        </a>

        <a
          className={`w-11 flex items-center`}
          href="https://www.youtube.com/channel/UCJoTqbRHZA-f3_cl8dwzoCw"
        >
          <img src="/icons/youtube-icon.svg" alt="Youtube" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
