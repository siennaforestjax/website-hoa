import React, { useEffect, useState } from 'react';
import classes from './SpecialAlert.module.css';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function SpecialAlert() {
  const [message, setMessage] = useState('');
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/specialAlert`)
      .then((response) => {
        const message = response.data;
        setMessage(message);
        if (message) {
          setIsPanelOpen(true);
        }
      })
      .catch((err) => {
        console.error('failed to get specialAlert', err);
      });
  }, []);

  function closePanel() {
    setIsPanelOpen(false);
  }

  return isPanelOpen ? (
    <div className={classes.container}>
      <button
        type='button'
        className={classes.exitButton}
        onClick={() => closePanel()}
      >
        +
      </button>
      <p className={classes.messageBox}>{message}</p>
    </div>
  ) : (
    <></>
  );
}

export default SpecialAlert;
