import React from 'react'
import './special.css'
import specialicon1 from '../../../assets/specialicon1.png'
import {GiStickingPlaster,GiHiveMind,GiHeartOrgan} from 'react-icons/gi'
import {FaWheelchair,FaViruses,FaHands,FaPeopleArrows} from 'react-icons/fa'
import {ImLab} from 'react-icons/im'
const Specialist = () => {
  return (
    <div className='container'>
        <h5 className='clr pt-5'>Our Specialties</h5>
     

        <div className='row justify-content-between gap-1'>
            <div className='col-lg-12 d-lg-flex d-block gap-3'>
            <div className='col-lg-3 p-2 mb-2 revenue_box text-center'>
    {/* <img src={specialicon1} alt="" className='img-fluid text-center special_img'/> */}
    <GiStickingPlaster className="icon_height mb-3"/>
    <p className='text-center mb-0'>
Wound Care</p>
</div>
<div className='col-lg-3 p-2 mb-2 revenue_box text-center'>
    {/* <img src={specialicon1} alt="" className='img-fluid text-center special_img'/> */}
    <FaWheelchair className="icon_height mb-3" />
    <p className='text-center mb-0'>
    DME</p>
</div>
<div className='col-lg-3 p-2 mb-2 revenue_box text-center'>
    {/* <img src={specialicon1} alt="" className='img-fluid text-center special_img'/> */}
    <FaViruses className="icon_height mb-3" />
    <p className='text-center mb-0'>
OB/GYN</p>
</div>
<div className='col-lg-3 p-2 mb-2 revenue_box text-center'>
    {/* <img src={specialicon1} alt="" className='img-fluid text-center special_img'/> */}
    <FaHands className="icon_height mb-3"/>
    <p className='text-center mb-0'>
Oncology</p>
</div>
            </div>

        </div>
        <div className='row justify-content-between gap-1 mt-lg-3 mt-0'>
            <div className='col-lg-12 d-lg-flex d-block gap-3'>
            <div className='col-lg-3 p-2 revenue_box text-center'>
    {/* <img src={specialicon1} alt="" className='img-fluid text-center special_img'/> */}
    <FaPeopleArrows className="icon_height mb-3"/>
    <p className='text-center mb-0'>
    Rehab</p>
</div>
<div className='col-lg-3 mb-2 p-2 revenue_box text-center'>
    {/* <img src={specialicon1} alt="" className='img-fluid text-center special_img'/> */}
    <GiHiveMind className="icon_height mb-3" />
    <p className='text-center mb-0'>
    Dermatology</p>
</div>
<div className='col-lg-3 mb-2 p-2 revenue_box text-center'>
    {/* <img src={specialicon1} alt="" className='img-fluid text-center special_img'/> */}
    <GiHeartOrgan className="icon_height mb-3"/>
    <p className='text-center mb-0'>
    Cardiology</p>
</div> 
<div className='col-lg-3  mb-2 p-2 revenue_box text-center'>
    {/* <img src={specialicon1} alt="" className='img-fluid text-center special_img'/> */}
    <ImLab className="icon_height mb-3"/>
    <p className='text-center mb-0'>
    Urology
Urology</p>
</div>

            </div>
<div className='text-end pt-3'>
<button className='btn btn_demo text-white'>View All Specialties</button>
</div>
          

        </div>
    </div>
  )
}

export default Specialist
