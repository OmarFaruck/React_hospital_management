 
import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import img2 from '../../images/Our_Doctors/img6.png'
import '../SideCardBer/SideCardBer.css'
import Button from 'react-bootstrap/esm/Button';
export default function App() {
    return (
      <MDBCard style={{ maxWidth: '540px',marginBottom:'20px'}} data-aos="flip-right">
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage src={img2} alt='...' fluid />
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBCardTitle>Dr. Abhijit Joshi</MDBCardTitle>
              <MDBCardText>
              Head Of The Department and Consultant - Cardiology
              </MDBCardText>
              <MDBCardText>
              Baner
              </MDBCardText>
              <MDBCardText className='d-flex g-4'>
              <Button style={{backgroundColor:'#00B7AC'}} size="sm" className='View'> View profile</Button>
                <Button className='Book'>Book an Appinment</Button>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    );
  }