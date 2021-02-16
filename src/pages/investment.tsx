import Layout from '@/components/layout/layout';
import ListMark from '@/components/listMark';
import Recommendations from '@/components/recommendations';

const Investment = () => {
  return (
    <Layout>
      <Recommendations />
      <section className={`mt-16`}>
        <div className={`lg:grid lg:grid-cols-12 gap-5 px-7 text-regular`}>
          <div className={`lg:col-span-2`}></div>
          <div className={`lg:col-span-9`}>
            <h1 className={`mb-12`}>Инвестору</h1>
            <h2>Цель и путь</h2>
            <div
              className={`md:grid md:grid-cols-9 md:gap-5 flex flex-col-reverse`}
            >
              <div className={`md:col-span-6 text-regular `}>
                <p>
                  {' '}
                  По данным исследований «Winemate», годовой объем мирового
                  рынка потребления вина составляет — $134 млрд. Наша
                  долгосрочная стратегия направлена на получение доли в — 10% от
                  этого объема. Для реализации планов в 2021 году
                  зарегистрирована материнская компания Wine Global Management
                  LLC в Гонконге. Стратегия Wine Global Management LLC
                  направлена на консолидацию взаимно поддерживающих активов на
                  международном рынке вина. Тактика предусматривает создание и
                  присоединение к Wine Global Management LLC внешних активов. В
                  настоящий момент, Wine Global Management LLC владеет двумя
                  активами — «Winemate» и «Здоров с вином».
                </p>
              </div>
              <img
                className={`col-span-3 mb-7 md:mb-0`}
                src="/images/invest-plan.svg"
                alt=""
              />
            </div>

            <div className={`mt-12`}>
              <img src="/images/invest-logo.svg" alt="" />
              <h2 className={`mt-4`}>Что такое Winemate?</h2>
              <div className={`md:grid md:grid-cols-9`}>
                <div className={`md:col-span-8`}>
                  <p>
                    «Winemate» — международный сервис, который помогает найти и
                    купить идеальное вино. «Winemate» анализирует пожелания
                    пользователей, и отвечает на два вопроса, — какое вино и у
                    кого купить. «Winemate» действует на пересечении интересов
                    покупателей и продавцов вин. Покупателям, «Winemate»
                    помогает с выбором, а продавцам с продажами вин. Подобные
                    бизнес-модели называют — маркетплейсами. «Winemate» работает
                    в сегменте WineTech и является самостоятельным, сервисным
                    бизнесом Wine Global Management LLC.
                  </p>
                </div>
              </div>
            </div>

            <div className={`mt-12`}>
              <h2>Что такое «Здоров с вином»?</h2>
              <div
                className={`md:grid md:grid-cols-9 md:gap-5 flex flex-col-reverse`}
              >
                <div className={`col-span-6 `}>
                  <p>
                    «Здоров с вином» — международародное лайфстайл-шоу о вине.
                    Выходит каждую среду на русском и английском языках на медиа
                    платформах в сети Интернет. Для шоу был разработан
                    оригинальный формат презентации вин. Шоу «Здоров с вином»
                    легко и с юмором помогает узнавать о винах. «Здоров с вином»
                    работает в сегменте новых медиа и является самостоятельным,
                    медиа бизнесом Wine Global Management LLC.
                  </p>
                </div>
                <img
                  className={`col-span-3 self-center mb-7 md:mb-0`}
                  src="/images/youtube-image.png"
                  alt=""
                />
              </div>
            </div>

            <div className={`mt-12`}>
              <h2 className={`mt-4`}>Экосистема продуктов на рынке вина</h2>
              <div className={`md:grid md:grid-cols-9`}>
                <div className={`md:col-span-8`}>
                  <p>
                    «Здоров с вином» взаимодействует с вниманием потребителей на
                    верхних уровнях воронки продаж, и является маркетинговым
                    каналом для «Winemate», которая обслуживает сформированный
                    спрос на максимально близком к транзакции, жизненном цикле
                    покупателя вин.
                  </p>
                </div>
              </div>
            </div>

            <div className={`mt-12`}>
              <h2 className={`mt-4`}>Присоединение активов</h2>
              <div className={`md:grid md:grid-cols-9`}>
                <div className={`md:col-span-8`}>
                  <p className={`mb-3`}>
                    С целью создания финансовой устойчивости и для исполнения
                    долгосрочной стратегии к Wine Global Management LLC будут
                    присоединяться следующие активы:
                  </p>
                  <div>
                    <ListMark className={`mb-2`}>
                      <p>
                        земли с виноградниками, а также винодельческие
                        хозяйства;
                      </p>
                    </ListMark>
                    <ListMark className={`mb-2`}>
                      <p>
                        сервисы WineTech-сегмента, расширяющие экосистему
                        продуктов Wine Global Management LLC на международном
                        рынке вина;
                      </p>
                    </ListMark>
                    <ListMark className={`mb-2`}>
                      <p>франшиза международной сети винных баров.</p>
                    </ListMark>
                  </div>
                </div>
              </div>
            </div>

            <div className={`mt-12`}>
              <h2 className={`mt-4`}>Развитие активов</h2>
              <div className={`md:grid md:grid-cols-9`}>
                <div className={`md:col-span-8`}>
                  <p className={`mb-3`}>
                    Для развития существующих, а также присоединения новых,
                    внешних активов к Wine Global LLC приглашаем к
                    сотрудничеству частных и институциональных инвесторов.
                  </p>
                  <p className={`mb-3`}>
                    Работа с Wine Global Management LLC — это:
                  </p>
                  <div>
                    <ListMark className={`mb-2`}>
                      <p>бизнес, структурированный по Англосаксонская праву;</p>
                    </ListMark>
                    <ListMark className={`mb-2`}>
                      <p>
                        материнская компания в международном финансовом центре;
                      </p>
                    </ListMark>
                    <ListMark className={`mb-2`}>
                      <p>конфиденциальность конечных бенефициаров;</p>
                    </ListMark>
                    <ListMark className={`mb-2`}>
                      <p>высокий уровень организационного интеллекта;</p>
                    </ListMark>
                    <ListMark className={`mb-2`}>
                      <p>удобная организационно-правовая форма;</p>
                    </ListMark>
                    <ListMark className={`mb-2`}>
                      <p>возможность приумножения капитала;</p>
                    </ListMark>
                    <ListMark className={`mb-2`}>
                      <p>прозрачная структура владения;</p>
                    </ListMark>
                    <ListMark className={`mb-2`}>
                      <p>зрелый менеджмент.</p>
                    </ListMark>
                  </div>
                </div>
              </div>
            </div>

            <div className={`mt-12`}>
              <div className={`flex`}>
                <img
                  className={`w-14 h-14 flex-shrink-0 mr-2.5`}
                  src="/images/founder.png"
                  alt=""
                />
                <div>
                  <p className={`text-regular font-bold`}>Евгений Здоров</p>
                  <p className={`text-regular mb-1`}>
                    {' '}
                    Фаундер Wine Global Management Limited
                  </p>
                  <div className={`flex`}>
                    <a href="">
                      <img
                        className={`w-14 h-14 mr-3`}
                        src="/icons/whatsapp-icon.svg"
                        alt=""
                      />
                    </a>
                    <a href="">
                      <img
                        className={`w-14 h-14`}
                        src="/icons/telegram-icon.svg"
                        alt=""
                      />
                    </a>
                  </div>
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

export default Investment;
