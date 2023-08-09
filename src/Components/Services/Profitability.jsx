import React from 'react'
import medicalbill from '../../assets/medicalbill.webp'
const Profitability = () => {
  return (
    <div className='container'>
     <div className='row align-items-center pt-5'>
        <div className='col-lg-6 col-12'>
<h2 className='clr'>Strengthening Profitability and Practice Management in Medical Billing</h2>
<p>We understand the challenges faced by healthcare professionals like you when it comes to managing the complexities of medical billing. Our comprehensive billing services will not only enhance your profitability but we can also perform many of the related tasks that are so time consuming for your staff, including insurance verification and pre-approvals.. By outsourcing your medical billing tasks to us, you will save money and reduce administrative burdens.</p>
<button className='btn btn_demo text-white'>Schedule a Consultation</button>
        </div>
        <div className='col-lg-6 col-12'>
            <img src={medicalbill} alt="" className='img-fluid'/>
            </div>
     </div>
    </div>
  )
}

export default Profitability
