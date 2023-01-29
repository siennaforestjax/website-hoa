import React, { useEffect, useState } from 'react';
import classes from './DocumentsPage.module.css';
import HoaDocument from '../../interfaces/HoaDocument';
import {
  sortDates,
  sortDatesDesc,
} from '../../helper-functions/sortStringDates';
import Document from '../DocumentBasic/Document';
import axios from 'axios';
import LoadingSvg from '../LoadingSvg/LoadingSvg';

const API_URL = process.env.REACT_APP_API_URL;

function DocumentsPagePretty() {
  const [docsMinutes, setDocsMinutes] = useState([]);
  const [docsMisc, setDocsMisc] = useState([]);
  const [docsEssential, setDocsEssential] = useState([]);
  const [isLoadingMinutes, setIsLoadingMinutes] = useState(true);
  const [isLoadingMisc, setIsLoadingMisc] = useState(true);
  const [, setIsLoadingEssential] = useState(true);
  const [minutesDidError, setMinutesDidError] = useState(false);
  const [miscDidError, setMiscDidError] = useState(false);
  const [, setEssentialDidError] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/documents/minutes`)
      .then((response) => {
        setDocsMinutes(response.data);
        setIsLoadingMinutes(false);
      })
      .catch((err) => {
        setIsLoadingMinutes(false);
        setMinutesDidError(true);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${API_URL}/api/documents/misc`)
      .then((response) => {
        setDocsMisc(response.data);
        setIsLoadingMisc(false);
      })
      .catch((err) => {
        setIsLoadingMisc(false);
        setMiscDidError(true);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${API_URL}/api/documents/essential`)
      .then((response) => {
        setDocsEssential(response.data);
        setIsLoadingEssential(false);
      })
      .catch((err) => {
        setIsLoadingEssential(false);
        setEssentialDidError(true);
      });
  }, []);

  function displayDocuments(docs: Array<HoaDocument>, isAsc: boolean) {
    isAsc
      ? (docs = docs.sort((x, y) => (x.filename > y.filename ? 1 : -1)))
      : (docs = docs.sort((x, y) => (x.filename > y.filename ? -1 : 1)));

    return (
      <ul className={classes.fileList}>
        {docs.map((doc) => (
          <Document key={doc.filename} document={doc} />
        ))}
      </ul>
    );
  }

  return (
    <>
      <h1 className='pageTitle'>Documents</h1>
      <div className={classes.fileContainer}>
        <h2 className={classes.sectionTitle}>Homeowner Essentials</h2>
        {isLoadingMinutes ? (
          <LoadingSvg scale={0.8} />
        ) : minutesDidError ? (
          <p>Error Gathering Documents</p>
        ) : (
          displayDocuments(docsEssential, true)
        )}
      </div>
      <div className={classes.fileContainer}>
        <h2 className={classes.sectionTitle}>HOA Meeting Notes</h2>
        {isLoadingMinutes ? (
          <LoadingSvg scale={0.8} />
        ) : minutesDidError ? (
          <p>Error Gathering Documents</p>
        ) : (
          displayDocuments(docsMinutes, false)
        )}
      </div>
      <div className={classes.fileContainer}>
        <h2 className={classes.sectionTitle}>Miscellaneous Documents</h2>
        {isLoadingMisc ? (
          <LoadingSvg scale={0.8} />
        ) : miscDidError ? (
          <p>Error Gathering Documents</p>
        ) : (
          displayDocuments(docsMisc, true)
        )}
      </div>
    </>
  );
}

export default DocumentsPagePretty;
