import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Props {
  scrollNext: () => void;
}

export function CarouselNext({ scrollNext }: Props) {
  return (
    <Button
      onClick={scrollNext}
      className="w-[50px] h-[50px] rounded-full bg-dark-orange hover:bg-dark-orange"
    >
      <ArrowRight />
    </Button>
  );
}
