import React,{useEffect} from 'react'
import medicalbill from '../../assets/medicalbill.webp'
const Profitability = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className='container'>
     <div className='row align-items-center pt-5'>
        <div className='col-lg-6 col-12'>
<h2 className='clr'>Enhancing Medical Billing Practice Management and Profitability</h2>
<p>We comprehend the difficulties handling the complexities of medical billing that healthcare providers like you confront. Our thorough billing services will increase your profitability in addition to taking care of many of the related tasks that take your personnel so much time, like insurance verification and pre-approvals. You can cut costs and administrative work by outsourcing to us your medical billing needs.</p>
{/* <button className='btn btn_demo text-white'>Schedule a Consultation</button> */}
        </div>
        <div className='col-lg-6 col-12'>
            <img src={medicalbill} alt="" className='img-fluid'/>
            </div>
     </div>
    </div>
  )
}

export default Profitability
