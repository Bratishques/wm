import Cases from '@/components/indexSections/cases';
import HeroSection from '@/components/indexSections/heroSection';
import TagsCloudSection from '@/components/indexSections/tagsCloudSection';
import YoutubeSection from '@/components/indexSections/youtubeSection';
import Layout from '@/components/layout/layout';

export default function Home() {
  return (
    <Layout>
      <main>
        <HeroSection />
        <Cases />
        <TagsCloudSection />
        <YoutubeSection />
      </main>
    </Layout>
  );
}
