import React, { ReactNode, useEffect, useState } from 'react';

const SidebarContext = React.createContext({
  sidebarOpen: false,
  setSidebarOpen: () => {},
  modalOpen: false,
  setModalOpen: () => {},
  scroll: 0,
});

interface Props {
  children: ReactNode;
}

const SidebarContextProvider = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  const scrollListener = () => {
    setScroll(window.scrollY);
    if (window.scrollY < window.innerHeight - 92) {
    }
  };

  useEffect(() => {
    if (
      document.getElementsByClassName(`c-scrollbar`) &&
      document.getElementsByClassName(`c-scrollbar`).length >= 1
    ) {
      document.getElementsByClassName(`c-scrollbar`)[0].remove();
    }
  });

  useEffect(() => {
    const appHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    window.addEventListener('resize', appHeight);
    appHeight();
    return () => {
      window.removeEventListener('resize', appHeight);
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem('ageConfirmed') !== 'true') {
      setModalOpen(true);
    }
  }, []);

  useEffect(() => {
    const mainTag = document.querySelector('body') as HTMLBodyElement;
    if (sidebarOpen || modalOpen) {
      mainTag.style.maxHeight = 'fill-available';
      mainTag.style.overflow = 'hidden';
    } else {
      mainTag.style.maxHeight = '';
      mainTag.style.overflow = '';
    }
  }, [modalOpen, sidebarOpen]);

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    setScroll(window.scrollY);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  });

  const openSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const openModal = () => {
    setModalOpen(!modalOpen);
    localStorage.setItem('ageConfirmed', 'true');
  };
  return (
    <SidebarContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen: openSidebar,
        modalOpen,
        setModalOpen: openModal,
        scroll,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;

export { SidebarContextProvider };
