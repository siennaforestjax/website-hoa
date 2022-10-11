import React, { useEffect, useState } from 'react';
import classes from './DocumentsPage.module.css';
import HoaDocument from '../../interfaces/HoaDocument';
import sortStringDates from '../../helper-functions/sortStringDates';
import Document from '../DocumentBasic/Document';
import axios from 'axios';
import LoadingSvg from '../LoadingSvg/LoadingSvg';

const API_URL = process.env.REACT_APP_API_URL;

function DocumentsPagePretty() {
  const [docsMinutes, setDocsMinutes] = useState([]);
  const [docsMisc, setDocsMisc] = useState([]);
  const [isLoadingMinutes, setIsLoadingMinutes] = useState(true);
  const [isLoadingMisc, setIsLoadingMisc] = useState(true);
  const [minutesDidError, setMinutesDidError] = useState(false);
  const [miscDidError, setMiscDidError] = useState(false);
  
  useEffect(() => {
    axios.get(`${API_URL}/api/documents/minutes`)
        .then(response => {
          setDocsMinutes(response.data);
          setIsLoadingMinutes(false);
        })
        .catch(err => {
          setIsLoadingMinutes(false);
          setMinutesDidError(true);
        });
  }, [])
  useEffect(() => {
    axios.get(`${API_URL}/api/documents/misc`)
        .then(response => {
          setDocsMisc(response.data);
          setIsLoadingMisc(false);
        })
        .catch(err => {
          setIsLoadingMisc(false);
          setMiscDidError(true);
        });
  }, [])

  function displayDocuments(docs: Array<HoaDocument>) {
    return (
      <div className={classes.fileContainer}>
        <ul className={classes.fileList}>
          {docs
            .sort((x, y) => sortStringDates(x.createTime, y.createTime))
            .map((doc) => (
              <Document key={doc.filename} document={doc} />
            ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <h1>Documents</h1>
      <h2>HOA Meeting Notes</h2>
      {
        isLoadingMinutes ? <LoadingSvg scale={0.8}/> 
        : minutesDidError ? <p>Error Gathering Documents</p> : displayDocuments(docsMinutes)}

      <h2>Community Documents</h2>
      {
        isLoadingMisc ? <LoadingSvg scale={0.8}/> :
        miscDidError ? <p>Error Gathering Documents</p> : displayDocuments(docsMisc)
      }
    </>
  );
}

export default DocumentsPagePretty;
