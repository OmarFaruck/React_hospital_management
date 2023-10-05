import React from 'react';
import {
  MDBCard,
  MDBCardTitle, 
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import img1 from '../../images/Specialities/icon8.webp'  
import '../SpecialitieCard/SpecialitieCard.css'

export default function App() {
    return (
      <MDBCard style={{marginBottom:'20px', padding:'20px 20px', marginLeft:'15px'}} className='mx-auto SpecialitieCard'>
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage src={img1} alt='...' className='img-fluid images my-auto mx-auto' />
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBCardTitle>Laparoscopic Surgery</MDBCardTitle>
              
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    );
  }