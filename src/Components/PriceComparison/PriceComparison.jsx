import React from 'react'
import './PriceComparison.css'
import PricingPlans from '../PricingPlans/PricingPlans'

const PriceComparison = () => {
  return (
    <div className='pMain mt-5 '>
      <h1 className='text-center fs-2  '> Choose the plan that's right for you or your team's goals</h1>
      <div className='ContainerM w-100 '>
        <button className='btn btn-primary'> <span>For Individuals</span></button>
        
        <button className='btn btn-primary' > <span>For Individuals</span></button>
        
      </div>
      <PricingPlans/>

    </div>
  )
}

export default PriceComparison
