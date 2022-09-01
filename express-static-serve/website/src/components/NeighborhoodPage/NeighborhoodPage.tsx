import React from 'react';
import './NeighborhoodPage.css';

const sourceUrl = process.env.REACT_APP_API_URL;

function NeighborhoodPage() {
  return (
    <div className="pageWrapper">
      <h1>Welcome to the Neighborhood!</h1>
      <figure>
        <img alt="entrance sign" src={`${sourceUrl}/entranceSign.jpeg`} />
      </figure>
      <p>
        Sienna Forest was established in 1993 in Jacksonville, FL. Over the past
        30 years, we've grown to 47 beautiful homes in this beautiful Mandarin
        area neighborhood. Come visit us{' '}
        <a
          href="https://www.google.com/maps/dir//30.1537381,-81.6409145/@30.1546496,-81.6409789,18z/data=!4m2!4m1!3e0"
          target="_blank" rel="noreferrer"
        >
          here.
        </a>
      </p>
    </div>
  );
}

export default NeighborhoodPage;
