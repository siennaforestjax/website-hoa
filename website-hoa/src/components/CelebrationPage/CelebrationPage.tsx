import React from 'react';
import classes from './CelebrationPage.module.css';

function CelebrationPage() {
  return (
    <div className="pageWrapper">
      <h1>Yard of the Month goes to ... Bob Ross!</h1>
      <div className={classes.largeImageWrapper}>
        <figure className={classes.largeImage}>
          <img src="yardOfTheMonth/Front.webp" alt="" />
          <figcaption>(Front Yard)</figcaption>
        </figure>
      </div>
      <div className={classes.multiImageWrapper}>
        <figure className={classes.standardImage}>
          <img src="yardOfTheMonth/WindowView.webp" alt="" />
          <figcaption>(Window View of the River)</figcaption>
        </figure>
        <figure className={classes.standardImage}>
          <img src="yardOfTheMonth/Foliage.webp" alt="" />
          <figcaption>(Back Yard)</figcaption>
        </figure>
        <figure className={classes.standardImage}>
          <img src="yardOfTheMonth/Side.webp" alt="" />
          <figcaption>(Side of House)</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default CelebrationPage;
