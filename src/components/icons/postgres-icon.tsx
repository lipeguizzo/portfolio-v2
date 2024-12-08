import Image from 'next/image';

interface Props {
  size?: number;
}

export function PostgresIcon({ size = 100 }: Props) {
  return (
    <Image
      src="/assets/postgres-icon.svg"
      alt="postgres-icon.svg"
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
