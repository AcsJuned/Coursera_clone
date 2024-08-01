import React from "react";
import './HeroComponent.css';
import "bootstrap/dist/css/bootstrap.min.css";

const HeroComponent = (props) => {
  const { hero } = props.data; 

  return (
    <div className="container  bg-skyblue maincontainer">
      <div className="row">
        <div className="col-md-6 d-flex flex-column align-items-start">
          <img
            src={hero.courseraplus.src}
            alt={hero.courseraplus.altText}
            className="mb-3 courseraplus-image"
          />
          <h2 className="hero-heading  mt-3 lh-1 text-start">
            {hero.heading}
          </h2>
          <button className={hero.button.className}>
            {hero.button.text}
          </button>
          <span className={hero.subtext.className}>
            <a>{hero.subtext.text}</a>
          </span>
        </div>
        <div className="col-md-6">
          <div className="hero-image-container">
            <img
              src={hero.herobanner.src}
              alt={hero.herobanner.altText}
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;







  
    
         
          
          
        
