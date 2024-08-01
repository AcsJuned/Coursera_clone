import React, { useState } from 'react';
import './PriceComparison.css';
import PricingPlans from '../PricingPlans/PricingPlans';
import TeamPricing from '../TeamPricing/TeamPricing';
import { pricingPlans, teamPricing } from '../JSON_File';

const PriceComparison = (props) => {
  const [activePlan, setActivePlan] = useState('individual');
  const { heading, buttons } = props.data;

  return (
    <div className='pMain mt-4 w-100 '>
      <h1 className='text-center fs-2 headingc'>{heading}</h1>
      <div className='ContainerM d-flex align-items-center justify-content-between'>
        {buttons.map((button) => (
          <button 
            key={button.id}
            className={`btn ${activePlan === button.id ? 'btn-primary active' : 'inactive'}`}
            onClick={() => setActivePlan(button.id)}
          >
            <span>{button.label}</span>
          </button>
        ))}
      </div>
      <div className='planContainer'>
        {activePlan === 'individual' ? <PricingPlans data={pricingPlans} /> : <TeamPricing data={teamPricing}/>}
      </div>
    </div>
  );
}

export default PriceComparison;
