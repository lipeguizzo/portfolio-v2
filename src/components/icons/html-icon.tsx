import Image from 'next/image';

interface Props {
  size?: number;
}

export function HtmlIcon({ size = 100 }: Props) {
  return (
    <Image
      src="/assets/html-icon.svg"
      alt="html-icon.svg"
      style={{
        width: `${size}px`,
        height: 'auto',
        objectFit: 'contain',
      }}
      width={0}
      height={0}
    />
  );
}
