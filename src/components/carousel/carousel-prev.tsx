import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface Props {
  scrollPrev: () => void;
}

export function CarouselPrev({ scrollPrev }: Props) {
  return (
    <Button
      onClick={scrollPrev}
      className="w-[50px] h-[50px] rounded-full bg-dark-orange hover:bg-dark-orange"
    >
      <ArrowLeft />
    </Button>
  );
}
