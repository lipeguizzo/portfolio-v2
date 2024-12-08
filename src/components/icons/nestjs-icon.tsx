import Image from 'next/image';

interface Props {
  size?: number;
}

export function NestJsIcon({ size = 100 }: Props) {
  return (
    <Image
      src="/assets/nestjs-icon.svg"
      alt="nestjs-icon.svg"
      style={{
        width: `${size}px`,
        height: 'auto',
        objectFit: 'cover',
      }}
      width={0}
      height={0}
    />
  );
}
