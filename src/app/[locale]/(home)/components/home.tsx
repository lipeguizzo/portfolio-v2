'use client';
import { Container } from '@/components/containers';
import {
  Section,
  SectionBackground,
  SectionContent,
} from '@/components/section';
import { Paragraph, Title } from '@/components/texts';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import useSWR from 'swr';

export function HomeSection() {
  const translate = useTranslations('HomePage.HomeSection');
  const { isMobile } = useMediaQuery();

  const fetcher = (url: string) =>
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => URL.createObjectURL(blob));

  const { data: imageUrl } = useSWR('/assets/home-banner.gif', fetcher, {
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
            className="absolute md:relative top-[40px] md:top-auto left-10 md:left-auto"
          >
            {translate.rich(isMobile ? 'title-mobile' : 'title', {
              br: (chunks) => (
                <>
                  <br />
                  {chunks}
                </>
              ),
            })}
          </Title>
          <Paragraph
            size="4xl"
            color="dark-orange"
            className="absolute md:relative top-[280px] md:top-auto left-10 md:left-auto"
          >
            {translate.rich(isMobile ? 'subtitle-mobile' : 'subtitle', {
              br: (chunks) => (
                <>
                  <br />
                  {chunks}
                </>
              ),
            })}
          </Paragraph>
        </Container>

        {!isMobile && (
          <Container justify="center" items="center">
            <Image
              src="/assets/profile-blob.webp"
              alt="profile-blob.webp"
              width={500}
              height={500}
              className="w-[25vw] h-auto"
            />
          </Container>
        )}
      </SectionContent>

      <SectionBackground
        src={!imageUrl ? '/assets/home-banner-loading.webp' : imageUrl}
        alt="about-banner"
      />
    </Section>
  );
}
