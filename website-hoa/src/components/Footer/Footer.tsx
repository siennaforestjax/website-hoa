import './Footer.module.css';
import React from 'react';

function Footer() {
  const date = new Date();
  return (
    <div className="websiteBorder">
      <p>© {date.getFullYear()} Sienna Forest Home Owners Association</p>
    </div>
  );
}

export default Footer;
