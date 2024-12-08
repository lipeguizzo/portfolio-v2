import { ContactSection } from '../components';
import {
  HomeSection,
  SummarySection,
  SummaryDownloadSection,
} from './components';

export default function ResumePage() {
  return (
    <main>
      <HomeSection />
      <SummarySection />
      <SummaryDownloadSection />
      <ContactSection />
    </main>
  );
}
