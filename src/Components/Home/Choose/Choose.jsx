import React from 'react'
import plus from '../../../assets/plus.png'
import tool from '../../../assets/tool.png'
import mso from '../../../assets/mso.png'
import {GiMedicalPackAlt} from 'react-icons/gi'
import {FaStethoscope} from 'react-icons/fa'
import {RiSecurePaymentFill} from 'react-icons/ri'
import './Choose.css'
const Choose = () => {
  return (
    <div>
      <div className='container'>
        <div className='row pt-5 justify-content-between'>
            <div className='col-lg-6 bg_choose'>
                  
                  {/* <div className='box d-flex'>
                  <GiMedicalPackAlt className="icon_height"/>
                  <div className='d-block ms-3'>
                  <h5 className='mb-0'>Medical Billing</h5>
<p className='mb-0'>35-45 specialities</p>
                  </div>

                  </div>
                  <div className='box d-flex'>
                  <FaStethoscope className="icon_height"/>
                  <div className='d-block ms-3'>
                  <h5 className='mb-0'>Practice Management</h5>
                    <p className='mb-0'>Support all segment of RCM</p>
                  </div>
                  
                    </div> */}

            </div>
            <div className='col-lg-6'>
                {/* <p className='mb-0'>Why Choose Us?</p> */}
                <h2 className='clr'>The most comprehensive revenue cycle management solutions for medical practices based on technology and custom solutions</h2>
                <p className=''>Trivium Medical Billing, we can help you achieve greater profitability while at the same time freeing up your time to focus on patients. Our innovative and dynamic medical billing service helps you to achieve a high level of effectiveness that will result in the enhancement of overall practice management. You will see dramatic change in the speed of your revenue cycle because we invest more time and resources into the initial claim process to avoid costly time delays and denials on the back end.
We also use the latest technology and experienced personnel to anticipate and prevent coding and billing errors while maximizing output. Our investment in the initial claim process helps to accelerate revenue cycles, and our advanced technology and experienced personnel minimize coding and billing errors for increased efficiency.


</p>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Choose
