import Image from 'next/image';

interface Props {
  size?: number;
}

export function PythonIcon({ size = 100 }: Props) {
  return (
    <Image
      src="/assets/python-icon.svg"
      alt="python-icon.svg"
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
