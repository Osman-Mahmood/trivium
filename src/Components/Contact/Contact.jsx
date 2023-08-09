import React from 'react'
import contact from '../../assets/contact.webp'
const Contact = () => {
  return (
    <div className='diff_bg p-5'>
  <div className='container'>
  <div className='row align-items-center'>
    <div className='col-lg-6'>
        <h2>Connect with Medcare MSO</h2>
        <p className='line'>We would be happy to answer any questions and explore how our services can support your business. If you tell us a bit about your interests, we’ll make sure we get you the best contact person on our end.

</p>
<p>If you’d like to talk to someone now, give us a call at 800-640-6409.</p>
    </div>
    <div className='col-lg-6'>
        <img src={contact} className='img-fluid' alt="" />
    </div>
    </div>      
    </div>
    </div>
  
  )
}

export default Contact
