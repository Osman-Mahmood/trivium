import React, { useEffect, useState } from 'react'
import phone from '../../assets/phone.png'
import fax from '../../assets/fax.png'
import email from '../../assets/email.png'
import 'react-phone-number-input/style.css'
import { useForm, Controller } from "react-hook-form";
import PhoneInput from 'react-phone-number-input';
import axios from 'axios'
import * as turf from '@turf/turf';
import countries from '../../countries.json';
const ContactForm = () => {

  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const userPoint = turf.point([longitude, latitude]);
        for (let i = 0; i<countries.features.length; i++) {
          if (turf.booleanPointInPolygon(userPoint, countries.features[i])) {
            setCountry(countries.features[i].properties.ISO_A2);
            return;
          }
        }

        setError("Country not found.");

      }, (err) => {
        setError(`Geolocation error: ${err.message}`);
      });
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false)
  const [btnText, setBtnText] = useState("Submit Now")
  const onSubmit = async (data) => {
    try {
      setBtnText("Waiting...")
      await axios.post("https://server.triviummbs.com/api/v1/sendEmailtoUser", data)
      setBtnText("Your request submited")
      setIsLoading(true)
    } catch (error) {
      setIsLoading(false)
      console.error("error while on submit", error);
    }
  };
  return (
    <div className='container pt-5'>
      <div className='row'>
        <div className='col-lg-6 col-12 '>
          <h2 className='clr'>Tell Us Where to Reach You</h2>
          <p className='mb-0'>A member of our team will get back to you within 12 hours.</p>
          <p>For immediate service, give us a call at 800-640-6409.</p>
          <form className='' onSubmit={handleSubmit(onSubmit)}>
            <div className='demo_box2 justify-content-between d-lg-flex d-block w-100 '>
              <div className='w-lg-50 w-100'>
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  {...register("name", { required: true })}
                />
                {errors.name && <span className='text-danger'>Name is required</span>}
              </div>
              <div className='w-lg-50 w-100 ms-lg-5 ms-0'>
                <label for="exampleInputEmail1" class="form-label">
                  Business Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  {...register("businessName", { required: true })}
                />
                {errors.businessName && <span className='text-danger'>Business Name is required</span>}
              </div>
            </div>
            <div className='demo_box2 mt-3 justify-content-around d-lg-block  d-block'>
              <div className=''>
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" aria-describedby="emailHelp"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format"
                    }
                  })}
                />
                {errors.email && <span className='text-danger' role="alert">{errors.email.message}</span>}
              </div>
              <div className=''>
                <label for="exampleInputEmail1" class="form-label">
                  Phone</label>
                <Controller
                  name="phoneNumber"
                  control={control}
                  rules={{ required: 'Phone number is required' }}
                  render={({ field }) => <PhoneInput
                    class="form-control "
                    defaultCountry={country ? country : "US"}
                    international
                    countryCallingCodeEditable={false}
                    {...field}
                  />}
                />

                {errors.phoneNumber && <span className='text-danger'>{errors.phoneNumber.message}</span>}
              </div>
            </div>
            <div class="mb-3 demo_box2 mt-3 justify-content-around px-lg-0 px-0">
              <label for="exampleFormControlTextarea1" class="form-label">Your Message
              </label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                {...register("description", { required: true })}
              ></textarea>
              {errors.description && <span className='text-danger'>Description is required</span>}
            </div>
            <div className='text-center'>

              <button className='btn btn-primary w-100 p-2 text-white px-4' disabled={isLoading} type='submit'>{btnText}</button>
            </div>
          </form>

        </div>
        <div className='col-lg-6 col-12'>
          <h2 className='clr'>Business Address</h2>
          <h2>312 W 2nd St a779, Casper, WY 82601, USA</h2>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.1083417055265!2d-106.33164712349117!3d42.84944547115163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8760bca480ca44a5%3A0xa22e368b60645bd9!2s312%20W%202nd%20St%20a779%2C%20Casper%2C%20WY%2082601%2C%20USA!5e0!3m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Embedded Content"
            ></iframe>

            {/* <iframe
              src="https://goo.gl/maps/HeFJwJiNTY3MzPHH8"
              width="100%"
              height="400"
              title="Embedded Content"
              allowFullScreen
            ></iframe> */}
          </div>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-lg-12 d-lg-flex d-block gap-3'>
          <div className='col-lg-3 revenue_box text-center'>
            <img src={phone} alt="" className='img-fluid mb-3' />
            <p className='text-center'>PHONE</p>
            <p className='text-center'>+1 800 640 6409</p>

          </div>
          <div className='col-lg-3 revenue_box text-center'>
            <img src={fax} alt="" className='img-fluid mb-3' />
            <p className='text-center'>FAX</p>
            <p className='text-center'>+1 800 640 6409</p>

          </div>
          <div className='col-lg-3 revenue_box text-center'>
            <img src={email} alt="" className='img-fluid mb-3' />
            <p className='text-center'>FOR SALES</p>
            <p className='text-center'>sales@triviummbs.com</p>

          </div>
          <div className='col-lg-3 revenue_box text-center'>
            <img src={email} alt="" className='img-fluid mb-3' />
            <p className='text-center'>FOR INFO</p>
            <p className='text-center'>info@triviummbs.com</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
