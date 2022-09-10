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
          <div className={classes.label}>Name:</div>
          <div className={classes.value}>{contractorName}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.label}>Employee:</div>
          <div className={classes.value}>{entityName}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.label}>Line Of Work:</div>
          <div className={classes.value}>{lineOfBusiness}</div>
        </div>
      </div>
      <div className={classes.rightHalf}>
      <div className={classes.row}>
          <div className={classes.label}>Work Summary:</div>
          <div className={classes.value}>{workSummary}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.label}>Cost:</div>
          <div className={classes.value}>{cost}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.label}>Review:</div>
          <div className={classes.value}>{review}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.label}>Reviewed By:</div>
          <div className={classes.value}>{reviewer}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.label}>Date of Service:</div>
          <div className={classes.value}>{dateOfService}</div>
        </div>
      </div>
    </div>
  );
}

export default Recommendation;
