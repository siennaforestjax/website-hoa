import React from 'react';
import HoaDocument from '../../interfaces/HoaDocument';
import getSimplifiedFileSize from '../../helper-functions/getSimplifiedFileSize';
import classes from './Document.module.css';

type DocumentProps = {
  document: HoaDocument;
};

function Document({ document }: DocumentProps) {
  const fullFilePath = getFullFilePath(document);

  return (
    <li key={document.displayName} className={classes.doc}>
      <a
        href={fullFilePath}
        target="_blank"
        rel="nofollow noreferrer noopener"
        download
      >
        <span className={classes.docName}>{document.displayName}</span>
        <span className={classes.docSize}>
          {displayFileSize(document.size)}
        </span>
      </a>
    </li>
  );

  function getFullFilePath(document: HoaDocument) {
    return `${document.storageLocation}/${document.name}`;
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
}

export default Document;
