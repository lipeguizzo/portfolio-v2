import Image from 'next/image';

interface Props {
  size?: number;
}

export function SpringIcon({ size = 100 }: Props) {
  return (
    <Image
      src="/assets/spring-icon.svg"
      alt="spring-icon.svg"
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
