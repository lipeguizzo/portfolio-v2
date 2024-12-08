'use client';
import { Section, SectionContent } from '@/components/section';
import { Title } from '@/components/texts';
import { Button } from '@/components/ui/button';
import { ELocale } from '@/domain/enums/locale.enum';
import { useLocale, useTranslations } from 'next-intl';

export function SummaryDownloadSection() {
  const translate = useTranslations('SummaryPage.SummaryDownloadSection');
  const locale = useLocale() as ELocale;

  return (
    <Section
      id="summary-download"
      className="bg-black min-h-[70vh] md:min-h-[60vh]"
    >
      <SectionContent className="flex-col justify-center items-center gap-10">
        <Title
          size="5xl"
          color="white"
          className="absolute md:relative top-[180px] md:top-auto left-10 md:left-auto"
        >
          {translate('title')}
        </Title>
        <Button
          className="absolute md:relative top-[450px] md:top-auto left-10 md:left-auto w-[45vw] md:w-[15vw] text-xl bg-dark-orange hover:bg-white hover:text-black"
          asChild
        >
          <a href={`/assets/curriculum-${locale}.pdf`} download="curriculum">
            {translate('button')}
          </a>
        </Button>
      </SectionContent>
    </Section>
  );
}
