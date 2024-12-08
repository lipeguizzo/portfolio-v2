import Image from 'next/image';

interface Props {
  size?: number;
}

export function BootstrapIcon({ size = 100 }: Props) {
  return (
    <Image
      src="/assets/bootstrap-icon.svg"
      alt="bootstrap-icon.svg"
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
