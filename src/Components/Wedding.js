import React from "react";
import "./Birthday.css";


// Import images using require.context
const images = require.context('./Images/Wedding', true);
// Extract the list of images
const imageList = images.keys().map(image => images(image));
const Wedding = () => {
    return (
        <div className="birthday-container">
          {/* Map over the imageList and render each image wrapped in a div */}
          {imageList.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image} alt={`image-${index}`} />
            </div>
          ))}
          <button id="btn" onClick={() => window.history.back()}>Back</button>
        </div>
      );
    }


export default Wedding
