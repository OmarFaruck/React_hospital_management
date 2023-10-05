import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom';
import '../Header/Header.css'

const Header = () => {
    return (
        <>
              <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
        <img src={logo} className="img-fluid mx-auto logo" alt=''/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <NavLink className= "nav-link" to="/">Home</NavLink>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavLink className= "nav-link" to="/about_us">About Us</NavLink>
              <NavLink className= "nav-link" to="/Our_Team">Our Team</NavLink> 
              <NavLink className= "nav-link" to="/Education">Education</NavLink>  
              <NavLink className= "nav-link" to="/Ambulance">Ambulance_service</NavLink>   
               
              
            </NavDropdown>
            <NavDropdown title="Departments" id="basic-nav-dropdown"> 
              <NavLink className= "nav-link" to="/MRI_SCANS">MRI SCANS</NavLink>   
              <NavLink className= "nav-link" to="/Ambulance">CT SCANS</NavLink>    
              <NavLink className= "nav-link" to="/Ambulance">PET SCANS</NavLink>    
              <NavLink className= "nav-link" to="/Ambulance">X-Rays</NavLink>     
              <NavLink className= "nav-link" to="/Ambulance">ULTRASOUNDS</NavLink>      
              <NavLink className= "nav-link" to="/Ambulance">Pathology Tests</NavLink>    
              <NavLink className= "nav-link" to="/Ambulance">Cardiology</NavLink>  
              <NavLink className= "nav-link" to="/Ambulance">Colour Doppler </NavLink>   
              <NavLink className= "nav-link" to="/Ambulance">Urodynamic Study</NavLink>   
              <NavLink className= "nav-link" to="/Ambulance">EEG Tests</NavLink>   
              <NavLink className= "nav-link" to="/Ambulance">EMG Tests</NavLink>    
              <NavLink className= "nav-link" to="/Ambulance">NCV Tests</NavLink>   
              <NavLink className= "nav-link" to="/Ambulance">BERA Tests</NavLink>    
              <NavLink className= "nav-link" to="/Ambulance">VEP Tests</NavLink>    
              <NavLink className= "nav-link" to="/Ambulance">OPG Scan</NavLink>  
              <NavLink className= "nav-link" to="/Ambulance">Mammography</NavLink>   
              <NavLink className= "nav-link" to="/Ambulance">HSG Test</NavLink>    
              <NavLink className= "nav-link" to="/Ambulance">Nuclear Medicine</NavLink>    
              <NavLink className= "nav-link" to="/Ambulance">Pulmonary Function Test</NavLink>    
            </NavDropdown>

            <NavLink className= "nav-link" to="/Book_Appointment">Book Appointment</NavLink>  
            <NavLink className= "nav-link" to="/Packeges">Packeges</NavLink>   
            <NavLink className= "nav-link" to="/Our_Doctors">Our Doctors</NavLink>    
            <NavLink className= "nav-link" to="/Specialities">Specialities</NavLink>  
            <NavLink className= "nav-link" to="/Our_Hospital">Hospitals</NavLink>  
            <NavLink className= "nav-link" to="/International">national Centers</NavLink>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
};

export default Header;