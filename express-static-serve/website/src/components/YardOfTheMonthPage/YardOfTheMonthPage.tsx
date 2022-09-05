import React from 'react';
import classes from './YardOfTheMonthPage.module.css';

const sourceUrl = process.env.REACT_APP_API_URL;

function YardOfTheMonthPage() {
  return (
    <>
      <h1>Yard of the Month goes to ... Bob Ross!</h1>
      <div className={classes.largeImageWrapper}>
        <figure className={classes.largeImage}>
          <img src={`${sourceUrl}/Front.webp`} alt="" />
          <figcaption>(Front Yard)</figcaption>
        </figure>
      </div>
      <div className={classes.multiImageWrapper}>
        <figure className={classes.standardImage}>
          <img src={`${sourceUrl}/WindowView.webp`} alt="" />
          <figcaption>(Window View of the River)</figcaption>
        </figure>
        <figure className={classes.standardImage}>
          <img src={`${sourceUrl}/Foliage.webp`} alt="" />
          <figcaption>(Back Yard)</figcaption>
        </figure>
        <figure className={classes.standardImage}>
          <img src={`${sourceUrl}/Side.webp`} alt="" />
          <figcaption>(Side of House)</figcaption>
        </figure>
      </div>
    </>
  );
}

export default YardOfTheMonthPage;
