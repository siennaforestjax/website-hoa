import React from 'react';
import './DocumentsPage.css';
import HoaDocument from '../../interfaces/HoaDocument';

type DocumentsPageProps = {
  documents: Array<HoaDocument>;
};

function DocumentsPage({ documents }: DocumentsPageProps) {
  const meetingMinutes = documents.filter((x) => x.type === 'meetingMinutes');
  const miscDocs = documents.filter((x) => x.type === 'misc');

  function getFullFilePath(document: HoaDocument) {
    return `${document.location}/${document.name}`;
  }

  function sortStringDates(stringDate1: string, stringDate2:string) {
    if(!stringDate1) {
      return -1;
    }

    if(!stringDate2) {
      return 1;
    }

    const date1 = new Date(stringDate1);
    const date2 = new Date(stringDate2);

    if(date1 < date2) {
      return -1;
    }

    if(date1 > date2) {
      return 1;
    }

    return 0;
  }

  function displayDocuments(docs: Array<HoaDocument>) {
    return (
      <div className="file-container">
        <ul>
          {docs.sort((x, y) => sortStringDates(x.creationDate, y.creationDate)).map(displayDoc)}
        </ul>
      </div>
    )
  }

  function displayDoc(doc: HoaDocument) {
    const fullFilePath = getFullFilePath(doc);
          return (
            <li key={doc.displayName}>
              <a
                href={fullFilePath}
                target="_blank"
                rel="nofollow noreferrer noopener"
                download
              >
                {doc.displayName} ({doc.size})
              </a>
            </li>
          );
  }

  return (
    <div className="pageWrapper">
      <h1>Documents</h1>
      <h2>HOA Meeting Notes</h2>
      {displayDocuments(documents.filter(x => x.type === 'meetingMinutes'))}
      
      <h2>Community Documents</h2>
      {displayDocuments(documents.filter(x => x.type === 'misc'))}
    </div>
  );
}

export default DocumentsPage;