import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start">
      <div className="container p-4">
        <div className="row rowContainer">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Get Started with AI</h5>
            <ul className="list-unstyled mb-0 footer-links">
              <li><a href="#!" className="text-body">DLAI AI For Everyone Course</a></li>
              <li><a href="#!" className="text-body">DLAI Deep Learning Specialization</a></li>
              <li><a href="#!" className="text-body">DLAI GenAI with LLMs Course</a></li>
              <li><a href="#!" className="text-body">Google AI Essentials </a></li>
              <li><a href="#!" className="text-body">Google Cloud Introduction to Generative AI Course</a></li>
              <li><a href="#!" className="text-body">IBM AI Product Manager Professional Certificate</a></li>
              <li><a href="#!" className="text-body">Stanford Machine Learning Specialization</a></li>
              <li><a href="#!" className="text-body">Vanderbilt Prompt Engineering for ChatGPT Course </a></li>
              <li><a href="#!" className="text-body">All Artificial Intelligence Courses </a></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Popular Career Certificates</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#!" className="text-body">Google Cybersecurity Professional Certificate</a></li>
              <li><a href="#!" className="text-body">Google Data Analytics Professional Certificate</a></li>
              <li><a href="#!" className="text-body">Google Digital Marketing Professional Certificate</a></li>
              <li><a href="#!" className="text-body">Google Project Management Professional Certificate </a></li>
              <li><a href="#!" className="text-body">Google UX Design Professional Certificate </a></li>
              <li><a href="#!" className="text-body">IBM Data Science Professional Certificate </a></li>
              <li><a href="#!" className="text-body">Microsoft Power BI Data Analyst Professional Certificate </a></li>
              <li><a href="#!" className="text-body">All Career Certificates </a></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Popular Subjects</h5>
            <ul className="list-unstyled mb-0 footer-links">
              <li><a href="#!" className="text-body">Cybersecurity </a></li>
              <li><a href="#!" className="text-body">Data Analytics</a></li>
              <li><a href="#!" className="text-body">Digital Marketing</a></li>
              <li><a href="#!" className="text-body">Generative AI </a></li>
              <li><a href="#!" className="text-body">Project Management</a></li>
              <li><a href="#!" className="text-body">Python </a></li>
              <li><a href="#!" className="text-body">All Courses </a></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Links</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#!" className="text-body">Popular Resources</a></li>
              <li><a href="#!" className="text-body">How to Become a Data Analyst</a></li>
              <li><a href="#!" className="text-body">How to Get a PMP Certification</a></li>
              <li><a href="#!" className="text-body">Popular Cybersecurity Certifications</a></li>
              <li><a href="#!" className="text-body">Popular Data Analytics Certifications</a></li>
              <li><a href="#!" className="text-body">Popular IT Certifications</a></li>
              <li><a href="#!" className="text-body">Popular Machine Learning Certifications</a></li>
              <li><a href="#!" className="text-body">Popular SQL Certifications</a></li>
              <li><a href="#!" className="text-body">Career Insights & Advice Hub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="row rowContainer">
          <div className="col-12 mb-4">
            <section className="mb-4">
              <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="#!" role="button">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{ backgroundColor: '#55acee' }} href="#!" role="button">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} href="#!" role="button">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="#!" role="button">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href="#!" role="button">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{ backgroundColor: '#333333' }} href="#!" role="button">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </section>
          </div>
        </div>
      </div>
      
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Coursera Inc.
        <a className="text-body" href="www.google.com"> All rights reserved</a>
      </div>
    </footer>
  );
};

export default Footer;
