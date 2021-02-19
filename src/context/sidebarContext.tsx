import React, { useEffect, useState } from 'react';

const SidebarContext = React.createContext({
  sidebarOpen: false,
  setSidebarOpen: () => {},
  modalOpen: false,
  setModalOpen: () => {},
  scroll: 0,
});

const SidebarContextProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  const scrollListener = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  });

  const openSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    const mainTag = document.querySelector('body') as HTMLBodyElement;
    const layout = document.getElementById('layout') as HTMLDivElement;
    const sidebar = document.getElementById(
      'sidebar-container',
    ) as HTMLDivElement;
    if (!sidebarOpen) {
      //layout.style.marginTop = -window.scrollY + "px"
      //sidebar.style.top = window.scrollY + "px"
      //layout.style.maxHeight = sidebar?.scrollHeight + window.scrollY + "px"
      //layout.style.overflow = "hidden"
      //window.scrollTo(0,0)
      mainTag.style.height = '100vh';
      mainTag.style.overflow = 'hidden';
    } else {
      mainTag.style.height = '';
      mainTag.style.overflow = '';
      //sidebar.style.top = ""
      //layout.style.marginTop = ""
      //layout.style.maxHeight = ""
      //layout.style.overflow = ""
    }
  };

  const openModal = () => {
    setModalOpen(!modalOpen);
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
