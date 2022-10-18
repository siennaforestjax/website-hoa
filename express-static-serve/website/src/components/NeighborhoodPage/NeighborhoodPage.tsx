import React from 'react';
import classes from './NeighborhoodPage.module.css';
import ImageWithLoadingFallback from '../ImageWithLoadingFallback/ImageWithLoadingFallback';
import Fact from '../../interfaces/Fact';
import HoaMeeting from '../../interfaces/HoaMeeting';
import getRandomElement from '../../helper-functions/getRandomElement';

const sourceUrl = process.env.REACT_APP_API_URL;

type NeighborhoodPageProps = {
  facts: Array<Fact>;
  meetingDate: HoaMeeting;
};

function NeighborhoodPage({ facts, meetingDate }: NeighborhoodPageProps) {
  return (
    <>
      <h1 className={classes.pageTitle}>Welcome to the Neighborhood!</h1>
      <div className={classes.floatContainer}>
        <figure className={classes.fig}>
          <ImageWithLoadingFallback
            source={`${sourceUrl}/entranceSign.jpg`}
            altText='Sienna Forest Entrance Sign'
          />
        </figure>
        <h2 className={classes.aboutTitle}>About Us</h2>
        <div className={classes.description}>
          Sienna Forest was established in 1993 in Jacksonville, FL. Over the
          past 30 years, we've grown to 47 beautiful homes in this beautiful
          Mandarin area neighborhood.
          <br />
          <div className={classes.siennaInfo}>
            Visit us{' '}
            <a
              href='https://www.google.com/maps/dir//Flynn+Road+%26+Tanya+Terrace,+Jacksonville,+FL/@30.1537967,-81.6761568,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e5cedbc36ebd3b:0x858067931f06455d!2m2!1d-81.6410515!2d30.1537272!3e0'
              target='_blank'
              rel='noreferrer'
            >
              here
            </a>
            , or write us at:{' '}
            <address>
              P. O. Box 600991, Jacksonville, Florida 32260-0991
            </address>
          </div>
        </div>
        <h2 className={classes.usefulLinkTitle}>
          Join Us at Next HOA Meeting:
        </h2>
        <ul className={classes.hoaMeeting}>
          <li>Date: {meetingDate.date}</li>
          <li>Time: {meetingDate.time}</li>
          <li>Location: {meetingDate.location}</li>
        </ul>
      </div>
      <h2 className={classes.usefulLinkTitle}>Useful Links</h2>
      <ul className={classes.linkList}>
        <li>
          <a
            className={classes.webLink}
            href='https://www.coj.net/welcome.aspx'
            target='_blank'
            rel='noreferrer'
          >
            City Of Jacksonville Information
          </a>
        </li>
        <li>
          <a
            className={classes.webLink}
            href='https://www.jaxsheriff.org/Contact-Us.aspx'
            target='_blank'
            rel='noreferrer'
          >
            Contact the Jacksonville Sheriff's Department
          </a>
        </li>
        <li>
          <a
            className={classes.webLink}
            href='https://www.duvalelections.gov/'
            target='_blank'
            rel='noreferrer'
          >
            Find Voter Information
          </a>
        </li>
        <li>
          <a
            className={classes.webLink}
            href='https://myjax.custhelp.com/app/hauler'
            target='_blank'
            rel='noreferrer'
          >
            Your Trash Schedule
          </a>
        </li>
        <li>
          <a
            className={classes.webLink}
            href='https://myjax.custhelp.com/app/evacuation_zone'
            target='_blank'
            rel='noreferrer'
          >
            Know Your Evacuation Zone
          </a>
        </li>
      </ul>

      <h2 className={classes.knowledgeTitle}>Did you know?</h2>
      <ul className={classes.factList}>
        {[getRandomElement(facts)].map((fact) => (
          <li key={fact.detail} className={classes.fact}>
            {fact.detail}
          </li>
        ))}
        <li className={classes.mandarinInfo}>
          Learn more about Mandarin{' '}
          <a
            href='https://www.visitjacksonville.com/neighborhoods/mandarin/'
            target='_blank'
            rel='noreferrer'
          >
            here.
          </a>
        </li>
      </ul>
    </>
  );
}

export default NeighborhoodPage;
