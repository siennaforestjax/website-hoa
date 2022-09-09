import React from 'react';

import './RecommendationPage.module.css';
import classes from './RecommendationPage.module.css';

type recommendation = {
  category: string;
  entityName: string;
};

function RecommendationPage() {
  const recommendations = [{ category: 'contractor', entityName: 'tileGuy' }];

  return (
    <>
      <h1>Recommendations</h1>
      <p>
        The following page consists of recommendations provided by your fellow
        neighbors
      </p>
      <div className={classes.recommendationContainer}>
        {recommendations
          .filter((x) => (x.category = 'contractor'))
          .map((x) => (
            <Recommendation {...x} />
          ))}
      </div>
    </>
  );
}

export default RecommendationPage;
