import React, { useEffect, useState } from 'react';
import classes from './DocumentsPage.module.css';
import HoaDocument from '../../interfaces/HoaDocument';
import sortStringDates from '../../helper-functions/sortStringDates';
import Document from '../Document/Document';
import { AzureBlobService } from '../../services/azure-blob-service';
import HoaBlobType from '../../interfaces/HoaBlobType';
import axios from 'axios';

function DocumentsPage() {

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    axios.get(`https://siennaforesteast2storage.blob.core.windows.net/website-documents/Mock_Covenants & Restrictions.docx`)
    .then(doc => console.log(JSON.stringify(doc)));
  }, [])
  
return (
  <h1>Documents</h1>
  // <img className="blob-to-image" src={"data:image/png;base64," + photoBlob}></img>
)  

  // function displayDocuments(docs: Array<HoaDocument>) {
  //   return (
  //     <div className={classes.fileContainer}>
  //       <ul className={classes.fileList}>
  //         {docs
  //           .sort((x, y) => sortStringDates(x.creationDate, y.creationDate))
  //           .map((doc) => (
  //             <Document key={doc.name} document={doc} />
  //           ))}
  //       </ul>
  //     </div>
  //   );
  // }

  // return (
  //   <div className={'pageWrapper ' + classes.pageWrapperOverride}>
  //     <h1>Documents</h1>
  //     <h2>HOA Meeting Notes</h2>
  //     {displayDocuments(documents.filter((x) => x.type === 'meetingMinutes'))}

  //     <h2>Community Documents</h2>
  //     {displayDocuments(documents.filter((x) => x.type === 'misc'))}
  //   </div>
  // );
}

export default DocumentsPage;
