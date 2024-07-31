import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PricingPlans.css";

const PricingPlans = () => {
  return (
    <div className="container ptop mt-5 ">
      {/* Main div */}
      <div className="row   Maindiv ">
        {/* First div */}
        <div className=" card col-md-4 border border-primary w-25 text-justify  fdiv text-center ">
          <h1 className="card-title mt-4">Single learning program</h1>
          <p className="card-text mt-3">
            Learn a single topic or skill and earn a credential
          </p>
          <h1 className="fs-2 ">
            ₹4,093 – ₹6,599{" "}
           
          </h1>
          <span className="fs-5 text-center ">/month</span>
          <p className="mt-4 fs-5 bold">
            Visit an individual course or Specialization page to purchase
          </p>
          <ul className="list-unstyled ">
            <li className="d-flex align-items-center mb-2 lifirst ">
              
              <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                id="cds-react-aria-10"
                className=" "
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="mb-0  ">
                Access all courses within the learning program
              </p>
            </li>
            <li className="d-flex align-items-center mb-2 lifirst">
            <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                id="cds-react-aria-10"
                className=" "
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="mb-0 ms-2">Earn a certificate upon completion</p>
            </li>
          </ul>
        </div>

        {/* Second div */}
        <div className="col-md-4  ">
          <div className="alert alert-info  text-center ms-4 bg-primary ptag">
            Most popular
          </div>
          <div className="card seconddiv border border-primary text-center w-100">
            <div className="card-body ">
              <h3 className="card-title">Coursera Plus Monthly</h3>
              <p className="card-text">
                Complete multiple courses and earn credentials in the short term
              </p>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <div className="w-100">
                  <span className="fs-2 bold w-100">₹4,928</span> /<span>month</span>
                </div>
                <br />
               
              </div>
              <button className="btn btn-primary w-75 ms-2 mt-3">
                  Start 7-day free trial
                </button>
              <p className="mt-4">Cancel anytime</p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2 lifirst">
                <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                id="cds-react-aria-10"
                className=" "
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z"
                  fill="currentColor"
                ></path>
              </svg>
                  <p className="mb-0 w-100 ">
                    Access 7,000+ courses and Specializations from 170+ leading
                    companies and universities
                  </p>
                </li>
                <li className="d-flex align-items-center mb-2 lifirst">
                <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                id="cds-react-aria-10"
                className=" "
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z"
                  fill="currentColor"
                ></path>
              </svg>
                  <p className="mb-0 w-100">Earn unlimited certificates</p>
                </li>
                <li className="d-flex align-items-center mb-2 lifirst w-100">
                <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                id="cds-react-aria-10"
                className=" "
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z"
                  fill="currentColor"
                ></path>
              </svg>
                  <p className="mb-0  w-100">
                    Learn job-relevant skills and tools with 1,000+ applied
                    projects and hands-on labs from industry experts
                  </p>
                </li>
                <li className="d-flex align-items-center mb-2 lifirst w-100">
                <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                id="cds-react-aria-10"
                className=" "
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z"
                  fill="currentColor"
                ></path>
              </svg>
                  <p className="mb-0 w-100">
                    Choose from more than 15 Professional Certificate programs
                    from industry leaders like Google, Facebook, and more
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Third div */}
        <div className="col-md-4 ">
          <div className="card mb-3 border border-primary text-center w-100">
            <div className="card-body mt-2">
              <h3 className="card-title mt-3 ">Coursera Plus Annual</h3>
              <p className="card-text mt-3">
                Combine flexibility and savings with long-term learning goals
              </p>
              <div className="d-flex justify-content-between align-items-center">
              <span className=" w-100 fs-3 bold" >₹33,329/year</span>
                
              </div>
              <button className="btn btn-secondary mt-3">
                  Try Coursera Plus Annual
                </button>
              <p className="mt-3" >14-day money-back guarantee</p>
              <p className="fs-5">Everything included in the monthly plan, plus:</p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2 lifirst">
                <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                id="cds-react-aria-10"
                className="mt-2 "
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z"
                  fill="currentColor"
                ></path>
              </svg>
                  <p className="mb-0 mt-2 w-100">
                    Save when you pay up front for the year
                  </p>
                </li>
                <li className="d-flex align-items-center mb-2 lifirst mt-4 m">
                <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                id="cds-react-aria-10"
                className=" "
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z"
                  fill="currentColor"
                ></path>
              </svg>
                  <p className="mb-0 mt-3 w-100">
                    Enjoy maximum flexibility to achieve work/life balance and
                    learn at your own pace
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;