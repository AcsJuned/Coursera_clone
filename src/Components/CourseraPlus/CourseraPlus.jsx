import React from "react";
import "./CourseraPlus.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image8 from "../../Asset/images/img8.png";
import Image9 from "../../Asset/images/img9.png";
import Image10 from "../../Asset/images/img10.png";
import Image11 from "../../Asset/images/img11.png";

const CourseraPlus = () => {
  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 mt-4">
        Invest in your career with Coursera Plus
      </h2>
      <p className="text-center mb-4  cstext">
        Get access to videos in over 90% of courses, Specializations, and
        Professional Certificates taught ,<br />
        by top instructors from leading universities and companies.
      </p>
      <div className=" img-container">
      <div className="row text-center card-container">
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div aria-hidden="true">
            <img
              src={Image8}
              style={{ maxHeight: "55px" }}
              className="img-fluid"
              alt="Learn anything"
            />
          </div>
          <p className="mt-2">Learn anything</p>
          <p>
            Explore any interest or trending topic, take prerequisites, and
            advance your skills
          </p>
        </div>
        
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div aria-hidden="true">
            <img
              src={Image9}
              style={{ maxHeight: "47px" }}
              className="img-fluid"
              alt="Save money"
            />
          </div>
          <p className="mt-2">Save money</p>
          <p>
            Spend less money on your learning if you plan to take multiple
            courses this year
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div aria-hidden="true">
            <img
              src={Image10}
              style={{ maxHeight: "55px" }}
              className="img-fluid"
              alt="Flexible learning"
            />
          </div>
          <p className="mt-2">Flexible learning</p>
          <p>
            Learn at your own pace, move between multiple courses, or switch to
            a different course
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div aria-hidden="true">
            <img
              src={Image11}
              style={{ maxHeight: "40px" }}
              className="img-fluid"
              alt="Unlimited certificates"
            />
          </div>
          <p className="mt-2">Unlimited certificates</p>
          <p>
            Earn a certificate for every learning program that you complete at
            no additional cost
          </p>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default CourseraPlus;
