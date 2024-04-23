import React from 'react';
import './AssociationEvents.css';

const AssociationEvents = () => {
  return (
    <div>
      <div id='serviceText4'>
        <img src="https://images.squarespace-cdn.com/content/v1/5b2bda42cc8fed2d1f0118d2/1541172354581-XLK4FDJM7WRPROGXNBMA/Services+Graphics-03.jpg" alt="Association Events Graphic" id="associationImage" />
        <div id='nonProfitContent'>
          <h2>RUN YOUR ASSOCIATION; WE’LL RUN YOUR EVENT…</h2>
          <p>Whether your professional association is a regulating, advocacy or educational institution, you face challenges that are unique to the association market. At Shree Event, we have experience working with associations and we understand the issues that you deal with; member apathy, student engagement, and changes to the regulatory landscapes. Your events, when executed properly, can be a vehicle to address many of these issues. Shree Event has worked with numerous associations to implement strategic changes to their events in order to address many of the issues associations deal with on a daily basis. By partnering with Shree Event, you tap into our years of association event experience. Managing an association is complicated, so let us focus on your event so you can focus on your association and members.</p>
          <p>The Shree Event team can provide a full range of services to deliver a variety of association events including:</p>
          <ul>
            <li>Annual general meetings</li>
            <li>Annual conference, conventions or symposiums</li>
            <li>Professional development events for members</li>
            <li>Educational seminars</li>
            <li>Informational sessions</li>
            <li>Student engagement events</li>
            <li>Monthly member chapter dinner or lunch meetings</li>
            <li>Industry tradeshows</li>
          </ul>
          <button id="btn" onClick={() => window.history.back()}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default AssociationEvents;
