import React from 'react';
import HoaDocument from '../../interfaces/HoaDocument';
import getSimplifiedFileSize from '../../helper-functions/getSimplifiedFileSize';
import classes from './Document.module.css';

type DocumentProps = {
  document: HoaDocument;
};

function Document({ document }: DocumentProps) {

  return (
    <li key={document.filename} className={classes.doc}>
      <a
        href={`http://localhost:5000/api/document/${document.location}`}
        target="_blank"
        rel="nofollow noreferrer noopener"
        download
      >
        <span className={classes.docName}>{document.filename}</span>
        <span className={classes.docSize}>
          {displayFileSize(document.fileSizeInBytes)}
        </span>
        </a>
    </li>
  );

  function displayFileSize(bytes: number) {
    const { size, unit } = getSimplifiedFileSize(bytes);

    return (
      <span>
        ({size}
        {unit})
      </span>
    );
  }
}

export default Document;
