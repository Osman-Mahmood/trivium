import React from 'react'
import phone from '../../assets/phone.png'
const ContactForm = () => {
  return (
    <div className='container pt-5'>
      <div className='row'>
      <div className='col-lg-6 col-12 '>
                <h2 className='clr'>Tell Us Where to Reach You</h2>
                <p className='mb-0'>A member of our team will get back to you within 12 hours.</p>
                <p>For immediate service, give us a call at 800-640-6409.</p>
                <div className=''>
                <div className='demo_box2 justify-content-between d-lg-flex d-block'>
                    <div className=''>
                    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className=''>
                    <label for="exampleInputEmail1" class="form-label">
Business Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                </div>
                <div className='demo_box2 mt-3 justify-content-around d-lg-block  d-block'>
                    <div className=''>
                    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className=''>
                    <label for="exampleInputEmail1" class="form-label">
Business Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                </div>
                <div class="mb-3 demo_box2 mt-3 justify-content-around px-lg-0 px-0">
  <label for="exampleFormControlTextarea1" class="form-label">Your Message
</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className='text-center'>

<button className='btn btn-primary w-100 p-2 text-white px-4'>Submit Now</button>
</div>
                </div>
            
                </div>
                <div className='col-lg-6 col-12'>
<h2 className='clr'>ADDRESS</h2>
<h2>New Mexico Office</h2>
<p>150 Washington Avenue Suite #201, Santa Fe New Mexico 87501</p>
<h2>California Office</h2>
<p>18001 Sky Park Cir Suite R Irvine, CA 92614

</p>
<h2>Find Us on Map</h2>
                </div>
      </div>
      <div className='row mt-5'>
        <div className='col-lg-12 d-lg-flex d-block gap-3'>
            <div className='col-lg-3 revenue_box text-center'>
                <img src={phone} alt="" className='img-fluid'/>
                <p>Phone</p>
                <p>+1 800 640 6409</p>

            </div>
            <div className='col-lg-3 revenue_box text-center'>
                <img src={phone} alt="" className='img-fluid'/>
                <p>Phone</p>
                <p>+1 800 640 6409</p>

            </div>
            <div className='col-lg-3 revenue_box text-center'>
                <img src={phone} alt="" className='img-fluid'/>
                <p>Phone</p>
                <p>+1 800 640 6409</p>

            </div>
            <div className='col-lg-3 revenue_box text-center'>
                <img src={phone} alt="" className='img-fluid'/>
                <p>Phone</p>
                <p>+1 800 640 6409</p>

            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
