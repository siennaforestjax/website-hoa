import React from 'react';
import HoaDocument from '../../interfaces/HoaDocument';
import getSimplifiedFileSize from '../../helper-functions/getSimplifiedFileSize';
import classes from './Document.module.css';

type DocumentProps = {
  document: HoaDocument;
};

const API_URL = process.env.REACT_APP_API_URL;

function Document({ document }: DocumentProps) {
  function displayFileSize(bytes: number) {
    const { size, unit } = getSimplifiedFileSize(bytes);

    return (
      <span className={classes.docSize}>
        ({size} {unit})
      </span>
    );
  }

  return (
    <li className={classes.doc}>
      <a
        className={classes.docLink}
        href={`${API_URL}/${document.location}`}
        target='_blank'
        rel='nofollow noreferrer noopener'
        download
      >
        <span className={classes.fileName}>{document.filename}</span>

        {displayFileSize(document.fileSizeInBytes)}
      </a>
    </li>
  );
}

export default Document;
