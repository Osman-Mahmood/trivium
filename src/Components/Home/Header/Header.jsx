import React,{useEffect} from 'react'
import './header.css'
import clock from '../../../assets/clock.webp'
import home from '../../../assets/home.png'
// import tax from '../../../assets/tax.svg'
import vol from '../../../assets/vol.webp'
import {BiSortDown} from 'react-icons/bi'
import {AiOutlineDollarCircle,AiOutlineFileSync} from 'react-icons/ai'
import GST from '../../../assets/GST-.png'
import { NavLink } from 'react-router-dom'
const Header = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className=''>
        <div className='container '>
          <div className='row p-1'>
            <div className='col-lg-6 pt-5 col-12'>
              <p className='mb-0'>We Take Care Of Your</p>
              <h1 className='head_text'>Revenue Cycle <br /> Management</h1>
              <p>Generate revenue faster and more effectively

              </p>
              <div className='d-flex gap-3 mt-4'>
              <NavLink to="contact" className="ms-0 mb-lg-0 mb-3">
                <button className='btn btn_header text-white p-3'>
                  Schedule a Call
                </button>
                </NavLink>
                {/* <button className='btn btn_header text-white'>
Schedule Demo
</button> */}
              </div>

            </div>
            <div className='col-lg-6 col-12'>
              <img src={GST} alt="" className='img-fluid home_height'/>
              </div>
          
            {/* <div className='col-lg-6'>
          
          </div> */}
          </div>

        </div>
      </div>
      <div className='bg_clr p-5'>
        <div className='container'>
          <div className='row'>

            <h1 className='text-center text-white'>Performance Indicators</h1>
            <div className='col-lg-12 mt-4 text-white d-lg-flex d-block justify-content-between'>
              <div className='img_header text-center'>
                <img src={clock} alt="" />
                <h2 className='mb-0'>7-14</h2>
                <p>Days Turnaround Time</p>
              </div>
              <div className='img_header text-center'>
                {/* <img src={vol} alt="" /> */}
                <BiSortDown className='icon_height'/>
                
                <h2 className='mb-0'>30%</h2>
                <p>Reduction in A/R</p>
              </div>
              <div className='img_header text-center'>
                <img src={vol} alt="" />
                {/* <BsGraphUpArrow /> */}
                <h2 className='mb-0'>15-20%</h2>
                <p>Revenue Increase</p>
              </div>
              <div className='img_header text-center'>
                {/* <img src={clock} alt="" /> */}
                <AiOutlineDollarCircle className='icon_height'/>
                <h2 className='mb-0'>90%+</h2>
                <p>Collection Ratios</p>
              </div>
              <div className='img_header text-center'>
                {/* <img src={clock} alt="" /> */}
                <AiOutlineFileSync className='icon_height'/>
                <h2 className='mb-0'>88%</h2>
                <p>First Pass Clean Claims Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Header
