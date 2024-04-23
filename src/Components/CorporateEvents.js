import React from 'react';
import './CorporateEvents.css';

const CorporateEvents = () => {
  return (
    <div id='serviceText4'>
      <img src="https://images.squarespace-cdn.com/content/v1/5b2bda42cc8fed2d1f0118d2/1541172321144-J7GL3GX6VHL23JGDI746/Services+Graphics-01.jpg" alt="Corporate Events Graphic" id="corporateImage" />
      <div id='nonProfitContent'>
        <h2>PROVING TANGIBLE VALUE</h2>
        <p>As a company, you need to ensure that every dollar you spend on an event provides a tangible return. We understand that on a daily basis, events compete with many other initiatives within your organization to prove their value and justify their existence. The Shree Event team can assist you in developing a business case for your event and delivering an event that exceeds expectations. Whether you need to generate sales leads, build client loyalty, increase employee morale or celebrate an important milestone, the Spark team possesses the event management expertise and business background to ensure your event is a success.</p>
        <p>The Shree Event team can provide a full range of services to deliver a wide variety of corporate events:</p>
        <ul>
          <li>Internal board or employee meetings & retreats</li>
          <li>Corporate celebrations (Christmas, anniversaries, milestone celebrations)</li>
          <li>Brand launches</li>
          <li>Client appreciation events</li>
          <li>Employee appreciation events</li>
          <li>Employee milestone events</li>
          <li>Educational or informational client events</li>
          <li>Business development events or trips</li>
          <li>Sales or hospitality trips (destination events)</li>
        </ul>
        <button id="btn" onClick={() => window.history.back()}>Back</button>
      </div>
    </div>
  );
};

export default CorporateEvents;
