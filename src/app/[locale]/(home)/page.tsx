import { ContactSection } from '../components';
import {
  HomeSection,
  SkillsSection,
  AboutSection,
  ProjectsSection,
  SummaryDetailsSection,
} from './components';

export default function HomePage() {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <SummaryDetailsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
