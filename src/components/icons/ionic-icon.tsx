import Image from 'next/image';

interface Props {
  size?: number;
}

export function IonicIcon({ size = 100 }: Props) {
  return (
    <Image
      src="/assets/ionic-icon.svg"
      alt="ionic-icon.svg"
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
