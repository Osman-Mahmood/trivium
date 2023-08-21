import React, { useEffect } from 'react'
import billcoin from '../../assets/billcoin.png'
const WhyChoose = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className='diff_bg p-3'>
      <div className='container'>
        <div className='row bg-clr'>
          <h2 className='clr text-center'>Reasons to Select Our Medical Billing Solutions
          </h2>
          <div className='col-lg-6 col-12   bg-clr'>
            <div className='box '>
              <h5>Higher Revenue</h5>
              <p>Get the highest reimbursements possible and boost your revenue by 30%.</p>
              <h5>High Number of Claims Made</h5>
              <p>Our cutting-edge technology allows us to process thousands of error-free claims every day.</p>
              <h5>Observation of Privacy Requirements </h5>
              <p className='mb-5'>Experts in security have created data transfer and encryption.</p>
            </div>
          </div>
          <div className='col-lg-6 col-12  bg-clr '>
            <div className='box '>
              <h5>Individualized Solutions</h5>
              <p>Specialized billing solutions for your area of expertise.</p>

              <h5>
Personalized Assistance
</h5>
              <p>Each client receives a dedicated manager who provides live phone support.</p>
              <h5>Zero-Risk Pricing</h5>
              <p>No additional fees; only paid after successful collections. Put an end to hidden costs.</p>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-lg-8 col-12'>
            <h2 className='clr'>Reduce Costs by Shortening <br /> the Reimbursement Cycle</h2>

            <p>With Trivium MBS, your revenue cycle management is streamlined, clean claims are filed fast, and more claims are paid with less waiting time. Years of testing, assessing, and upgrading our processes have gone into developing our medical billing system in order to provide our clients with the best and quickest recovery possible. We pay attention to your needs, assess your current system, and develop a tailored solution to generate more money more quickly and simply.</p>
          </div>
          <div className='col-lg-4 col-12'>
            <img src={billcoin} alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default WhyChoose
