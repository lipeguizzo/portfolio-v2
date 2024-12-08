'use client';
import { Container } from '@/components/containers';
import { Section, SectionContent } from '@/components/section';
import { Paragraph, Title } from '@/components/texts';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function AboutSection() {
  const translate = useTranslations('HomePage.AboutSection');
  const { isMobile } = useMediaQuery();

  return (
    <Section id="about" className="bg-white min-h-[90vh] md:min-h-[60vh]">
      <SectionContent className="justify-evenly">
        {!isMobile && (
          <Container justify="center" items="center">
            <Image
              src="/assets/about.webp"
              alt="about.webp"
              width={500}
              height={500}
              className="w-auto h-auto"
            />
          </Container>
        )}
        <Container
          direction="column"
          justify="space-evenly"
          items="center"
          className="relative w-full md:w-[50vw] min-h-[80vh] md:min-h-[50vh] p-5"
        >
          <Title
            size={isMobile ? '4xl' : '5xl'}
            color="dark-orange"
            className="absolute md:relative top-[20px] md:top-auto left-10 md:left-auto md:text-center"
          >
            {translate('title')}
          </Title>
          <Paragraph
            size="3xl"
            color="black"
            className="absolute md:relative top-[15 0px] md:top-auto left-10 md:left-auto pr-5 md:p-1 md:text-center"
          >
            {translate.rich('summary', {
              span: (chunks) => (
                <span className="text-dark-orange">{chunks}</span>
              ),
            })}
          </Paragraph>
        </Container>
      </SectionContent>
    </Section>
  );
}
