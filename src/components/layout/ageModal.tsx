import SidebarContext from '@/context/sidebarContext';
import { useContext } from 'react';
import TagButton from '../tagButton';

const AgeModal = () => {
  const { modalOpen, setModalOpen } = useContext(SidebarContext);
  return (
    <div
      className={`z-50 fixed w-full h-full bg-transparent flex justify-center items-end md:items-center ${
        modalOpen ? '' : 'hidden'
      }`
    
    }
    >
      <div
        style={{
          maxWidth: '475px',
        }}
        className={`z-50 bg-notice-gray w-full fixed md:pt-12 pt-6 pb-6 md:pb-8 flex flex-col rounded-30px`}
      >
        <div className={`text-lead text-center mb-4 font-bold md:px-10 px-6`}>
          Для доступа на сайт необходимо подтвердить возраст
        </div>
        <div className={`text-caption text-center mb-4 md:px-20 px-6`}>
          На сайте содержится информация, не рекомендованная для лиц, не
          достигших совершеннолетнего возраста
        </div>
        <div className={`w-full flex justify-center`}>
          <TagButton className={`font-semibold`} handler={setModalOpen}>
            Да, мне есть 18
          </TagButton>
        </div>
      </div>
    </div>
  );
};

export default AgeModal;
