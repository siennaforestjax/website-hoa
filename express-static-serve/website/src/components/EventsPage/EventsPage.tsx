import React from 'react';
import classes from './EventsPage.module.css';
import HoaEvent from '../../interfaces/HoaEvent';

type EventsPageProps = {
  events: Array<HoaEvent>;
};

function EventsPage({ events }: EventsPageProps) {
  return (
    <>
      <h1 className={classes.h1}>Events</h1>
    </>
  );
}

export default EventsPage;
