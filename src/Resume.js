import React from 'react';
import { Grid } from '@material-ui/core'
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from './laura-tannahill-resume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Resume() {
  return (
    <Grid container spacing={2} justify="center">
      <Document file={pdf}>
        <Page pageNumber={1} />
      </Document>
    </Grid>
  );
}