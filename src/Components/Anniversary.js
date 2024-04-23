import React from "react";
import "./Birthday.css";

// Import images using require.context
const images = require.context('./Images/Anniversary', true);
// Extract the list of images
const imageList = images.keys().map(image => images(image));

const Anniversary = () => {
  return (
    <div className="birthday-container">
      {/* Map over the imageList and render each image wrapped in a div */}
      {imageList.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image} alt={`Anniversary Image ${index}`} />
        </div>
      ))}
      {/* Add a labeled button for navigation */}
      <button id="btn" onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
}

export default Anniversary;
