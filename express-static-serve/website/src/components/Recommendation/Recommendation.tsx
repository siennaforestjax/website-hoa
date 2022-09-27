import React from 'react';
import RecommendationDetails from '../../interfaces/RecommendationDetails';
import './Recommendation.module.css';
import classes from './Recommendation.module.css';

interface RecommendationProps extends RecommendationDetails {}

function Recommendation({ category, lineOfBusiness, entityName, contractorName, workSummary, reviewer, review, cost, dateOfService, phoneNumber, address }: RecommendationProps) {
  return (
    <div className={classes.container}>
      <div className={classes.leftHalf}>
        <div className={classes.row}>
          <span className={classes.label}>Contractor</span>
          <span className={classes.value}>{contractorName}</span>
        </div>
        <div className={classes.row}>
          <span className={classes.label}>Employer</span>
          <span className={classes.value}>{entityName}</span>
        </div>
        <div className={classes.row}>
            <span className={classes.label}>Line Of Work</span>
            <span className={classes.value}>{lineOfBusiness}</span>
        </div>
        <div className={classes.row}>
          <span className={classes.label}>Cost</span>
          <span className={classes.value}>{cost}</span>
        </div>
        <div className={classes.row}>
            <span className={classes.label}>Reviewed By</span>
          <span className={classes.value}>{reviewer}</span>
            </div>
            <div className={classes.row}>
            <span className={classes.label}>Service Date</span>
          <span className={classes.value}>{dateOfService}</span>
        </div>
      </div>
      <div className={classes.rightHalf}>
        <div className={classes.row}>
         <span className={classes.label}>Work Summary</span>
         <span className={classes.value}>{workSummary}</span>
        </div>
        <div className={classes.row}>
          <span className={classes.label}>Review</span>
          <span className={classes.value}>{review}</span>
        </div>
      </div>
    </div>
  );
}

export default Recommendation;
