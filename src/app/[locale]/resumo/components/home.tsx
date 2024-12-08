'use client';
import { Container } from '@/components/containers';
import {
  Section,
  SectionBackground,
  SectionContent,
} from '@/components/section';
import { Title } from '@/components/texts';
import { Button } from '@/components/ui/button';
import { ELocale } from '@/domain/enums/locale.enum';
import { useLocale, useTranslations } from 'next-intl';
import useSWR from 'swr';

export function HomeSection() {
  const translate = useTranslations('SummaryPage.HomeSection');
  const locale = useLocale() as ELocale;

  const fetcher = (url: string) =>
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => URL.createObjectURL(blob));

  const { data: imageUrl } = useSWR('/assets/summary-banner.gif', fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 60 * 60 * 1000,
  });

  return (
    <Section id="home" className="min-h-[80vh] md:min-h-[60vh]">
      <SectionContent className="justify-evenly">
        <Container
          direction="column"
          justify="center"
          items="center"
          className="relative w-full md:w-[40vw] min-h-[50vh] md:min-h-[50vh] gap-5"
        >
          <Title
            size="5xl"
            color="white"
            className="absolute md:relative top-[80px] md:top-auto left-10 md:left-auto"
          >
            {translate('title')}
          </Title>
          <Button
            className="absolute md:relative top-[350px] md:top-auto left-10 md:left-auto w-[45vw] md:w-[15vw] text-xl bg-dark-orange hover:bg-white hover:text-black"
            asChild
          >
            <a href={`/assets/curriculum-${locale}.pdf`} download="curriculum">
              {translate('button')}
            </a>
          </Button>
        </Container>
      </SectionContent>

      <SectionBackground
        src={!imageUrl ? '/assets/summary-banner-loading.webp' : imageUrl}
        alt="about-banner"
      />
    </Section>
  );
}
