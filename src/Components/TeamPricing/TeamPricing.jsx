import React from 'react'
import './TeamPricing.css';

const TeamPricing = () => {
  return (
    <div className='mainConatinerteam d-flex'>
      <div className='content-team w-50 '>
        <h1 className='fs-2 '>Accelerate team performance</h1>
        <p className='text-center w-75 fs-5'>Help employees master new skills and reach their goals with access to world-class learning programs from Coursera for Teams.</p>
      </div>
      <div className="col-md-4  ">
          
          <div className="card seconddiv border border-primary text-center w-100">
            <div className="card-body ">
              <h3 className="card-title mt-3 fs-3">Courses For Team</h3>
              <p className="card-text">
                For 5-125 Users
              </p>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <div className="w-100">
                  <span className="fs-2 bold w-100">$319</span> /<span>Year</span>
                </div>
                
                <br />
               
               
              </div>
              <p className='mt-2'>Per user for 12 months</p> 
              <button className="btn btn-primary w-75 ms-2 mt-2">
                  Get Started 
                </button>
              <p className="mt-4">14-day money-back guarantee</p>
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
                  Upskill 5 to 125 employees
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
                  <p className="mb-0 w-100">Unlimited access to 8,500 learning opportunities</p>
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
                  Program setup and launch tools
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
                  Analytics and benchmarking dashboard
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TeamPricing