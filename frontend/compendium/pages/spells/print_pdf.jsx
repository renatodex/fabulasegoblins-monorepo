'use client'

import React from 'react';
import PdfButton from 'src/components/download_pdf';
import PdfSpells from 'src/components/pdf_spells';

const DownloadPdf = ({spells}) => {
  return (
    <div>
      <div>
        <PdfButton document={<PdfSpells spells={spells} />} />
      </div>
    </div>
  )
};

export default DownloadPdf;
