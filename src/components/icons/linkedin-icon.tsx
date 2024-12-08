import Image from 'next/image';

interface Props {
  size?: number;
}

export function LinkedinIcon({ size = 100 }: Props) {
  return (
    <Image
      src="/assets/linkedin-icon.svg"
      alt="linkedin-icon.svg"
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
