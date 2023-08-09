import React from 'react'
import './different.css'
import abouticon from '../../../assets/abouticon.png'
const Different = () => {
  return (
    <div className='diff_bg'>
   <div className='container '>
      <div className='row pb-3'>
        <h1 className='clr text-center mt-3 mb-2'>What Makes Us Different?</h1>
        <div className='col-lg-12 d-flex gap-3'>
        <div className='col-lg-4 about_box text-center'>
<img src={abouticon} alt="" className='img-fluid'/>
<h5 className='mt-2'>88%</h5>
<p>First Pass Clean Claims Rate</p>
        </div>
        <div className='col-lg-4 about_box text-center'>
<img src={abouticon} alt="" className='img-fluid'/>
<h5 className='mt-2'>88%</h5>
<p>First Pass Clean Claims Rate</p>
        </div>
        <div className='col-lg-4 about_box text-center'>
<img src={abouticon} alt="" className='img-fluid'/>
<h5 className='mt-2'>88%</h5>
<p>First Pass Clean Claims Rate</p>
        </div>
        </div>

        <div className='col-lg-12 mt-lg-2 mt-0 d-flex gap-3'>
        <div className='col-lg-4 about_box text-center'>
<img src={abouticon} alt="" className='img-fluid'/>
<h5 className='mt-2'>88%</h5>
<p>First Pass Clean Claims Rate</p>
        </div>
        <div className='col-lg-4 about_box text-center'>
<img src={abouticon} alt="" className='img-fluid'/>
<h5 className='mt-2'>88%</h5>
<p>First Pass Clean Claims Rate</p>
        </div>
        <div className='col-lg-4 about_box text-center'>
<img src={abouticon} alt="" className='img-fluid'/>
<h5 className='mt-2'>88%</h5>
<p>First Pass Clean Claims Rate</p>
        </div>
        </div>
        
      </div>
    </div>
    </div>
 
  )
}

export default Different
