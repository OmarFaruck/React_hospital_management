import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'; 
import { BsArrowRightCircle } from "react-icons/bs";
import '../Topbar/Topbar.css'

function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className='login m-auto' onClick={handleShow}>
         <BsArrowRightCircle/> Book Now
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Patient Name</Form.Label>
                    <Form.Control type="text" placeholder="First name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupnumeric">
                    <Form.Label>Patient contact</Form.Label>
                    <Form.Control type="number" placeholder="your number" required/>
                </Form.Group>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="mri scans">mri scans</option>
                  <option value="ultrasounds">ultrasounds</option>
                  <option value="urinary">urinary</option>
                </Form.Select>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className='mx-auto' type="submit" variant="primary lg" onClick={handleClose}>
              submit
            </Button> 
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Example;