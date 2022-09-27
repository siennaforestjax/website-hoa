import React from 'react';
import Recommendation from '../Recommendation/Recommendation';
import './RecommendationPage.module.css';
import classes from './RecommendationPage.module.css';
import mock from '../../recommendations.json';


function RecommendationPage() {
  
  return (
    <div className={classes.pageWrapper}>
      <h1>Recommendations</h1>
      <p className={classes.pageDescription}>
        Check out these recommendations provided by your fellow
        neighbors.
      </p>
      <div className={classes.recommendationListContainer}>
        {mock.recommendations
          .filter((x) => (x.category === 'contractor'))
          .map((x) => (
            <div className={classes.recommendationContainer}>
              <Recommendation key={x.id} {...x} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default RecommendationPage;
