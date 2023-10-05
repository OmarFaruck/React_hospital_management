import React from 'react';
import '../Book_Appointment/Book_Appointment.css'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import BookModal from './BookModal';
import '../Book_Appointment/Book_Appointment.css'
const BookAppointment = () => {
    return (
        <section id='BookAppointment'>
            <div className="container-fluid">
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <div className="text-center">
                           <h1>MRI Scan / Ultrasound</h1>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <BookModal/>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default BookAppointment;