import Image from 'next/image';

interface Props {
  size?: number;
}

export function DockerIcon({ size = 100 }: Props) {
  return (
    <Image
      src="/assets/docker-icon.svg"
      alt="docker-icon.svg"
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
