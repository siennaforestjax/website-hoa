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
}: RecommendationProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    const newValue = !isOpen;
    setIsOpen(newValue);
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
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
        <p className={classes.review}>{review}</p>
        <p className={classes.reviewedBy}>
          Reviewed By: {reviewer} | Date Of Service: {dateOfService}
        </p>
      </div>
    </div>
  );
}

export default Recommendation;
