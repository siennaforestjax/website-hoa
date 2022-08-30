import React, { useEffect, useState } from 'react';
import classes from './DocumentsPage.module.css';
import HoaDocument from '../../interfaces/HoaDocument';
import sortStringDates from '../../helper-functions/sortStringDates';
import Document from '../Document/Document';
import axios from 'axios';

const API_URL = 'https://siennaforestjax.azurewebsites.net/'; //http://localhost:5000

function DocumentsPage() {
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
    console.log(`sorting ${docs.length} docs`);
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
    <div className={'pageWrapper ' + classes.pageWrapperOverride}>
      <h1>Documents</h1>
      <h2>HOA Meeting Notes</h2>
      {
        isLoadingMinutes ? <p>Loading . . .</p> 
        : minutesDidError ? <p>Error!</p> : displayDocuments(docsMinutes)}

      <h2>Community Documents</h2>
      {
        isLoadingMisc ? <p>Loading . . .</p> :
        miscDidError ? <p>Error!</p> : displayDocuments(docsMisc)
      }
    </div>
  );
}

export default DocumentsPage;
