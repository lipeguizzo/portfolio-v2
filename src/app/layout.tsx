import type { Metadata } from 'next';
import { ReactNode } from 'react';
import '../app/global.css';

export const metadata: Metadata = {
  title: 'Portfólio V2',
  description: 'Portfólio V2 criado com Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth focus:scroll-auto">
      <body className="w-full h-full">{children}</body>
    </html>
  );
}
