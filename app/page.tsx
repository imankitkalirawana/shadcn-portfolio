import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Testimonials,
  Projects,
  Contact,
  Footer
} from '@/components/sections';

import Preloader from '@/components/preloader/preloader';
import Cursor from '@/components/cursor/cursor';
import SmoothScroll from '@/components/smooth-scroll';
import { getAbout, getProjects } from '@/functions/get';

export default async function Home() {
  const about = await getAbout();
  const projects = await getProjects();

  return (
    <SmoothScroll>
      <Preloader />
      <div className="flex min-h-[100dvh] flex-col">
        <Header loader={true} />
        <main className="flex-1">
          <Hero data={about} />
          <About data={about} />
          <Projects data={projects} />
          <Skills />
          <Experience />
          <Testimonials />
          <Contact />
          <Footer />
        </main>
      </div>
      <Cursor />
    </SmoothScroll>
  );
}
