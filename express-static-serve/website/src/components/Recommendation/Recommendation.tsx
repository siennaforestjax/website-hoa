import React, { useState } from 'react';
import RecommendationDetails from '../../interfaces/RecommendationDetails';
import classes from './Recommendation.module.css';

interface RecommendationProps extends RecommendationDetails {}

function Recommendation({
  category,
  lineOfBusiness,
  entityName,
  contractorName,
  workSummary,
  reviewer,
  review,
  cost,
  dateOfService,
  phoneNumber,
  address,
  isNeighbor,
}: RecommendationProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    const newValue = !isOpen;
    setIsOpen(newValue);
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        {!isNeighbor ? (
          ''
        ) : (
          <div className={classes.neighborIcon}>Neighbor</div>
        )}
        <div className={classes.description}>
          <p>
            {entityName} - {lineOfBusiness}
          </p>
        </div>
        <div className={classes.buttonContainer} onClick={handleClick}>
          {/* <div
            className={`${classes.toggleButton}${
              isOpen ? ' ' + classes.open : ''
            }`}
          ></div> */}
          <button className={classes.toggleButton}>
            {isOpen ? 'collapse' : 'expand'}
          </button>
        </div>
      </div>
      <div className={`${classes.body}${isOpen ? ' ' + classes.open : ''}`}>
        {contractorName ? (
          <p className={contractorName}>
            <span className={classes.label}>Contractor:</span>
            {contractorName}
          </p>
        ) : (
          ''
        )}
        <p className={classes.workSummary}>
          <span className={classes.label}>Work Summary:</span>
          {workSummary}
        </p>
        <p className={classes.contactInfo}>
          <span className={classes.label}>Contact Info:</span>
          {phoneNumber}
          {phoneNumber && address ? ' | ' : ''}
          {address}
        </p>
        <p className={classes.review}>"{review}"</p>
        <p className={classes.reviewedBy}>
          -- Reviewed By: {reviewer} | Date Of Service: {dateOfService}
        </p>
      </div>
    </div>
  );
}

export default Recommendation;
