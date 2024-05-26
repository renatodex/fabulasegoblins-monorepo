'use client'

import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfButton from 'src/components/download_pdf';
import MyDocument from 'src/components/pdftest';

const DownloadPdf = () => (
  <div>
    <div>
      <PdfButton document={<MyDocument />} />
    </div>
  </div>
);

export default DownloadPdf;
