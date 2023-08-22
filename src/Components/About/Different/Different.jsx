import React from 'react'
import './different.css'
import abouticon from '../../../assets/download-(1).png'
import abouticon2 from '../../../assets/download-(2).png'
import abouticon3 from '../../../assets/download-(3).png'
import abouticon4 from '../../../assets/download-(4).png'
import abouticon5 from '../../../assets/download-(5).png'
import abouticon6 from '../../../assets/download-(6).png'
const Different = () => {
  return (
    <div className='diff_bg'>
   <div className='container '>
      <div className='row pb-3'>
        <h1 className='clr text-center mt-5 mb-5'>What Makes Us Different?</h1>
        <div className='col-lg-12 d-lg-flex d-block gap-3'>
        <div className='col-lg-4 col-12 about_box text-center mb-lg-0 mb-3'>
<img src={abouticon} alt="" className='img-fluid'/>
<h5 className='mt-2'>88%</h5>
<p className='text-center'>First Pass Clean Claims Rate</p>
        </div>
        <div className='col-lg-4 col-12 about_box text-center mb-lg-0 mb-3'>
<img src={abouticon2} alt="" className='img-fluid'/>
<h5 className='mt-2'>15-20%</h5>
<p className='text-center'>Revenue Increase</p>
        </div>
        <div className='col-lg-4 col-12 about_box text-center mb-lg-0 mb-3'>
<img src={abouticon3} alt="" className='img-fluid'/>
<h5 className='mt-2'>30%</h5>
<p className='text-center'>Reduction in A/R</p>
        </div>
        </div>

        <div className='col-lg-12 mt-lg-2 mt-0 d-lg-flex d-block gap-3'>
        <div className='col-lg-4 col-12 about_box text-center mb-lg-0 mb-3'>
<img src={abouticon4} alt="" className='img-fluid'/>
<h5 className='mt-2'>7-14</h5>
<p className='text-center'>Days Turn Around Time</p>
        </div>
        <div className='col-lg-4 col-12 about_box text-center mb-lg-0 mb-3'>
<img src={abouticon5} alt="" className='img-fluid'/>
<h5 className='mt-2'>90%+</h5>
<p className='text-center'>Collection Ratios</p>
        </div>
        <div className='col-lg-4 col-12 about_box text-center mb-lg-0 mb-3'>
<img src={abouticon6} alt="" className='img-fluid'/>
<h5 className='mt-2'>↓ 10%</h5>
<p className='text-center'>120+ AR</p>
        </div>
        </div>
        
      </div>
    </div>
    </div>
 
  )
}

export default Different
