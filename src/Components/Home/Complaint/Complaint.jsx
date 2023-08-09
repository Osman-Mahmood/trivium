import React from 'react'
import hipo from '../../../assets/hipo.png'
import './complain.css'
const Complaint = () => {
  return (
    <div className='complain_bg'>
  <div className='container'>
        <div className='row justify-content-between align-items-center'>
            <div className='col-lg-6'>
<img src={hipo} alt=""  className='img-fluid img_complain'/>
            </div>
            <div className='col-lg-6'>
                <h2 className='clr'>Schedule a Demo</h2>
                <p>For immediate service, give us a call at <strong>800-640-6409</strong> .</p>
                <p>To ensure the security and privacy of patient information our company is in contract with one of the best IT security firms who have the latest encryption and data protection protocols in place.
</p>
                <button className='btn btn_demo text-white p-5'> Demo</button>
                </div>
        </div>
    </div>
    </div>
  
  )
}

export default Complaint
