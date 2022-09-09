import React from 'react';

import './Recommendation.module.css';
import classes from './Recommendation.module.css';

type RecommendationProps = {
  title: string;
};

function Recommendation({ title }: RecommendationProps) {
  return (
    <>
      <h2>{title}</h2>
    </>
  );
}

export default Recommendation;
