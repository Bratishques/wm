import Layout from '@/components/layout/layout';
import ListMark from '@/components/listMark';
import Messengers from '@/components/messengers';
import Recommendations from '@/components/recommendations';

const Sommelier = () => {
  return (
    <Layout>
      <Recommendations />
      <section className={`mt-20`}>
        <div className={`px-7 w-full mx-auto lg:w-8/12`}>
          <h1>Сомелье</h1>
          <p className={`text-lead`}>
            Приглашаем на работу в Winemate — международный онлайн-сервис,
            который помогает найти и купить идеальное вино
          </p>
          <div className={`grid grid-cols-2 gap-5 mt-6`}>
            <div>
              <div className={`mb-3 w-full h-1 bg-wine`}></div>
              <p className={`text-lead text-wine`}>Удаленная работа</p>
            </div>
            <div>
              <div className={`mb-3  w-full h-1 bg-wine`}></div>
              <p className={`text-lead text-wine`}>45 000 ₽ в месяц</p>
            </div>
          </div>
          <div className={`mt-16`}>
            <h2>Обязанности</h2>
            <p>Онлайн-консультации пользователей Winemate в мессенджерах</p>
          </div>
          <div className={`mt-16`}>
            <h2>Требования</h2>
            <div>
              <ListMark className={`mb-4`}>
                <p>Любовь к вину и людям</p>
              </ListMark>
              <ListMark className={`mb-4`}>
                <p>Желание помогать с выбором идеального вина</p>
              </ListMark>
              <ListMark className={`mb-4`}>
                <p>Грамотный письменный язык</p>
              </ListMark>
            </div>
          </div>
          <div className={`mt-16`}>
            <h2>Условия</h2>
            <div>
              <ListMark className={`mb-4`}>
                <p>Удаленная работа</p>
              </ListMark>
              <ListMark className={`mb-4`}>
                <p>Обучение в компании</p>
              </ListMark>
              <ListMark className={`mb-4`}>
                <p>Грамотный письменный язык</p>
              </ListMark>
              <ListMark className={`mb-4`}>
                <p>Возможность подработки</p>
              </ListMark>
            </div>
          </div>
          <div className={`mt-12`}>
            <Messengers header={`Присылайте резюме`} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sommelier;
