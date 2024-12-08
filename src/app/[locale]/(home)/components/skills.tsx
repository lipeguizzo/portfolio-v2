'use client';
import { Section, SectionContent, SectionHeader } from '@/components/section';
import { Paragraph, Title } from '@/components/texts';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { skillItems } from '@/data/skill.data';
import { useTranslations } from 'next-intl';

export function SkillsSection() {
  const translate = useTranslations('HomePage.SkillsSection');

  return (
    <Section id="skills" className="bg-black min-h-[480vh] md:min-h-[90vh]">
      <SectionHeader>
        <Title size="4xl" color="white" className="text-center">
          {translate('title')}
        </Title>
      </SectionHeader>
      <SectionContent className="flex-col md:flex-row justify-evenly items-center flex-wrap gap-5 p-5">
        {skillItems.map((item) => (
          <HoverCard key={item.label}>
            <HoverCardTrigger>
              <Card className="bg-transparent border-none cursor-pointer">
                <CardContent className="flex justify-center items-center min-w-[15vw] min-h-[15vh]">
                  {item.icon}
                </CardContent>
                <CardFooter className="flex justify-center items-center">
                  <Paragraph size="2xl" color="dark-orange">
                    {item.label}
                  </Paragraph>
                </CardFooter>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent>
              <Paragraph size="base" color="black">
                {translate(item.text)}
              </Paragraph>
            </HoverCardContent>
          </HoverCard>
        ))}
      </SectionContent>
    </Section>
  );
}
