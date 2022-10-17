import React from 'react';
import classes from './EventsPage.module.css';
import HoaEvent from '../../interfaces/HoaEvent';

type EventsPageProps = {
  events: Array<HoaEvent>;
};

function EventsPage({ events }: EventsPageProps) {
  const today = new Date();
  const currYear = today.getFullYear();
  const currMonth = today.getMonth() + 1; // +1 due to zero index

  console.log(currYear);

  const daysInMonth = new Date(currYear, currMonth, 0).getDate();

  return (
    <>
      <h1 className={classes.h1}>Events</h1>
      <div className={classes.calendarContainer}></div>

      {[...Array(daysInMonth).keys()].map((i) => {
        const numberDate = i + 1; // +1 due to zero index
        const firstDayOfWeek = new Date(currYear, currMonth, 1).getDay();
        console.log('firstDayOfWeek', firstDayOfWeek);

        // delete this line
        return <div>{numberDate}</div>;
      })}
    </>
  );
}

export default EventsPage;
