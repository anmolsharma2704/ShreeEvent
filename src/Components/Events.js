import React from "react";
import "./Events.css";
import { Link } from "react-router-dom";
import birthdayImage from "./Images/Birthday.png";
import weddingImage from "./Images/Wedding.png";
import anniversaryImage from "./Images/Anniversary.png";
import peakpxImage from "./Images/peakpx.jpg";

const Events = () => {
  const eventTypes = [
    {
      title: "Birthday Events",
      imageUrl: birthdayImage,
      to: "/birthday",
      description: "Go to memories",
    },
    {
      title: "Wedding Events",
      imageUrl: weddingImage,
      to: "/wedding",
      description: "Go to memories",
    },
    {
      title: "Anniversary Events",
      imageUrl: anniversaryImage,
      to: "/anniversary",
      description: "Go to memories",
    },
  ];
  return (
    <div>
      <div id="teamImgContainer">
        <img src={peakpxImage} alt="" />
        <div id="team-text">
          <h1>Transforming ordinary moments into extraordinary memories</h1>
          <b> one event at a time</b>
        </div>
      </div>
      <div className="text-container">
        <p className="text">
          <h2>Wow, we've had a busy year... but always make time for fun! </h2>
          <br />
          Our clients include not-for-profit organizations, corporate clients,
          regulating bodies, and member associations. <br />
          Each of these organizations has a unique set of business goals and
          challenges, and has chosen Shree Event because we understand the
          business of running events.
        </p>
      </div>

      <div className="memories">
        <h1>
          Here, we showcase some of our thoughtfully arranged event memories
        </h1>

        <div className="events-container">
          {eventTypes.map((event, index) => (
            <div className="event" key={index}>
              <h2>{event.title}</h2>
              <Link to={event.to}>
                <img src={event.imageUrl} alt={event.title} />
              </Link>
              <b>
                <Link to={event.to}>{event.description}</Link>
              </b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Events;
