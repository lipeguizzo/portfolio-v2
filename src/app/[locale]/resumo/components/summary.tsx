'use client';
import { Spinner } from '@/components/loadings';
import { Section, SectionContent } from '@/components/section';
import { ELocale } from '@/domain/enums/locale.enum';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';

export function SummarySection() {
  const [loading, setLoading] = useState<boolean>(true);
  const locale = useLocale() as ELocale;
  const { width } = useMediaQuery();
  return (
    <Section id="summary" className="min-h-[50vh]">
      <SectionContent className="relative p-5">
        <Worker key={`worker-${width}`} workerUrl="/pdfjs/pdf.worker.min.js">
          <Viewer
            fileUrl={`/assets/curriculum-${locale}.pdf`}
            onDocumentLoad={() => {
              setLoading(false);
            }}
          />
        </Worker>
      </SectionContent>
      <Spinner loading={loading} />
    </Section>
  );
}
