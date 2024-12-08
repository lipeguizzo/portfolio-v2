import {
  CarouselApi,
  CarouselContent,
  Carousel as EmblaCarousel,
} from '@/components/ui/carousel';
import { ReactNode, useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { CarouselPrev, CarouselNext } from '.';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Container } from '../containers';

interface Props {
  orientation?: 'vertical' | 'horizontal';
  className?: string;
  children: ReactNode;
}

export function Carousel({
  orientation = 'horizontal',
  className = '',
  children,
}: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  const { isMobile } = useMediaQuery();
  return (
    <EmblaCarousel
      setApi={setApi}
      orientation={orientation}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row justify-between items-center overflow-hidden p-5"
      opts={{
        loop: true,
      }}
    >
      {!isMobile && <CarouselPrev scrollPrev={() => api?.scrollPrev()} />}
      <CarouselContent className={`${className}`}>{children}</CarouselContent>
      {!isMobile && <CarouselNext scrollNext={() => api?.scrollNext()} />}
      {isMobile && (
        <Container className="gap-5">
          <CarouselPrev scrollPrev={() => api?.scrollPrev()} />
          <CarouselNext scrollNext={() => api?.scrollNext()} />
        </Container>
      )}
    </EmblaCarousel>
  );
}
