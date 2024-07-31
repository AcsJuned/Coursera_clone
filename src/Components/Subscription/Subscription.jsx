import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Subcription.css';
import courseralogo from "../../Asset/images/courseraplus-logo.png";

const Subcription = () => {
  return (
    <div className="main-container-subcription">
      <div className="container d-flex justify-content-center align-items-center flex-column ">
        <div className="row text-center mt-4">
          {/* Image Section */}
          <div className="col-12 mb-3">
            <img
              src={courseralogo}
              alt="Coursera Plus"
              style={{ maxWidth: "288px", maxHeight: "28px" }}
            />
          </div>

          {/* Text Section */}
          <div className="col-12 mb-3 ">
            <span className="font-weight-normal text-white text-center">
              Unlimited access to 7,000+ world-class courses, hands-on projects,
              and job-ready certificate programs—all included in your subscription
            </span>
          </div>

          {/* Price and Buttons Section */}
          <div className="col-12">
            <div className="mb-2">
              <span className="font-weight-bold text-white text-center">
                ₹4,928/month, cancel anytime
              </span>
            </div>
            <div className="mb-2">
              <button
                className="btn butn mt-4 text-white"
                type="button"
              >
                Start 7-day Free Trial
              </button>
            </div>
            <div className="mb-2 mt-3">
              <button
                className="btn text-white mb-2"
                type="button"
              >
                or ₹33,329/year with 14-day money-back guarantee
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subcription;
