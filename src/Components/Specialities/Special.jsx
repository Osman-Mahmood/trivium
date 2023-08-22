import React,{useEffect} from 'react'
import special from '../../assets/special.png'
import hepatology from '../../assets/Med Icon/Hepatology.png'
import cardiology from '../../assets/Med Icon/dem.png'
import urology from '../../assets/Med Icon/urology.png'
import oncology from '../../assets/Med Icon/oncology-2.png'
import nephrology from '../../assets/Med Icon/Nephrology.png'
import podiatry from '../../assets/Med Icon/Podiatry.png'
import psychology from '../../assets/Med Icon/psychology-1-1.png'
import psychiatric from '../../assets/Med Icon/psychology.png'
import clinical from '../../assets/Med Icon/clinical.png'
import medicalclinics from '../../assets/Med Icon/medical-clinic.png'
import generalsurgery from '../../assets/Med Icon/general-surgery-1-1.png'
import traumatology from '../../assets/Med Icon/icon5.png'
import fghq from '../../assets/Med Icon/care.png'
import rheumatology from '../../assets/Med Icon/reimage-1.png'
import prostheses from '../../assets/Med Icon/icon11.png'
import dermatology from '../../assets/Med Icon/dermatology.png'
import pulmonology from '../../assets/Med Icon/icon2.png'
import pathology from '../../assets/Med Icon/pathalogy.png'
import thoracic from '../../assets/Med Icon/thoracic-surgery.png'
import cardio from '../../assets/Med Icon/cardiovescular.png'
import neurology from '../../assets/Med Icon/neurology.png'
import dem from '../../assets/Med Icon/dem.png'
import Gynecology from '../../assets/Med Icon/gynecology.png'
import endo from '../../assets/Med Icon/endocrinology.png'
import physicalthrapy from '../../assets/Med Icon/physical-therapy-1.png'
import obgyn from '../../assets/Med Icon/ob-GYN-3.png'
import woundcare from '../../assets/Med Icon/wound-care.png'
import toxicology from '../../assets/Med Icon/toxicology.png'
import primarycare from '../../assets/Med Icon/primary-care.png'
import nursinghome from '../../assets/Med Icon/nursing-home.png'
import child from '../../assets/Med Icon/icon1.png'
import ambulatory from '../../assets/Med Icon/ambulatory-surgery.png'
import radio from '../../assets/Med Icon/radiology.png'
import gastro from '../../assets/Med Icon/Gastroenterology.png'
import infect from '../../assets/Med Icon/infectious-disease.png'
import painman from '../../assets/Med Icon/pain-management.png'
import rehali from '../../assets/Med Icon/rehabilitation-1.png'
import handmed from '../../assets/Med Icon/internal-medicine-1-1.png'
import { GiStickingPlaster } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'
const Special = () => {
      useEffect(() => {
            window.scrollTo(0, 0);
          });
      const navigate = useNavigate();
      const dataArr = [
            {
                  logo: hepatology,
                  title: "Hepatology",
                  route: "hepatology",
            },
            {
                  logo: cardiology,
                  title: "Cardiology",
                  route: "cardiology",
            },
            {
                  logo: urology,
                  title: "Urology",
                  route: "urology",
            },
            {
                  logo: oncology,
                  title: "Oncology",
                  route: "oncology",
            },
            {
                  logo: nephrology,
                  title: "Nephrology",
                  route: "nephrology",
            },
            {
                  logo: podiatry,
                  title: "Podiatry",
                  route: "podiatry",
            },
            // {
            //       logo: special,
            //       title: "Hepatology",
            //       route: "hepatology",
            // },
            {
                  logo: psychiatric,
                  title: "Psychiatric",
                  route: "psychiatric",
            },
            {
                  logo: psychology,
                  title: "Psychology",
                  route: "psychology",
            },
            {
                  logo: clinical,
                  title: "Clinical Lab",
                  route: "clinical",
            },
            {
                  logo: medicalclinics,
                  title: "Medical Clinics",
                  route: "medicalclinics",
            },
            {
                  logo: generalsurgery,
                  title: "General Surgery",
                  route: "generalsurgery",
            },
            {
                  logo: fghq,
                  title: "FQHC",
                  route: "fghq",
            },
            {
                  logo: traumatology,
                  title: "Traumatology",
                  route: "traumatology",
            },
             {
                  logo: painman,
                  title: "Internal Medicine",
                  route: "internalmedicine",
            },
          
            {
                  logo: rheumatology,
                  title: "Rheumatology",
                  route: "rheumatology",
            },
            {
                  logo: prostheses,
                  title: "Prostheses",
                  route: "prostheses",
            },
            {
                  logo: dermatology,
                  title: "Dermatology",
                  route: "dermatology",
            },
            {
                  logo: pulmonology,
                  title: "Pulmonology",
                  route: "pulmonology",
            },
            {
                  logo: pathology,
                  title: "Pathology Lab",
                  route: "pathology",
            },
            {
                  logo: thoracic,
                  title: "Thoracic Surgery",
                  route: "thoracic",
            },



            {
                  logo: cardio,
                  title: "Cardiovascular",
                  route: "cardiovascular",
            },
            {
                  logo: neurology,
                  title: "Neurosurgery",
                  route: "neurosurgery",
            },
            {
                  logo: dem,
                  title: "DME",
                  route: "dme",
            },
            {
                  logo: Gynecology,
                  title: "Gynecology",
                  route: "gynecology",
            },
            {
                  logo: nephrology,
                  title: "Immunology",
                  route: "immunology",
            },
            {
                  logo: infect,
                  title: "Infectious Disease",
                  route: "infectiousdisease",
            },
            {
                  logo: dem,
                  title: "For Disabled",
                  route: "disabled",
            },
            // {
            //       logo: special,
            //       title: "Hepatology",
            //       route: "hepatology",
            // },
            {
                  logo: endo,
                  title: "Endocrinology",
                  route: "endocrinology",
            },
            {
                  logo: physicalthrapy,
                  title: "Physical Therapy",
                  route: "physicaltherapy",
            },
            {
                  logo: rehali,
                  title: "Substance Abuse Rehab",
                  route: "substance",
            },
            {
                  logo: obgyn,
                  title: "OB GYN",
                  route: "obgyn",
            },
            {
                  logo: woundcare,
                  title: "Wound Care",
                  route: "woundcare",
            },
            {
                  logo: toxicology,
                  title: "Toxicology Lab",
                  route: "toxicology",
            },
            {
                  logo: primarycare,
                  title: "Primary Care",
                  route: "primarycare",
            },
            {
                  logo: nursinghome,
                  title: "Nursing Home",
                  route: "nursinghome",
            },
            {
                  logo: child,
                  title: "Pediatric",
                  route: "pediatric",
            },
            {
                  logo: ambulatory,
                  title: "Ambulatory Surgery",
                  route: "ambulatorysurgery",
            },
            {
                  logo: dermatology,
                  title: "Molecular Lab",
                  route: "molecularlab",
            },
            {
                  logo: pulmonology,
                  title: "Ophthalmology",
                  route: "ophthalmology",
            },
            {
                  logo: radio,
                  title: "Radiology",
                  route: "radiology",
            },
            {
                  logo: handmed,
                  title: "Geriatrics",
                  route: "geriatrics",
            },
            {
                  logo: gastro,
                  title: "Gastroenterology",
                  route: "gastroenterology",
            },
            {
                  logo: hepatology,
                  title: "Pain Management",
                  route: "painmanagement",
            }
           
        
      ]
      return (
            <div className='container'>
                  <div className='row'>
                        <h2 className='clr text-center'>Our Specialties</h2>
                        <div className='col-lg-12 flex-wrap justify-content-center d-lg-flex d-block   pt-3 w-100'>
                              {
                                    dataArr.map((item) => {
                                          return <div className='col-lg-2 col-12 m-lg-2 m-0 mb-lg-0 mb-3 text-center revenue_box' 
                                          onClick={()=>{navigate(`/sepcial/${item.route}`)}}>
                                              <img src={item.logo} alt="" />
                                                <p className='text-center'>{item.title}</p>
                                          </div>
                                    })
                              }
                        </div> 
                        
                  </div>
            </div>
      )
}

export default Special
