import React from 'react';
import './css/index.css';
import HoaEvent from '../../interfaces/HoaEvent';

type EventsPageProps = {
  events: Array<HoaEvent>;
};

function EventsPage({ events }: EventsPageProps) {
  return (
    <div className="pageWrapper">
      <h1>Events</h1>
    </div>
  );
}

export default EventsPage;
