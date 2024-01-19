import React from 'react'
import './special.css'
import specialicon1 from '../../../assets/specialicon1.png'
import {GiStickingPlaster,GiHiveMind,GiHeartOrgan} from 'react-icons/gi'
import {FaWheelchair,FaViruses,FaHands,FaPeopleArrows} from 'react-icons/fa'
import {ImLab} from 'react-icons/im'
import { NavLink } from 'react-router-dom'
const Specialist = () => {
  return (
    <div className='container'>
        <h3 className='clr pt-5 mb-3'>Our Specialties</h3>
     

        <div className='row justify-content-between gap-1'>
            <div className='col-lg-12 d-lg-flex d-block gap-3'>
            <div className='col-lg-3 p-2 mb-2 revenue_box text-center'>
                <NavLink to="/specialties/hepatology" className="ms-0">

                <GiStickingPlaster className="icon_height mb-3"/>
    <p className='text-center mb-0'>
    Hepatology</p>
                </NavLink>
  
</div>
<div className='col-lg-3 p-2 mb-2 revenue_box text-center'>
    <NavLink to="/specialties/cardiology" className="ms-0">
    <FaWheelchair className="icon_height mb-3" />
    <p className='text-center mb-0'>
    Sepcial/Sepatology</p>
    </NavLink>
   
</div>
<div className='col-lg-3 p-2 mb-2 revenue_box text-center'>
    <NavLink to="/specialties/generalsurgery" className="ms-0">
    <FaViruses className="icon_height mb-3" />
    <p className='text-center mb-0'>
    General Surgery</p>
    </NavLink>
  
</div>
<div className='col-lg-3 p-2 mb-2 revenue_box text-center'>
<NavLink to="/specialties/oncology" className="ms-0">
    {/* <img src={specialicon1} alt="" className='img-fluid text-center special_img'/> */}
    <FaHands className="icon_height mb-3 text-center"/>
 
    <p className='text-center mb-0 '>
Oncology</p>
    </NavLink>
   
</div>
            </div>

        </div>
        <div className='row justify-content-between gap-1 mt-lg-3 mt-0'>
            <div className='col-lg-12 d-lg-flex d-block gap-3'>
            <div className='col-lg-3 p-2 revenue_box text-center'>
                <NavLink to="/specialties/psychology" className="ms-0">
                <FaPeopleArrows className="icon_height mb-3"/>
    <p className='text-center mb-0'>
        Psychology
</p>
                </NavLink>
  
</div>
<div className='col-lg-3 p-2 revenue_box text-center'>
    <NavLink to="/specialties/dermatology" className="ms-0">
    <GiHiveMind className="icon_height mb-3" />
    <p className='text-center mb-0'>
    Dermatology</p>
    </NavLink>
   
</div>
<div className='col-lg-3  p-2 revenue_box text-center'>
    <NavLink to="/specialties/prostheses" className="ms-0">
    <GiHeartOrgan className="icon_height mb-3"/>
    <p className='text-center mb-0'>
        Prostheses
    </p>
    </NavLink>
   
</div> 
<div className='col-lg-3 p-2 revenue_box text-center'>
        <NavLink to="/specialties/traumatology" className="ms-0">
        <GiHeartOrgan className="icon_height mb-3"/>
    <p className='text-center mb-0'>
    Traumatology</p>
        </NavLink>
</div>

            </div>
<div className='text-end pt-3 mb-5'>
    <NavLink to="/specialties">
    <button className='btn btn_demo text-white'>View All Specialties</button>
    </NavLink>

</div>
          

        </div>
    </div>
  )
}

export default Specialist
