import React from 'react';
import Recommendation from '../Recommendation/Recommendation';
import './RecommendationPage.module.css';
import classes from './RecommendationPage.module.css';
import mock from '../../recommendations.json';

function RecommendationPage() {
  return (
    <>
      <h1 className='pageTitle'>Contractor Recommendations</h1>
      <div className={classes.recommendationListContainer}>
        {mock.recommendations
          .filter((x) => x.category === 'contractor')
          .map((x) => (
            <Recommendation key={x.id} {...x} />
          ))}
      </div>
    </>
  );
}

export default RecommendationPage;
