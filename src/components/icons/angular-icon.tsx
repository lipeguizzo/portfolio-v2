import Image from 'next/image';

interface Props {
  size?: number;
}

export function AngularIcon({ size = 100 }: Props) {
  return (
    <Image
      src="/assets/angular-icon.svg"
      alt="angular-icon.svg"
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
