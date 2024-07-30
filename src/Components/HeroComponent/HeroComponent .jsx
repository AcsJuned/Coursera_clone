import React from "react";
import './HeroComponent.css';
import "bootstrap/dist/css/bootstrap.min.css";
import courseraplus from "../../Asset/images/courserap.png";
import Herobanner from "../../Asset/images/Herobanner.png";

const HeroComponent = () => {
  return (
    <div className="container mt-3 bg-skyblue maincontainer">
      <div className="row">
        <div className="col-md-6 d-flex flex-column align-items-start">
          <img src={courseraplus} alt="Coursera Logo" className="mb-3   courseraplus-image" />
          <h2 className="hero-heading  mt-3 lh-1 text-start">
            Unlimited access to 7,000+ world-class courses, hands-on projects,
            and job-ready certificate programs all included in your subscription.
          </h2>
          <button className="btn btn-primary hero-button mt-3">
            Start 7-Day Free Trial
          </button>
          <span className="hero-subtext mt-3 ms-0 ">
          <a>or $33329/year with 14-day money-back guarantee</a>  
          </span>
        </div>
        <div className="col-md-6">
          <div className="hero-image-container">
            <img src={Herobanner} alt="Hero Banner" className="hero-image  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
