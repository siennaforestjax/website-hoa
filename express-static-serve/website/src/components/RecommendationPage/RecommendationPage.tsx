import React from 'react';
import Recommendation from '../Recommendation/Recommendation';
import './RecommendationPage.module.css';
import classes from './RecommendationPage.module.css';
import mock from '../../recommendations.json';

function RecommendationPage() {
  return (
    <>
      <h1 className={classes.pageTitle}>Recommendations</h1>
      <p className={classes.pageDescription}>
        Looking to have some work done around the house? Check out these
        recommendations from your neighbors.
      </p>
      <div className={classes.recommendationListContainer}>
        {mock.recommendations
          .filter((x) => x.category === 'contractor')
          .map((x) => (
            <div key={x.id} className={classes.recommendationContainer}>
              <Recommendation {...x} />
            </div>
          ))}
      </div>
    </>
  );
}

export default RecommendationPage;
