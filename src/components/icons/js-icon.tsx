import Image from 'next/image';

interface Props {
  size?: number;
}

export function JsIcon({ size = 100 }: Props) {
  return (
    <Image
      src="/assets/js-icon.svg"
      alt="js-icon.svg"
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
