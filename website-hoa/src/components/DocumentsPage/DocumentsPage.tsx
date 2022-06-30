import React from 'react';
import classes from './DocumentsPage.module.css';
import HoaDocument from '../../interfaces/HoaDocument';
import getSimplifiedFileSize from '../helper-functions/getSimplifiedFileSize';

type DocumentsPageProps = {
  documents: Array<HoaDocument>;
};

function DocumentsPage({ documents }: DocumentsPageProps) {
  function getFullFilePath(document: HoaDocument) {
    return `${document.storageLocation}/${document.name}`;
  }

  function sortStringDates(stringDate1: string, stringDate2: string) {
    if (!stringDate1) {
      return -1;
    }

    if (!stringDate2) {
      return 1;
    }

    const date1 = new Date(stringDate1);
    const date2 = new Date(stringDate2);

    if (date1 < date2) {
      return -1;
    }

    if (date1 > date2) {
      return 1;
    }

    return 0;
  }

  function displayDocuments(docs: Array<HoaDocument>) {
    return (
      <div className={classes.fileContainer}>
        <ul>
          {docs
            .sort((x, y) => sortStringDates(x.creationDate, y.creationDate))
            .map(displayDoc)}
        </ul>
      </div>
    );
  }

  function displayFileSize(bytes: number) {
    const { size, unit } = getSimplifiedFileSize(bytes);

    return (
      <span>
        ({size}
        {unit})
      </span>
    );
  }

  function displayDoc(doc: HoaDocument) {
    const fullFilePath = getFullFilePath(doc);
    return (
      <li key={doc.displayName} className={classes.doc}>
        <a
          href={fullFilePath}
          target="_blank"
          rel="nofollow noreferrer noopener"
          download
        >
          <span className={classes.docName}>{doc.displayName}</span>
        </a>
        <span className={classes.docSize}> {displayFileSize(doc.size)}</span>
      </li>
    );
  }

  return (
    <div className={'pageWrapper ' + classes.pageWrapperOverride}>
      <h1>Documents</h1>
      <h2>HOA Meeting Notes</h2>
      {displayDocuments(documents.filter((x) => x.type === 'meetingMinutes'))}

      <h2>Community Documents</h2>
      {displayDocuments(documents.filter((x) => x.type === 'misc'))}
    </div>
  );
}

export default DocumentsPage;
