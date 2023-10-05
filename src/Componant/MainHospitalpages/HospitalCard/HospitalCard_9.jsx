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
import img1 from '../../images/Hospitals/hospital_3.webp' 
import Button from 'react-bootstrap/esm/Button';
import '../HospitalCard/HospitalCard.css'

export default function App() {
    return (
      <MDBCard style={{ maxWidth: '540px',marginBottom:'20px'}}>
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage src={img1} alt='...' fluid className='mx-auto img-fluid d-block'/>
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody className='text-center'>
              <MDBCardTitle>Old Airport Road - Bengaluru</MDBCardTitle>
              <MDBCardText className='text-center'> 
              India
              </MDBCardText>
              <MDBCardText className='text-center'>
              Manipal Hospitals Old Airport Road - Bengaluru
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