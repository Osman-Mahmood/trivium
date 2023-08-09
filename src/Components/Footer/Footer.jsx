import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer mt-3 p-5'>
  <div className='container pt-5 '>
        <div className='row'>
   <div className='col-lg-3 col-12'>
<h5 className='text-white'>Our Services</h5>
<ul className='p-0 footer_ul'>
    <li>Medical Billing</li>
    <li>Laboratory Billing</li>
    <li>Physician Billing</li>
    <li>AR Recovery Services</li>
    <li>Imaging Billing</li>
    <li>Hospital Billing</li>
</ul>
   </div>
   <div className='col-lg-3 col-12'>
<h5 className='text-white'>Specialties</h5>
<ul className='p-0 footer_ul'>
    <li>Rehab
</li>
    <li>Oncology
</li>
    <li>Psychiatric</li>
    <li>Wound Care</li>
    <li>Dermatology</li>
    <li>Cardiology</li>
</ul>
   </div>
   <div className='col-lg-3 col-12'>
<h5 className='text-white'>Quick Links</h5>
<ul className='p-0 footer_ul'>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Testimonial</li>
    <li>Blog</li>
    <li>States</li>
</ul>
   </div>
   <div className='col-lg-3 col-12'>
<h5 className='text-white'>Keep Connected

</h5>
<ul className='p-0 footer_ul'>
    <input type="text" className='bg-transparent w-100 border border-light rounded text-white p-2' placeholder='Name '/>
    <input type="text" className='bg-transparent w-100 border border-light rounded text-white p-2 mt-3' placeholder='Your Email '/>
    <button className='btn mt-3 btn_demo w-100 text-white'>Subscribe</button>
</ul>
   </div>
        </div>
      
    </div>
    </div>
  
  )
}

export default Footer
