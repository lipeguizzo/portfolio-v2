import { CarouselItem as EmblaCarouselItem } from '@/components/ui/carousel';
import { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

export function CarouselItem({ className = '', children }: Props) {
  return (
    <EmblaCarouselItem className={`${className}`}>{children}</EmblaCarouselItem>
  );
}
