import Image from 'next/image';

interface Props {
  size?: number;
}

export function ReactJsIcon({ size = 100 }: Props) {
  return (
    <Image
      src="/assets/reactjs-icon.svg"
      alt="reactjs-icon.svg"
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
