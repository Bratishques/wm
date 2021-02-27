import { MutableRefObject, useRef } from 'react';
import TagsCloud from './tagsCloud';

const TagsCloudSection = () => {
  const containRef = useRef() as MutableRefObject<HTMLDivElement>;
  return (
    <section className={`pt-12 md:pt-23 overflow-hidden bg-white`}>
      <div className={`w-full flex flex-col items-center`}>
        <h2 className={`md:hidden text-center`}>
          Мы учитываем все ваши пожелания
        </h2>
        <h2 className={`hidden md:block text-center`}>
          Наши сомелье работают со всеми <br /> возможными пожеланиями
        </h2>
        <div
          ref={containRef}
          className={`overflow-hidden w-full flex justify-center`}
        >
          <TagsCloud containRef={containRef} />
        </div>
      </div>
    </section>
  );
};

export default TagsCloudSection;
