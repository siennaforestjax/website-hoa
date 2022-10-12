import React from 'react';
import ImageWithLoadingFallback from '../ImageWithLoadingFallback/ImageWithLoadingFallback';
import classes from './YardOfTheMonthPage.module.css';

const sourceUrl = process.env.REACT_APP_API_URL;

function YardOfTheMonthPage() {
  return (
    <>
      <h1 className={classes.pageTitle}>Yard of the Month goes to ... Bob Ross!</h1>
      <div className={classes.largeImageWrapper}>
        <figure className={classes.largeImage}>
          <ImageWithLoadingFallback source={`${sourceUrl}/Front.webp`} altText='' />
          <figcaption>(Front Yard)</figcaption>
        </figure>
      </div>
      <div className={classes.multiImageWrapper}>
        <figure className={classes.standardImage}>
          <ImageWithLoadingFallback source={`${sourceUrl}/WindowView.webp`} altText='' />
          <figcaption>(Window View of the River)</figcaption>
        </figure>
        <figure className={classes.standardImage}>
          <ImageWithLoadingFallback source={`${sourceUrl}/Foliage.webp`} altText='' />
          <figcaption>(Back Yard)</figcaption>
        </figure>
        <figure className={classes.standardImage}>
          <ImageWithLoadingFallback source={`${sourceUrl}/Side.webp`} altText='' />
          <figcaption>(Side of House)</figcaption>
        </figure>
      </div>
    </>
  );
}

export default YardOfTheMonthPage;
