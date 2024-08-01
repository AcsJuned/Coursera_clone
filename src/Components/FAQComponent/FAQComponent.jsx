import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FAQComponent.css";

const FAQComponent = ({ data }) => {
  
  const { faqs } = data;

  
  const [openFaqs, setOpenFaqs] = useState(
    faqs.reduce((acc, faq) => {
      acc[faq.id] = false; 
      return acc;
    }, {})
  );

  
  const handleToggle = (id) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="faqContainer">
      <div className="container text-center">
        <h1 className="text-center my-4">Frequently Asked Questions</h1>
        <div className="row justify-content-center containerdiv">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              {faqs.map((faq) => (
                <div className="accordion-item" key={faq.id}>
                  <h2 className="accordion-header" id={`panelsStayOpen-heading-${faq.id}`}>
                    <button
                      className="accordion-button"
                      type="button"
                      onClick={() => handleToggle(faq.id)}
                      aria-expanded={openFaqs[faq.id]}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`panelsStayOpen-collapse${faq.id}`}
                    className={`accordion-collapse collapse ${openFaqs[faq.id] ? 'show' : ''}`}
                    aria-labelledby={`panelsStayOpen-heading${faq.id}`}
                  >
                    <div className="accordion-body">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
