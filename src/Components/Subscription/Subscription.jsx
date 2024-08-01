import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Subcription.css';

const Subcription = ({ data }) => {
  return (
    <div className="main-container-subcription">
      <div className="container d-flex justify-content-center align-items-center flex-column ">
        <div className="row text-center mt-4">
          {/* Image Section */}
          <div className="col-12 mb-3">
            <img
              src={data.logoSrc}
              alt="Coursera Plus"
              style={{ maxWidth: "288px", maxHeight: "28px" }}
            />
          </div>

          {/* Text Section */}
          <div className="col-12 mb-3 ">
            <span className="font-weight-normal text-white text-center">
              {data.description}
            </span>
          </div>

          {/* Price and Buttons Section */}
          <div className="col-12">
            <div className="mb-2">
              <span className="font-weight-bold text-white text-center">
                {data.price}
              </span>
            </div>
            <div className="mb-2">
              <button
                className="btn butn mt-4 text-white"
                type="button"
              >
                {data.trialButtonText}
              </button>
            </div>
            <div className="mb-2 mt-3">
              <button
                className="btn text-white mb-2"
                type="button"
              >
                {data.annualPrice}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subcription;
