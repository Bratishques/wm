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
    if (localStorage.getItem('ageConfirmed') !== "true") {
      setModalOpen(true)
    }

  }, [])

  useEffect(() => {
    const mainTag = document.querySelector('body') as HTMLBodyElement;
    if (sidebarOpen || modalOpen) {

      mainTag.style.height = '100vh';
      mainTag.style.overflow = 'hidden';
    } else {
      mainTag.style.height = '';
      mainTag.style.overflow = '';

    }

  }, [modalOpen, sidebarOpen])

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  });

  const openSidebar = () => {
    setSidebarOpen(!sidebarOpen);
   
  };

  const openModal = () => {
    setModalOpen(!modalOpen);
    localStorage.setItem("ageConfirmed", "true")
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
