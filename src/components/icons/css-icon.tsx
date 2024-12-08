import Image from 'next/image';

interface Props {
  size?: number;
}

export function CssIcon({ size = 100 }: Props) {
  return (
    <Image
      src="/assets/css-icon.svg"
      alt="css-icon.svg"
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
