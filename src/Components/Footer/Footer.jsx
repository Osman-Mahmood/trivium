import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'
const Footer = () => {
   return (
      <div className='footer mt-3 p-5'>
         <div className='container '>
            <div className='row justify-content-start px-lg-5 px-0 ms-lg-5 ms-0'>
               <div className='col-lg-3 col-12'>
                  <h5 className='text-white'>Our Services</h5>
                  <ul className='p-0 footer_ul'>
                     <NavLink to="medical">
                        <li>Medical Billing</li>
                     </NavLink>
                     <NavLink to="laboratory">
                        <li>Laboratory Billing</li>
                     </NavLink>
                     <NavLink to="surgery">
                        <li>Ambulatory Surgery</li>
                     </NavLink>
                     <NavLink to="recovery">
                        <li>AR Recovery Services</li>
                     </NavLink>
                     <NavLink to="imaging">
                        <li>Imaging Billing</li>
                     </NavLink>
                     <NavLink to="hospital">
                        <li>Hospital Billing</li>
                     </NavLink>
                  </ul>
               </div>
               <div className='col-lg-3 col-12'>
                  <h5 className='text-white'>Specialties</h5>
                  <ul className='p-0 footer_ul'>
                     <NavLink to="/sepcial/hepatology">
                        <li>Hepatology
                        </li>
                     </NavLink>
                     <NavLink to="/sepcial/oncology">
                        <li>Oncology
                        </li>
                     </NavLink>

                     <NavLink to="/sepcial/psychiatric">
                        <li>Psychiatric</li>
                     </NavLink>
                     <NavLink to="/sepcial/urology">
                        <li>Urology</li>
                     </NavLink>
                     <NavLink to="/sepcial/dermatology">
                        <li>Dermatology</li>
                     </NavLink>
                     <NavLink to="/sepcial/cardiology">


                        <li>Cardiology</li>
                     </NavLink>



                  </ul>
               </div>
               <div className='col-lg-3 col-12'>
                  <h5 className='text-white'>Specialties</h5>
                  <ul className='p-0 footer_ul'>
                  <NavLink to="/sepcial/cardiovascular">
                        <li>Cardiovascular
                        </li>
                     </NavLink>
                     <NavLink to="/sepcial/clinical">
                        <li>Clinical Lab
                        </li>
                     </NavLink>

                     <NavLink to="/sepcial/pathology">
                        <li>Pathology Lab</li>
                     </NavLink>
                     <NavLink to="/sepcial/toxicology">
                        <li>Toxicology Lab </li>
                     </NavLink>
                     <NavLink to="/sepcial/molecularlab">
                        <li>Molecular Lab</li>
                     </NavLink>
                     <NavLink to="/sepcial/internalmedicine">


                        <li>
                           Internal Medicine
                        </li>
                     </NavLink>


                  </ul>
               </div>
               <div className='col-lg-3 col-12'>
                  <h5 className='text-white'>Quick Links</h5>
                  <ul className='p-0 footer_ul'>
                     <NavLink to="/">
                        <li>Home</li>
                     </NavLink>
                     <NavLink to="about">
                        <li>About Us</li>
                     </NavLink>
                     <NavLink to="contact">
                        <li>Contact Us</li>
                     </NavLink>
                  </ul>
               </div>
               {/* <div className='col-lg-3 col-12'>
                  <h5 className='text-white'>Keep Connected

                  </h5>
                  <ul className='p-0 footer_ul'>
                     <input type="text" className='bg-transparent w-100 border border-light rounded text-white p-2' placeholder='Name ' />
                     <input type="text" className='bg-transparent w-100 border border-light rounded text-white p-2 mt-3' placeholder='Your Email ' />
                     <button className='btn mt-3 btn_demo w-100 text-white'>Subscribe</button>
                  </ul>
               </div> */}
               
            </div>

         </div>
      </div>

   )
}

export default Footer
