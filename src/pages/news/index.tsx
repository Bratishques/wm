import Layout from '@/components/layout/layout';
import Recommendations from '@/components/recommendations';
import Link from 'next/link';

export interface newsArticle {
  image: string;
  header: string;
  content: string;
  slug: string;
  date: string;
}
export interface Props {
  news: newsArticle[];
}

export default function News({ news }: Props) {
  return (
    <Layout>
      <div data-scroll-section>
        <Recommendations />
        <section className={`mt-15`}>
          <div>
            <h2 className={`px-7 md:px-9`}>Новости</h2>
          </div>
          <div>
            <div
              className={`md:mt-12 flex items-center flex-col md:px-7 md:grid xl:grid-cols-3 md:grid-cols-2 md:gap-5`}
            >
              {news.map((article, i) => {
                return (
                  <Link href={`/news/${article.slug}`}>
                    <div
                      key={`article${article.header}`}
                      //Это убожество по другому работать не хочет
                      className={`mt-12 md:mt-0 max-w-375px md:max-w-full w-full bg-fill-full md:bg-fill-full lg:bg-fill-half xl:bg-fill-full py-7 px-9 min-h-450px flex flex-col justify-end cursor-pointer`}
                      style={{
                        backgroundRepeat: `no-repeat`,
                        backgroundPosition: `center`,
                        background: `linear-gradient(180.06deg, rgba(0, 0, 0, 0) 50.08%, #000000 99.95%), url(${article.image})`,
                      }}
                    >
                      <h1 className={`text-white`}>{article.header}</h1>
                      <div className={`text-notice-gray text-chat-name`}>
                        {article.date}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const news: newsArticle[] = [
    {
      header: 'Мы открываемся в Грузии',
      image: '/images/news/1.png',
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
  return {
    props: {
      news,
    },
  };
}
