import React, { useEffect, useState } from 'react'
import logo from '../../../assets/logo (2).png'
import { Container, Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown,Dropdown } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import './Navbar.css'
// import './Navigation.css'
const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY
         if(offset > 50){
             setScrolled(true)
         }else if(offset<50) {
             setScrolled(false)

         }
     };
 useEffect( () =>{
     window.addEventListener("scroll", handleScroll)
 }, []);
    return (
        <Navbar collapseOnSelect expand="lg" className={`sticky p-2 ${scrolled ? 'sticky-header' : ''}`}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="" className='logo'/>
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto justify-content-lg-center justify-content-center align-items-lg-center align-items-start flex-grow-1 pe-3 res_nav">
                        <NavLink className="center" to="/">Home</NavLink>
                        <NavLink className="center" to="about">About</NavLink>
                        {/* <NavLink className="center" to="service">Services</NavLink> */}
                        <NavDropdown title="Services" id="basic-nav-dropdown" className="dropdown-hover p-0"   show={isOpen}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}>
              <NavLink to="medical">Medical Billing</NavLink> <br />
            
              <NavLink to="imaging">Imaging Billing</NavLink> <br />
            
              <NavLink to="hospital">
              Hospital Billing
              </NavLink>
              <br />
              <NavLink to="recovery">
              AR Recovery
              </NavLink>
              <br />
              <NavLink to="laboratory">
              Laboratory Billing 
              </NavLink>
              <br />
              <NavLink to="covery">
              
Coverage Discovery
              </NavLink>
              <br />
              <NavLink to="surgery">Ambulatory Surgery 
                            </NavLink>
                            <br />
                            <NavLink to="workforce">Staffing and Workforce
                            </NavLink>
                            <br />
                            <NavLink to="physical">Physician Billing 
                            </NavLink>
            </NavDropdown>
                        <NavLink className="center" to="sepcial">
                          Specialties
                            </NavLink>
                            {/* <NavLink className=" center" to="testi">
                          Testinmonils
                            </NavLink> */}
                            {/* <NavLink className=" center" to="base">
                          Knowledge Base
                            </NavLink> */}
                            <NavLink className=" center" to="contact">
                          Contact Us
                            </NavLink>
                        <NavLink className="text-white text-center" title="" id=""
                        // style={{ backgroundColor: 'black' }}
                        >

                            {/* <NavDropdown.Item  href="#action/3.1"></NavDropdown.Item> */}
                            <NavDropdown.Item>
                          
                            </NavDropdown.Item>
                           
                            
                            <NavDropdown.Item >
                           
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                            
                            </NavDropdown.Item>
                           
                        </NavLink>
                    </Nav>
                    {/* <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav> */}
                    
                   
                </Navbar.Collapse>
                <div className='text-center me-2 d-lg-block d-none'>
                    <button className='btn btn_demo text-white'>Request Demo</button>
                    </div>
            </Container>
        </Navbar>
    )
}

export default Navigation



