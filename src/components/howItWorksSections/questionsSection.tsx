import Notice from './notice';
import Question from './question';

const QuestionSection = () => {
  const answer =
    'Winemate анализирует пожелания пользователей и отвечает на два вопроса — какое вино и у кого купить. Winemate действует на пересечении интересов покупателей и продавцов вин. Покупателям Winemate помогает с выбором, а продавцам с продажами вин.';

  return (
    <section className={`mt-12 px-7  lg:mt-10 flex flex-col items-center`}>
      <div className={`lg:px-0 w-full lg:w-8/12`}>
        <Notice />
        <div className={`mt-16`}>
          <h2 className={`md:mb-6 mb-3`}>Вопросы и ответы</h2>
          <Question question={`Как работает Winemate`}>
            <p>{answer}</p>
          </Question>
          <Question question={`Делает ли Winemate доставку вина`}>
            <p>{answer}</p>
          </Question>
          <Question question={`Сколько стоит рекомендация`}>
            <p>{answer}</p>
          </Question>
          <Question
            question={`Сколько стоит вино, которое рекомендует Winemate`}
          >
            <p>{answer}</p>
          </Question>
          <Question question={`Как быстро сомелье дают рекомендацию`}>
            <p>{answer}</p>
          </Question>
          <Question question={`Winemate рекомендует вино, или продавца вина?`}>
            <p>{answer}</p>
          </Question>
          <Question
            question={`Как Winemate узнает ассортимент магазина, ресторана, бара`}
          >
            <p>{answer}</p>
          </Question>
          <Question question={`Нужно ли устанавливать приложение`}>
            <p>{answer}</p>
          </Question>
          <Question question={`Дает ли Winemate скидки на вино`}>
            <p>{answer}</p>
          </Question>
          <Question
            question={`В каких мессенджерах можно получить рекомендацию`}
          >
            <p>{answer}</p>
          </Question>
          <Question question={`На каком языке Winemate даёт рекомендации`}>
            <p>{answer}</p>
          </Question>
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
