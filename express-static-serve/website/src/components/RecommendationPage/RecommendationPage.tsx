import React from 'react';
import Recommendation from '../Recommendation/Recommendation';
import './RecommendationPage.module.css';
import classes from './RecommendationPage.module.css';
import mock from '../../recommendations.json';


function RecommendationPage() {
  
  return (
    <>
      <h1>Recommendations</h1>
      <p>
        The following page consists of recommendations provided by your fellow
        neighbors
      </p>
      <div className={classes.recommendationContainer}>
        {mock.recommendations
          .filter((x) => (x.category === 'contractor'))
          .slice(0, 1)
          .map((x) => (
            <Recommendation key={x.id} {...x} />
          ))}
      </div>
    </>
  );
}

export default RecommendationPage;
