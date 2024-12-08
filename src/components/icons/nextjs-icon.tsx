import Image from 'next/image';

interface Props {
  size?: number;
}

export function NextJsIcon({ size = 100 }: Props) {
  return (
    <Image
      src="/assets/nextjs-icon.svg"
      alt="nextjs-icon.svg"
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
