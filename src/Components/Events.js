import React from "react";
import "./Events.css";
import { Link } from 'react-router-dom';
import birthdayImage from './Images/Birthday.png';
import weddingImage from './Images/Wedding.png';
import anniversaryImage from './Images/Anniversary.png';
import peakpxImage from './Images/peakpx.jpg';
import eventsImage from './Images/Events_Image.png';

const Events = () => {
  const eventTypes = [
    {
      title: 'Birthday Events',
      imageUrl: birthdayImage,
      to: '/birthday',
      description: 'Learn More'
    },
    {
      title: 'Wedding Events',
      imageUrl: weddingImage,
      to: '/wedding',
      description: 'Learn More'
    },
    {
      title: 'Anniversary Events',
      imageUrl: anniversaryImage,
      to: '/anniversary',
      description: 'Learn More'
    }
  ];
  return (
    <div>
      <div id="teamImgContainer">
        <img src={peakpxImage} alt="" />
        <div id="team-text">
          <h1>Busy, Busy, Busy</h1>
          <p>A FEW OF OUR RECENT EVENTS</p>
        </div>
      </div>
      <div className="text-container">
        <p className="text">
          <h2>Wow, we've had a busy year... but always make time for fun!  </h2>
          <br />
          Our clients include not-for-profit organizations, corporate clients,
          regulating bodies, and member associations. <br />
          Each of these organizations has a unique set of business goals and
          challenges, and has chosen Shree Event because we understand the
          business of running events.
        </p>
      </div>
      <img id="Events_Image" src={eventsImage} alt='' />
      <div className="events-container">
        {eventTypes.map((event, index) => (
          <div className="event" key={index}>
            <h3>{event.title}</h3>
            <Link to={event.to}>
              <img src={event.imageUrl} alt={event.title} />
            </Link>
            <Link to={event.to}>{event.description}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
