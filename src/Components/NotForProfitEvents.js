import React from "react";
import "./NotForProfitEvents.css";

const NotForProfitEvents = () => {
  return (
    <div>
      <div id="serviceText4">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5b2bda42cc8fed2d1f0118d2/1542128245660-S145EBERUYZ02PA9T4P7/Services+Graphics_non-profit-02.jpg"
          alt="Shree Event's Non-profit Services Graphic"
          id="nonProfitImage"
        />
        <div id="nonProfitContent">
          <h2>WE’LL HELP YOU MAKE A DIFFERENCE</h2>
          <p>
            The cost of doing business is rising and as a not for profit,
            figuring out where to spend your precious dollars is only getting
            more difficult. At Shree Event, we have very strong ties to the
            community we work and live in and being able to work with a not for
            profit organization is incredibly rewarding for us. Oftentimes, the
            cost of an event management firm can be too hard to justify, but we
            understand the strain on your volunteers and the growth constraints
            your event faces and we want to help. Because we understand your
            funding, staffing and volunteer challenges, we are able to be
            flexible and adapt to your circumstances.
          </p>
          <p>
            At Shree Event, we support the organizations that are making the
            world a better place to live and we are honoured when we can be a
            part of the change.
          </p>
          <p>
            The Shree Event team can provide a full range of services to deliver
            a variety of not for profit events including:
          </p>
          <ul>
            <li>Fundraising dinners & luncheon events</li>
            <li>Professional development conferences</li>
            <li>Staff & volunteer events</li>
            <li>Educational seminars</li>
            <li>Informational sessions</li>
          </ul>
          <button id="btn"onClick={() => window.history.back()}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default NotForProfitEvents;
