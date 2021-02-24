import Cases from '@/components/indexSections/cases';
import HeroSection from '@/components/indexSections/heroSection';
import TagsCloudSection from '@/components/indexSections/tagsCloudSection';
import YoutubeSection from '@/components/indexSections/youtubeSection';
import Layout from '@/components/layout/layout';
import Messengers from '@/components/messengers';
import { MutableRefObject, useEffect, useRef } from 'react';

export default function Home() {
  return (
    <Layout>
      <main>
        <div
        className={`lg:h-screen relative overflow-hidden
        `}
        data-scroll-section>
          <div 
          className={` absolute`}
          style={{
            bottom: "-100vh",
            top: "-94px",
            right: 0,
            left: 0,
          }}
          
          id="fixed">

          </div>
            <div
            style={{
              top: "0px",
              right: 0,
              left: 0,
            }}
            className={`h-full lg:absolute`} data-scroll data-scroll-sticky data-scroll-target="#fixed">
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
        <div className={`sm:block z-40 hidden fixed bottom-0`}>
            <Messengers className={`rounded-r-30px`} />
          </div>
      </main>
    </Layout>
  );
}
