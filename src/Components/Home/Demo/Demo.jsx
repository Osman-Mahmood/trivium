import React from 'react'
import './demo.css'
import demo from '../../../assets/demo.png'
import {BsGraphDown,BsGraphUpArrow} from 'react-icons/bs'
import {FaRegMoneyBill1} from 'react-icons/fa6'
const Demo = () => {
  return (
    <div className='demo p-lg-5 p-2'>
  <div className='container '>
        <div className='row justify-content-between'>
            <div className='col-lg-6 col-12'>
<h2 className='clr'>With Trivium MBS, you get a host of benefits</h2>
<div className='demo_box d-flex'>
    {/* <img src={demo} alt="" className='choose_icons'/> */}
    <BsGraphDown className='icon_height'/>
    <div className='d-block ms-3'>
    <h5>Reducing costs:
</h5>
<p>You will save 40% to 50% by using Trivium MBS and we will only charge you a small percentage.</p>
    </div>

</div>
<div className='demo_box d-flex'>
{/* <img src={demo} alt="" className='choose_icons'/> */}
<BsGraphUpArrow className='icon_height2'/>
    <div className='d-block ms-3'>
    <h5>Revenue growth:
</h5>
    <p>Through regular audits and reviews of billing processes and claim submissions, Trivium can help maintain revenue integrity by reducing the number of claims rejected or denied.</p>
</div>
</div>
<div className='demo_box d-flex'>
{/* <img src={demo} alt="" className='choose_icons'/> */}
<FaRegMoneyBill1 className="icon_height2"/>
    <div className='d-block ms-3'>
    <h5>Faster payment:
</h5>
    <p>In order to ensure that claims are submitted on time, we provide dynamic billing services, as well as ERAs and EFTs so that payments can be received sooner.
</p>
</div>
</div>
            </div>


            <div className='col-lg-6 col-12 '>
                <h2 className='clr'>Schedule a Demo</h2>
                <p className='mb-0'>A member of our team will get back to you within <strong>24/48 hours</strong> .</p>
                <p>For immediate service, give us a call at <strong>800-640-6409</strong> .

</p>
                <div className='bg_demo'>
                <div className='demo_box2 justify-content-between d-lg-flex d-block'>
                    <div className=''>
                    <label for="exampleInputEmail1" class="form-label text-dark">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className=''>
                    <label for="exampleInputEmail1" class="form-label text-dark">
Business Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                </div>
                <div className='demo_box2 mt-3 justify-content-between d-lg-flex d-block'>
                    <div className=''>
                    <label for="exampleInputEmail1" class="form-label text-dark">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className=''>
                    <label for="exampleInputEmail1" class="form-label text-dark">
Phone</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                </div>
                <div class="mb-3 demo_box2 mt-3 justify-content-around px-0">
  <label for="exampleFormControlTextarea1" class="form-label text-dark">Your Message
</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className='text-center'>

<button className='btn btn_demo w-100 p-2 text-white'>Submit Now</button>
</div>
                </div>
            
                </div>
        </div>
    </div>
    </div>
  
  )
}

export default Demo
