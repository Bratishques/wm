import Layout from '@/components/layout/layout';
import ListMark from '@/components/listMark';
import Messengers from '@/components/messengers';
import Recommendations from '@/components/recommendations';

const Sales = () => {
  return (
    <Layout>
      <Recommendations />
      <section className={`mt-16`}>
        <div className={`lg:grid lg:grid-cols-12 gap-5 px-7 text-regular`}>
          <div className={`lg:col-span-2`}></div>
          <div className={`lg:col-span-9`}>
            <div className={`md:grid md:grid-cols-9 md:gap-5 flex flex-col`}>
              <div className={`md:col-span-6 text-regular `}>
                <h1 className={`mb-12`}>Виноделу и продавцу</h1>
                <div className={``}>
                  <h2 className={`mb-6`}>Увеличиваем продажи вина</h2>
                  <p className={`text-lead`}>
                    {' '}
                    Winemate анализирует пожелания своих пользователей и
                    отвечает на два вопроса — какое вино и у кого купить
                  </p>
                </div>
                <div className={`absolute block sm:hidden w-full -ml-7`}>
                  <Messengers />
                </div>
                <div
                  className={`col-span-3 mb-7 md:mb-0 flex flex-col items-center md:hidden block mt-12`}
                >
                  <img
                    className={`mb-7`}
                    src="/images/sales-diagram.svg"
                    alt=""
                  />
                  <div className={`font-medium text-xs text-center`}>
                    Winemate помогает покупателям с выбором вина, а продавцам —
                    с продажами
                  </div>
                </div>
                <div className={`mt-12`}>
                  <h2>Winemate поможет увеличить продажи вина</h2>
                  <div>
                    <ListMark className={`mb-3`}>
                      <p className={`text-regular`}>
                        Операторам розничной и мелкооптовой торговли
                      </p>
                    </ListMark>
                    <ListMark className={`mb-3`}>
                      <p className={`text-regular`}>
                        Представителям HoReCa-индустрии (рестораны, бары)
                      </p>
                    </ListMark>
                    <ListMark className={``}>
                      <p className={`text-regular`}>Производителям вина</p>
                    </ListMark>
                    <div className={`sm:block hidden mt-16`}>
                      <Messengers header={`Свяжитесь с нами`} />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`col-span-3 mb-7 md:mb-0 flex flex-col items-center hidden md:block`}
              >
                <img
                  className={`mb-7`}
                  src="/images/sales-diagram.svg"
                  alt=""
                />
                <div className={`font-medium text-xs text-center`}>
                  Winemate помогает покупателям с выбором вина, а продавцам — с
                  продажами
                </div>
              </div>
            </div>
          </div>
          <div className={`lg:col-span-1`}></div>
        </div>
      </section>
    </Layout>
  );
};

export default Sales;
