import './Footer.module.css';
import React from 'react';
import classes from './Footer.module.css';

function Footer() {
  const date = new Date();
  return (
    <div className="websiteBorder">
      <p className={classes.FooterText}>
        © {date.getFullYear()} Sienna Forest Home Owners Association
      </p>
    </div>
  );
}

export default Footer;
