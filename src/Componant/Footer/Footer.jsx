import React from 'react'; 
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';
import { FaFacebookSquare,FaGooglePlusSquare,FaGithub,FaInstagramSquare,FaTelegram,FaSkype } from "react-icons/fa";
import Navbar from 'react-bootstrap/Navbar'; 
import logo from '../images/logo.png'
import { FaTabletAlt } from "react-icons/fa";
import '../Footer/Footer.css'
import '../Topbar/Topbar.css'
const Footer = () => {
    return (
        <>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <NavLink to='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' /><FaFacebookSquare/>
          </NavLink>
          <NavLink to='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' /><FaTelegram/>
          </NavLink>
          <NavLink to='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' /><FaGooglePlusSquare/>
          </NavLink>
          <NavLink to='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' /><FaInstagramSquare/>
          </NavLink>
          <NavLink to='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' /><FaSkype/>
          </NavLink>
          <NavLink to='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' /><FaGithub/>
          </NavLink>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                <Navbar.Brand href="#home">
        <img src={logo} className="img-fluid mx-auto logo" alt=''/>
        </Navbar.Brand>
              </h6>
              <h6>
              Our factor is to offer you and your own hover of family members with the absolute best pleasant of care open.
              </h6>
              
             <div className="d-flex">
             <FaTabletAlt style={{color:'black', fontSize:'22px'}}/>
                   <h6 className='phn'>+8801858927228</h6> 
                   {/* <h6 className='phn'>+8801858927228</h6>   */}
            </div>
            <button className='Contact'>Contact us</button>  
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h4 className='text-uppercase fw-bold mb-4'>Link</h4>
              <h6>
                <NavLink to='#!' className='text-reset'>
                  Contact Us
                </NavLink>
              </h6>
              <h6>
                <NavLink to='#!' className='text-reset'>
                  Career
                </NavLink>
              </h6>
              <h6>
                <NavLink to='#!' className='text-reset'>
                  Our Panel
                </NavLink>
              </h6>
              <h6>
                <NavLink to='#!' className='text-reset'>
                  Panel Ratelist
                </NavLink>
              </h6>
              <h6>
                <NavLink to='#!' className='text-reset'>
                  Report Download
                </NavLink>
              </h6>
              <h6>
                <NavLink to='#!' className='text-reset'>
                  Patient portal
                </NavLink>
              </h6>
              <h6>
                <NavLink to='#!' className='text-reset'>
                  Payment Options
                </NavLink>
              </h6>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Quick Links</h6>
              <h6>
                <NavLink to='#!' className='text-reset'>
                MRI
                </NavLink>
              </h6>
              <h6>
                <NavLink to='#!' className='text-reset'>
                CT Scan
                </NavLink>
              </h6>
              <h6>
                <NavLink to='#!' className='text-reset'>
                PET Scan
                </NavLink>
              </h6>
              <h6>
                <NavLink to='#!' className='text-reset'>
                Ultrasound
                </NavLink>
              </h6>
              <h6>
                <NavLink to='#!' className='text-reset'>
                Pathology
                </NavLink>
              </h6>
              <h6>
                <NavLink to='#!' className='text-reset'>
                Health Packages
                </NavLink>
              </h6>
              <h6>
                <NavLink to='#!' className='text-reset'>
                Landing Pages
                </NavLink>
              </h6>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
              <h6>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                 <div className="d-flex">
                    <h5 style={{padding:'15px'}}>Address:</h5>
                    <p>Rasulpur Km.char chad mosjid near azimpur dhaka-1210</p>

                 </div>
              </h6>
              <h6>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                <div className="d-flex">
                    <h5>Phone:</h5>
                    <p style={{margin:'auto'}}>01858927228</p> 

                 </div>
              </h6>
              <h6>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                <div className="d-flex">
                    <h5>Email:</h5>
                    <p style={{marginLeft:'30px'}}>omarfaruck1994@gmial.com</p> 

                 </div>
              </h6>
              <button className='Contacts'>Get Direction</button> 
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: '#00BCD1', color:'white'}}>
        © 2021 Copyright:
        <NavLink className='text-reset fw-bold' target='_blank' to='https://mdbootstrap.com/'>
       Imaging Centre Pvt. Ltd. All Rights Reserved.
        </NavLink>
      </div>
    </MDBFooter>
        </>
    );
};

export default Footer;