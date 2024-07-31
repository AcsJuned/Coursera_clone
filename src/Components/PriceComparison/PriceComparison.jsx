import React, { useState } from 'react';
import './PriceComparison.css';
import PricingPlans from '../PricingPlans/PricingPlans';
import TeamPricing from '../TeamPricing/TeamPricing';

const PriceComparison = () => {
  const [activePlan, setActivePlan] = useState('individual');

  return (
    <div className='pMain mt-4 w-100 '>
      <h1 className='text-center fs-2 headingc'>Choose the plan that's right for you or your team's goals</h1>
      <div className='ContainerM d-flex align-items-center justify-content-between'>
        <button 
          className={`btn ${activePlan === 'individual' ? 'btn-primary active' : 'inactive'}`}
          onClick={() => setActivePlan('individual')}
        >
          <span>For Individuals</span>
        </button>
        <button 
          className={`btn ${activePlan === 'team' ? 'btn-primary active' : 'inactive'}`}
          onClick={() => setActivePlan('team')}
        >
          <span>For Teams</span>
        </button>
      </div>
      <div className='planContainer'>
        {activePlan === 'individual' ? <PricingPlans /> : <TeamPricing />}
      </div>
    </div>
  );
}

export default PriceComparison;
