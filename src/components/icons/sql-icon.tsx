import Image from 'next/image';

interface Props {
  size?: number;
}

export function SqlIcon({ size = 100 }: Props) {
  return (
    <Image
      src="/assets/sql-icon.svg"
      alt="sql-icon.svg"
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
