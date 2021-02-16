import TagsCloud from './tagsCloud';

const TagsCloudSection = () => {
  return (
    <section className={`mt-12 md:mt-23 overflow-hidden`}>
      <div className={`w-full flex flex-col items-center`}>
        <h2 className={`md:hidden text-center`}>
          Мы учитываем все ваши пожелания
        </h2>
        <h2 className={`hidden md:block text-center`}>
          Наши сомелье работают со всеми <br /> возможными пожеланиями
        </h2>
        <div
          className={`overflow-x-scroll lg:overflow-hidden w-full lg:flex justify-center`}
        >
          <TagsCloud />
        </div>
      </div>
    </section>
  );
};

export default TagsCloudSection;
