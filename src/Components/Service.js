import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const eventTypes = [
  {
    title: 'Corporate Events',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5b2bda42cc8fed2d1f0118d2/1541172321144-J7GL3GX6VHL23JGDI746/Services+Graphics-01.jpg',
    to: '/corporate-events',
    description: 'Learn More'
  },
  {
    title: 'Association Events',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5b2bda42cc8fed2d1f0118d2/1541172354581-XLK4FDJM7WRPROGXNBMA/Services+Graphics-03.jpg',
    to: '/association-events',
    description: 'Learn More'
  },
  {
    title: 'Not-for-Profit Events',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5b2bda42cc8fed2d1f0118d2/1542128245660-S145EBERUYZ02PA9T4P7/Services+Graphics_non-profit-02.jpg',
    to: '/not-for-profit-events',
    description: 'Learn More'
  }
];

const sliderImages = Array.from({ length: 10 }, (_, index) => {
  const imageName = index + 1 + '.jpg';
  return require(`./Images/${imageName}`);
});


const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % sliderImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id='teamImgContainer'>
        {/* Use require directly without setting require={} */}
        <img src={require('./Images/teamwork.jpg')} alt='Team Work' />
        <div id='img-text'>
          <h1>Transforming occasions into legendary celebrations</h1>
          <b> that's the power of Shree Event</b>
        </div>
      </div>
      <div id='text1'>
        <h1>Shree Event has a diverse team, each offering expert knowledge in their field. From strategy planning, budgeting, and comprehensive registration support to marketing and branding we bring the most current, innovative and professional market expertise.</h1>
      </div>
      
      <div id="typesOfEvent">
      <h1>Types Of Event we organize.</h1>
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
      <div className="slider">
        {/* Display the current image */}
        <img src={sliderImages[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <img id="serviceImg" src={require('./Images/ServicesPage.jpg')} alt='services' />
      
    </>
  );
};

export default Services;
