import Layout from '@/components/layout/layout';
import Recommendations from '@/components/recommendations';
import { GetStaticProps } from 'next';

export default function NewsArticle({ article }: Props) {
  return (
    <Layout>
      <Recommendations />
      <section className={`sm:mt-20 sm:px-9`}>
        <div className={`lg:w-8/12 mx-auto hidden sm:block w-full`}>
          <h1>{article.header}</h1>
          <img
            className={`max-h-450px w-full object-cover`}
            src={`${article.image}`}
            alt=""
          />
        </div>
        <div
          className={`px-8 mt-3 py-12 block sm:hidden h-screen flex flex-col justify-end`}
          style={{
            background: `linear-gradient(180.06deg, rgba(0, 0, 0, 0) 50.08%, #000000 99.95%), url(${article.image})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
          }}
        >
          <h1 className={`text-white`}>{article.header}</h1>
          <div className={`text-notice-gray text-chat-name`}>
            {article.date}
          </div>
        </div>
        <div
          className={`article lg:w-8/12 mx-auto w-full font-medium mt-12 lg:mt-18 px-9 lg:px-0`}
        >
          <p>
            В связи с приостановкой прямого регулярного сообщения между Грузией
            и Республикой Беларусь, а также введении запрета на въезд для
            иностранцев до конца августа, приобретать туры в Грузию на август
            пока невозможно. Об этом сообщил Чрезвычайный и полномочный посол
            Грузии в Беларуси Валерий Кварацхелия. — В Грузии фиксируется
            всплеск заболеваемости, — рассказал посол, — вчера, к примеру, было
            24 случая — по нашим критериям, это существенные показатели. По
            словам В. Кварацхелия, специальная комиссия по здравоохранению
            приняла решение не открывать границы до конца августа. Именно
            поэтому рейсы по маршруту Минск — Батуми отменяются до 31 августа
            2020 г. Грузинский посол считает, что если ситуация существенно
            улучшится, то может произойти корректировка открытия границ.
          </p>
          <h2>Другие текущие ограничения включают в себя</h2>
          <p>
            В связи с приостановкой прямого регулярного сообщения между Грузией
            и Республикой Беларусь, а также введении запрета на въезд для
            иностранцев до конца августа, приобретать туры в Грузию на август
            пока невозможно. Об этом сообщил Чрезвычайный и полномочный посол
            Грузии в Беларуси Валерий Кварацхелия. — В Грузии фиксируется
            всплеск заболеваемости, — рассказал посол, — вчера, к примеру, было
            24 случая — по нашим критериям, это существенные показатели. По
            словам В. Кварацхелия, специальная комиссия по здравоохранению
            приняла решение не открывать границы до конца августа. Именно
            поэтому рейсы по маршруту Минск — Батуми отменяются до 31 августа
            2020 г. Грузинский посол считает, что если ситуация существенно
            улучшится, то может произойти корректировка открытия границ.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export interface newsArticle {
  image: string;
  header: string;
  content: string;
  slug: string;
  date: string;
}
export interface Props {
  article: newsArticle;
}

const news: newsArticle[] = [
  {
    header: 'Мы открываемся в Грузии',
    image: '/images/news/detail-1.png',
    slug: '1',
    content: 'Hello world',
    date: '23.10.2020',
  },
  {
    header: '1000 сомелье присоединились к нам в 2020',
    image: '/images/news/2.png',
    slug: '2',
    content: 'Hello world',
    date: '23.10.2020',
  },
  {
    header: 'Мы добавили месседжер WhatsApp',
    image: '/images/news/3.png',
    slug: '3',
    content: 'Hello world',
    date: '23.10.2020',
  },
];

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params);
  const article = news[Number(params.slug) - 1];
  console.log(article);
  return {
    props: {
      article: article,
    }, // will be passed to the page component as props
  };
};

export async function getStaticPaths() {
  const paths = news.map((article) => {
    return {
      params: {
        slug: article.slug,
      },
    };
  });
  return {
    paths: paths,
    fallback: true,
  };
}
