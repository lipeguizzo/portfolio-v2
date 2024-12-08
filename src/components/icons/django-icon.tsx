import Image from 'next/image';

interface Props {
  size?: number;
}

export function DjangoIcon({ size = 100 }: Props) {
  return (
    <Image
      src="/assets/django-icon.svg"
      alt="django-icon.svg"
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
