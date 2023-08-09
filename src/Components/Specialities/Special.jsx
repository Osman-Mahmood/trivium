import React from 'react'
import special from '../../assets/special.png'
import {GiStickingPlaster} from 'react-icons/gi'
// import {GiStickingPlaster} from 'react-icons/gi'
// import {GiStickingPlaster} from 'react-icons/gi'
// import {GiStickingPlaster} from 'react-icons/gi'
const Special = () => {
  return (
    <div className='container'>
      <div className='row'>
        <h2 className='clr text-center'>Our Specialties</h2>
        <div className='col-lg-12 d-lg-flex d-block gap-3 mt-5 pt-5'>
            <div className='col-lg-3 col-12 text-center revenue_box'>
                  {/* <img src={special} alt="" /> */}
                  <GiStickingPlaster className="icon_height"/>
                  <p>Hepatology</p>
            </div>
            <div className='col-lg-3 col-12 text-center revenue_box'>
            <GiStickingPlaster className="icon_height"/>
                  <p>Cardiology</p>
            </div>
            <div className='col-lg-3 col-12 text-center revenue_box'>
            <GiStickingPlaster className="icon_height"/>
                  <p>Urology</p>
            </div>
            <div className='col-lg-3 col-12 text-center revenue_box'>
            <GiStickingPlaster className="icon_height"/>
                  <p>Oncology</p>
            </div>
        </div>
        <div className='col-lg-12  d-lg-flex d-block  gap-3 mt-lg-3 mt-0'>
            <div className='col-lg-3 col-12 text-center revenue_box'>
                  <img src={special} alt="" />
                  <p>Nephrology</p>
            </div>
            <div className='col-lg-3 col-12 text-center revenue_box'>
                  <img src={special} alt="" />
                  <p>Podiatry</p>
            </div>
            <div className='col-lg-3 col-12 text-center revenue_box'>
                  <img src={special} alt="" />
                  <p>Psychiatric</p>
            </div>
            <div className='col-lg-3 col-12 text-center revenue_box'>
                  <img src={special} alt="" />
                  <p>

Psychology</p>
            </div>
        </div>
        <div className='col-lg-12  d-lg-flex d-block gap-3 mt-lg-3 mt-0'>
            <div className='col-lg-3 col-12 text-center revenue_box'>
                  <img src={special} alt="" />
                  <p>Clinical Lab</p>
            </div>
            <div className='col-lg-3 col-12 text-center revenue_box'>
                  <img src={special} alt="" />
                  <p>Medical Clinics</p>
            </div>
            <div className='col-lg-3 col-12 text-center revenue_box'>
                  <img src={special} alt="" />
                  <p>General Surgery</p>
            </div>
            <div className='col-lg-3 col-12 text-center revenue_box'>
                  <img src={special} alt="" />
                  <p>FQHC</p>
            </div>
        </div>
        <div className='col-lg-12  d-lg-flex d-block  gap-3 mt-lg-3 mt-0'>
            <div className='col-lg-3 col-12 text-center revenue_box'>
                  <img src={special} alt="" />
                  <p>

Traumatology</p>
            </div>
            <div className='col-lg-3 col-12 text-center revenue_box'>
                  <img src={special} alt="" />
                  <p>

Rheumatology</p>
            </div>
            <div className='col-lg-3 col-12 text-center revenue_box'>
                  <img src={special} alt="" />
                  <p>Prostheses</p>
            </div>
            <div className='col-lg-3 col-12 text-center revenue_box'>
                  <img src={special} alt="" />
                  <p>

Dermatology</p>
            </div>
        </div>
        <div className='col-lg-12 d-lg-flex d-block  gap-3 mt-lg-3 mt-0'>
            <div className='col-lg-3 col-12 text-center revenue_box'>
                  <img src={special} alt="" />
                  <p>
Pulmonology</p>
            </div>
            <div className='col-lg-3 col-12 text-center revenue_box'>
                  <img src={special} alt="" />
                  <p>Pathology Lab</p>
            </div>
            <div className='col-lg-3 col-12 text-center revenue_box'>
                  <img src={special} alt="" />
                  <p>
Thoracic Surgery
</p>
            </div>
            <div className='col-lg-3 col-12 text-center revenue_box'>
                  <img src={special} alt="" />
                  <p>Cardiovascular</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Special
