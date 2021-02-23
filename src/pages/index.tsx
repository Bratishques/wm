import Cases from '@/components/indexSections/cases';
import HeroSection from '@/components/indexSections/heroSection';
import TagsCloudSection from '@/components/indexSections/tagsCloudSection';
import YoutubeSection from '@/components/indexSections/youtubeSection';
import Layout from '@/components/layout/layout';
import { MutableRefObject, useEffect, useRef } from 'react';

export default function Home() {
  return (
    <Layout>
      <main>
        <div>
          <div />
          <div>
            <HeroSection />
          </div>
        </div>
        <div>
          <Cases />
        </div>
        <div data-scroll-section>
          <TagsCloudSection />
        </div>

        <div data-scroll-section>
          <YoutubeSection />
        </div>
      </main>
    </Layout>
  );
}
