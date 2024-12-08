import Image from 'next/image';

interface Props {
  size?: number;
}

export function JavaIcon({ size = 100 }: Props) {
  return (
    <Image
      src="/assets/java-icon.svg"
      alt="java-icon.svg"
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
