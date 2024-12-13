'use client';
import { Carousel, CarouselItem } from '@/components/carousel';
import { Container } from '@/components/containers';
import { Section, SectionContent, SectionHeader } from '@/components/section';
import { Paragraph, Title } from '@/components/texts';
import { projectItems } from '@/data/project.data';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export function ProjectsSection() {
  const translate = useTranslations('HomePage.ProjectsSection');
  const { isMobile } = useMediaQuery();

  return (
    <Section id="projects" className="bg-black min-h-[150vh] md:min-h-[70vh]">
      <SectionHeader className="min-h-[10vh]">
        <Title size="4xl" color="white" className="text-center">
          {translate('title')}
        </Title>
      </SectionHeader>
      <SectionContent className="relative min-h-[140vh] md:min-h-[60vh]">
        <Carousel>
          {projectItems.map((project) => (
            <CarouselItem
              key={project.name}
              className="flex flex-col md:flex-row justify-start md:justify-evenly items-center gap-5 md:gap-10"
            >
              <Container
                direction="column"
                justify="center"
                items={isMobile ? 'center' : 'start'}
                className="w-[80vw] md:w-[40vw] min-h-[50vh] md:min-h-[30vh] gap-5"
              >
                <Title color="dark-orange" className="text-center md:text-left">
                  {translate(project.name)}
                </Title>
                <Paragraph color="white" className="text-center md:text-left">
                  {translate(project.text)}
                </Paragraph>
                {project.links.map((link) => (
                  <Link key={link} href={link} legacyBehavior passHref>
                    <a
                      target="_blank"
                      className="text-dark-orange text-center md:text-left"
                    >
                      {link}
                    </a>
                  </Link>
                ))}
              </Container>
              <Container
                justify="center"
                items="center"
                className="w-[80vw] md:w-[30vw] h-[25vh] md:h-[40vh] rounded-2xl overflow-hidden"
              >
                <Image
                  src={`/assets/${project.image}`}
                  alt={project.image}
                  width={500}
                  height={500}
                  className="object-fill w-full h-full"
                />
              </Container>
            </CarouselItem>
          ))}
        </Carousel>
      </SectionContent>
    </Section>
  );
}
