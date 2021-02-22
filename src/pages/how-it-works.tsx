import QuestionSection from '@/components/howItWorksSections/questionsSection';
import StepsSection from '@/components/howItWorksSections/stepsSection';
import Layout from '@/components/layout/layout';
import Recommendations from '@/components/recommendations';

export default function HowItWorks() {
  return (
    <Layout>
      <Recommendations />
      <section className={`mt-18.5 flex justify-center`} data-scroll-section>
        <div className={`px-7 w-full lg:w-8/12`}>
          <h1 className={`mx-auto`}>Как это работает</h1>
          <p className={`mx-auto text-lead`}>
            Мы бесплатно порекомендуем вам вино, в какой бы точке мира вы ни
            находились
          </p>
        </div>
      </section>
      <StepsSection />
      <QuestionSection />
    </Layout>
  );
}
