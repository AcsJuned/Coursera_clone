import React from 'react';
import './TeamPricing.css';

const TeamPricing = ({ data }) => {
  return (
    <div className={data.mainContainerClass}>
      <div className={data.contentTeamClass}>
        <h1 className={data.heading.class}>{data.heading.text}</h1>
        <p className={data.description.class}>{data.description.text}</p>
      </div>
      <div className={data.card.containerClass}>
        <div className={data.card.cardClass}>
          <div className={data.card.cardBodyClass}>
            <h3 className={data.card.title.class}>{data.card.title.text}</h3>
            <p className="card-text">{data.card.subtitle}</p>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <div className="w-100">
                <span className="fs-2 bold w-100">{data.card.pricing.amount}</span> /<span>{data.card.pricing.billingPeriod}</span>
              </div>
            </div>
            <p className='mt-2'>{data.card.pricing.perUser}</p>
            <button className={data.card.button.class}>{data.card.button.text}</button>
            <p className="mt-4">{data.card.guarantee}</p>
            <ul className="list-unstyled">
              {data.card.features.map((feature, index) => (
                <li key={index} className="d-flex align-items-center mb-2 lifirst">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    focusable="false"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    id="cds-react-aria-10"
                    className=""
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="mb-0 w-100">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamPricing;
