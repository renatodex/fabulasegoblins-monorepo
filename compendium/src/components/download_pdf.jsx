// components/DownloadPdf.js
import React from 'react';
import dynamic from 'next/dynamic';

const PDFDownloadLink = dynamic(() =>
  import('@react-pdf/renderer').then(mod => mod.PDFDownloadLink), { ssr: false }
);

const DownloadPdf = ({ document }) => (
  <div>
    <PDFDownloadLink document={document} fileName="page.pdf" className='bg-emerald-200 text-black px-2 py-1 rounded-lg'>
      {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
    </PDFDownloadLink>
  </div>
);

export default DownloadPdf;
