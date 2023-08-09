import React from 'react'
import revenue from '../../../assets/revenue.png'
import {GiHospital} from 'react-icons/gi'
import {FaHospitalUser} from 'react-icons/fa'
import {FaSackDollar} from 'react-icons/fa6'
import {ImLab} from 'react-icons/im'
import {LiaHospitalSolid} from 'react-icons/lia'
import {BsUmbrella} from 'react-icons/bs'
import {TbAmbulance} from 'react-icons/tb'
import {IoBagAddSharp} from 'react-icons/io5'
import './revenue.css'
const Revenue = () => {
  return (
    <div className='container'>
        <div className='row mt-4 justify-content-between'>
        Trivium MBS Revenue Cycle Management and Billing Services

                <h5 className='clr'></h5>
                <div className='col-lg-12 d-lg-flex d-block  gap-3 mt-3'>
                <div className='col-lg-3 mb-2 col-12 revenue_box'>
 {/* <img src={revenue} alt="" /> */}
 <GiHospital className="icon_height"/>
 <h5>Hospital Billing <br /> Services</h5>
<p className='text-primary'>More Info</p>
                </div>
    
                <div className='col-lg-3 mb-2 col-12 revenue_box'>
 {/* <img src={revenue} alt="" /> */}
 <FaHospitalUser className="icon_height"/>
 <h5>Physician Billing <br />
Services</h5>
<p className='text-primary'>More Info</p>
                </div>
                <div className='col-lg-3 mb-2 col-12 revenue_box'>
 {/* <img src={revenue} alt="" /> */}
 <ImLab className="icon_height"/>
 <h5>Laboratory Billing <br />
Services</h5>
<p className='text-primary'>More Info</p>
                </div>
                <div className='col-lg-3 mb-2 col-12 revenue_box'>
 {/* <img src={revenue} alt="" /> */}
 <LiaHospitalSolid className="icon_height"/>
 <h5>Imaging Center <br />
Billing</h5>
<p className='text-primary'>More Info</p>
                </div>
            </div>
        </div>
     <div className='row'>
     <div className='col-lg-12 d-lg-flex d-block gap-3 mt-lg-3 mt-0'>
                <div className='col-lg-3 mb-2 col-12 revenue_box'>
 {/* <img src={revenue} alt="" /> */}
 <BsUmbrella className="icon_height"/>
 <h5>Coverage Discovery</h5>
<p className='text-primary'>More Info</p>
                </div>
    
                <div className='col-lg-3 mb-2  col-12 revenue_box'>
 {/* <img src={revenue} alt="" /> */}
 <FaSackDollar className="icon_height"/>
 <h5>AR Recovery <br />
Services</h5>
<p className='text-primary'>More Info</p>
                </div>
                <div className='col-lg-3 mb-2  col-12 revenue_box'>
 {/* <img src={revenue} alt="" /> */}
 <TbAmbulance className="icon_height"/>
 <h5>Ambulatory Surgery <br /> Billing</h5>
<p className='text-primary'>More Info</p>
                </div>
                <div className='col-lg-3 mb-2  col-12 revenue_box'>
 {/* <img src={revenue} alt="" /> */}
 <IoBagAddSharp className="icon_height"/>
 <h5>Medical Billing
Services</h5>
<p className='text-primary'>More Info</p>
                </div>
            </div>
            <div className=' text-end pt-3 col-12 mb-3'>
     <button className='btn btn_demo text-white'>View All Services</button>
     </div>
     </div>
    
   
    </div>
  )
}

export default Revenue
