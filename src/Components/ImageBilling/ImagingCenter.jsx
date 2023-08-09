import React from 'react'
import imaging from '../../assets/imaging.webp'
import imagingicon from '../../assets/imagingicon.webp'
import imaging3 from '../../assets/imaging3.webp'
import imaging4 from '../../assets/imaging4.webp'
const ImagingCenter = () => {
  return (
    <>
    <div className='diff_bg p-3'>
 <div className='container'>
 <div className='row align-items-center'>
    <div className='col-lg-6 col-12'>
<h1>Imaging Center Billing Services</h1>
<p>Medcare MSO provides a comprehensive range of services to meet the unique needs of your imaging center. Now you can count on one radiology medical billing company for radiology revenue cycle management services (RCM), accounts receivable recovery , electronic health record/electronic medical record (EHR/EMR) technologies, practice management, and patient engagement services.</p>
<p className='mt-4'>Accurate imaging billing & coding, daily claims processing, and persistent follow-up on all denials are critical. Medcare’s certified radiology billing experts also have experience with the unique requirements of coding and billing for mobile imaging, radiology, and free-standing imaging.
</p>
<button className='btn btn_demo text-white'>Get More Information</button>
    </div>
    <div className='col-lg-6 col-12'>
<img src={imaging} alt="" />
</div>
 </div>
 </div>
    </div>
    <div className='container'>
    <div className='row text-center pt-5'>
        <div className='col-lg-12 d-lg-flex d-block gap-3'>
            <div className='col-lg-3 col-12 revenue_box'>
<img src={imagingicon} alt="" />
<p className='mt-2 mb-2'>Started On</p>
<h5 className='clr'>May 3rd 2019</h5>
            </div>
            <div className='col-lg-3 col-12 revenue_box'>
<img src={imagingicon} alt="" />
<p className='mt-2 mb-2'>Started On</p>
<h5 className='clr'>May 3rd 2019</h5>
            </div>
            <div className='col-lg-3 col-12 revenue_box'>
<img src={imagingicon} alt="" />
<p className='mt-2 mb-2'>Started On</p>
<h5 className='clr'>May 3rd 2019</h5>
            </div>
            <div className='col-lg-3 col-12 revenue_box'>
<img src={imagingicon} alt="" />
<p className='mt-2 mb-2'>Started On</p>
<h5 className='clr'>May 3rd 2019</h5>
            </div>
        </div>
    </div>
    </div>
    <div className='diff_bg p-3'>
    <div className='container mt-5'>
        <div className='row align-items-center'>
            <div className='col-lg-6 col-12'>
<h3>Expert Billing for Modern Radiology Services</h3>
<p>Radiology is a fast-developing specialty and Medcare MSO’s certified coders provide the skills required to correctly code and submit claims to get maximum reimbursements. Our billing company helps labs to improve your cash flow and claim submission process, and increase profitability.</p>
         <button className='btn btn_demo text-white'>Contact Us</button>
            </div>
            <div className='col-lg-6 col-12'>
                <img src={imaging3} alt="" className='img-fluid'/>
                </div>
        </div>
    </div>
    </div>
    <div className='p-3'>
    <div className='container mt-5'>
        <div className='row align-items-center'>
        <div className='col-lg-6 col-12'>
                <img src={imaging4} alt="" className='img-fluid'/>
                </div>
            <div className='col-lg-6 col-12'>
<h3 className='clr'>New Technologies Mean Complicated Coding</h3>
<p>Coding for radiology practices and diagnostic imaging centers is complicated because so many newer technologies and treatments are involved. Many see denied claims due to inaccurate modifiers used with CPT codes, but with Medcare’s radiology billing services, you can be confident that you’ll receive compensation for the time and care you’ve provided to patients for both technical and professional components. Free-standing imaging centers, mobile imaging (such as x-ray and ultrasound), and free-standing radiology equipment create additional challenges in coding. These are the kind of details the top billing companies routinely manage to simplify your RCM process.</p>
         <button className='btn btn_demo text-white'>Get Started</button>
            </div>
          
        </div>
    </div>
    </div>
   
  
    </>
    
   
  )
}

export default ImagingCenter
