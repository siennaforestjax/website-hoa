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
      <h2>
        Need to learn how to implement css modules in this project. tweaking
        pageWrapper in one component should not change it in all components{' '}
      </h2>
    </div>
  );
}

export default EventsPage;
