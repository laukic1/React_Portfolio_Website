import { Document, Page, pdfjs } from 'react-pdf';
import myResume from '../../assets/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const PDFViewer = () => {

    return (
        <div>
            <Document file={myResume}>
            <Page pageNumber={1} />
            </Document>
        </div>
    );
};

export default PDFViewer;