import React from 'react';
import HoaDocument from '../../interfaces/HoaDocument';
import getSimplifiedFileSize from '../../helper-functions/getSimplifiedFileSize';
import classes from './Document.module.css';

type DocumentProps = {
  document: HoaDocument;
};

const API_URL = process.env.REACT_APP_API_URL;

function Document({ document }: DocumentProps) {

  return (
    <li key={document.filename} className={classes.doc}>
      <a
        href={`${API_URL}/${document.location}`}
        target="_blank"
        rel="nofollow noreferrer noopener"
        download
      >
        <span className={classes.docName}>{document.filename}</span>
        
        </a>
        <span className={classes.docSize}>
          {displayFileSize(document.fileSizeInBytes)}
        </span>
    </li>
  );

  function displayFileSize(bytes: number) {
    const { size, unit } = getSimplifiedFileSize(bytes);

    return (
      <span>
        ({size} {unit})
      </span>
    );
  }
}

export default Document;
