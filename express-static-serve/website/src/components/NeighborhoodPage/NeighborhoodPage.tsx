import React from 'react';
import classes from './NeighborhoodPage.module.css'
import ImageWithLoadingFallback from '../ImageWithLoadingFallback/ImageWithLoadingFallback';

const sourceUrl = process.env.REACT_APP_API_URL;

function NeighborhoodPage() {
  return (
    <>
      <h1>Welcome to the Neighborhood!</h1>
      <figure className={classes.fig}>
        <ImageWithLoadingFallback source={`${sourceUrl}/entranceSign.jpg`} altText="Sienna Forest Entrance Sign" />
      </figure>
      <div className={classes.description}>
        Sienna Forest was established in 1993 in Jacksonville, FL. Over the past
        30 years, we've grown to 47 beautiful homes in this beautiful Mandarin
        area neighborhood.<br />
        Visit us{' '}
        <a
          href="https://www.google.com/maps/dir//Flynn+Road+%26+Tanya+Terrace,+Jacksonville,+FL/@30.1537967,-81.6761568,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e5cedbc36ebd3b:0x858067931f06455d!2m2!1d-81.6410515!2d30.1537272!3e0"
          target="_blank" rel="noreferrer"
        >
          here</a>,
      </div>
      <div className={classes.description}>or write us at: <address>P. O. Box 600991, Jacksonville, Florida 32260-0991</address></div>
    </>
  )
}

export default NeighborhoodPage;
