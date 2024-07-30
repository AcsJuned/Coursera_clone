import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonials.css'; 

const Testimonials = () => {
  return (
    <div className="container bg-white">
      <div className="row">
        <div className="col">
          <h2 className="text-center fs-4 mt-5">
            Join thousands of Coursera Plus learners achieving their goals
          </h2>
          <div className="d-flex justify-content-center">
            <div className="text-center fs-6">
              <span>
                77% of learners report career benefits, like landing a new job, earning a promotion, gaining applicable skills, and more.
              </span>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-4">
              <div className="testimonial-card p-3">
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/4c1519ae23ed104e3b1d4d6fa51ac1ac.png?auto=format%2Ccompress&amp;dpr=1&amp;w=210&amp;h=210&amp;fit=crop"
                  alt="Learner Abigail P."
                  className="img-fluid rounded-circle"
                />
                <blockquote className="text-start fs-6 mt-4">
                  I have a full-time job and 3 kids. <strong>I needed the flexibility offered by Coursera Plus in order to achieve my goals.</strong> I learned business statistics and analysis to apply to my job, but my Coursera Plus subscription motivated me to keep learning. I have a new career goal to pivot into data analysis and data science. I'm learning Python now!
                </blockquote>
                <footer className="text-end">Abigail P. | United States</footer>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="testimonial-card p-3">
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/1b0cea526b6c74fa63a856dc5c6c236c.png?auto=format%2Ccompress&amp;dpr=1&amp;w=210&amp;h=210&amp;fit=crop"
                  alt="Learner Shi Jie F."
                  className="img-fluid rounded-circle"
                />
                <blockquote className="text-start fs-6 mt-4">
                  Coursera Plus keeps me motivated to learn. <strong>With each course, I'm getting more value out of my subscription.</strong> I can focus on life sciences—my main specialty—but also pursue other interests like society and religion. I can access almost anything with Coursera Plus!
                </blockquote>
                <footer className="text-end">Shi Jie F. | Singapore</footer>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="testimonial-card p-3">
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/fe1400b5e7961760164fc58ea2737840.png?auto=format%2Ccompress&amp;dpr=1&amp;w=210&amp;h=210&amp;fit=crop"
                  alt="Learner Inés K."
                  className="img-fluid rounded-circle"
                />
                <blockquote className="text-start fs-6 mt-4">
                  I really appreciate the flexibility I get with Coursera Plus. <strong>I can try any course and switch to another one for no additional cost.</strong> This motivates me to learn even more—at one point I was taking three courses at the same time!
                </blockquote>
                <footer className="text-end">Inés K. | France</footer>
              </div>
            </div>
          </div>
          <p className="text-center">Source: Coursera Learner Outcomes Survey 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
