import Image from 'next/image';

interface Props {
  size?: number;
}

export function ExpressIcon({ size = 100 }: Props) {
  return (
    <Image
      src="/assets/express-icon.svg"
      alt="express-icon.svg"
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
