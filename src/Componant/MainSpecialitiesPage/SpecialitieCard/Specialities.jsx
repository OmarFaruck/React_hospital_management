import React from 'react'; 
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form'; 
import '../SpecialitieCard/SpecialitieCard.css'

const Specialities = () => {
    return (
        <section id='Specialities'>

             <Container style={{padding:'30px 0px'}}>
                <div className="text-center">
                    <h1>All our Specialities</h1>
                </div>
          <Row>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                <Form.Select aria-label="Default select example">
                    <option>Specality</option>
                    <option value="Bariatric Surgery">Bariatric Surgery</option>
                    <option value="Senior Consultant - Cardiology">Senior Consultant - Cardiology</option>
                    <option value="Consultant - Internal Medicine">Consultant - Internal Medicine</option>
                    <option value="Consultant - Dermatologist">Consultant - Dermatologist</option>
                    <option value="Consultant - Interventional Cardiology">Consultant - Interventional Cardiology</option>
                    <option value="HOD & Sr. Consultant in Internal Medicine | Faculty and in-charge of DNB (INT Med.)">HOD & Sr. Consultant in Internal Medicine | Faculty and in-charge of DNB (INT Med.)</option>
                    <option value="Head Of The Department and Consultant - Cardiology">Head Of The Department and Consultant - Cardiology</option>
                    <option value="Consultant - Obstetrics and Gynecology">Consultant - Obstetrics and Gynecology</option>
                    <option value="HOD and Consultant - Rheumatology">HOD and Consultant - Rheumatology</option>
                    <option value="HOD & Consultant - Dental Medicine">HOD & Consultant - Dental Medicine</option>
                    <option value="Consultant - Diabetes & Endocrinology">Consultant - Diabetes & Endocrinology</option>
                    <option value="Cardiology and Cardiac surgery">Cardiology and Cardiac surgery</option>
                    <option value="Cardiothoracic Vascular Surgery">Cardiothoracic Vascular Surgery</option>
                    <option value="Comprehensive Cancer Care">Comprehensive Cancer Care</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="Diabetes & Endocrinology">Diabetes & Endocrinology</option>
                    <option value="General Surgery">General Surgery</option>
                    <option value="Internal Medicine">Internal Medicine</option>
                    <option value="Liver Transplantation Surgery">Liver Transplantation Surgery</option>
                    </Form.Select>
                </Col> 
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                <Form.Select aria-label="Default select example">
                    <option>LOcation</option>
                    <option value="Gurugram">Gurugram</option>
                    <option value="Old Airport Road - Bengaluru">Old Airport Road - Bengaluru</option>
                    <option value="Yeshwanthpur - Bengaluru">Yeshwanthpur - Bengaluru</option>
                    <option value="Whitefield">Whitefield</option>
                    <option value="Yeshwanthpur - Bengaluru">Yeshwanthpur - Bengaluru</option>
                    <option value="Baner">Baner</option>
                    <option value="Saltlake - Kolkata">Saltlake - Kolkata</option>
                    <option value="Old Airport Road - Bengaluru">Old Airport Road - Bengaluru</option>
                    <option value="Old Airport Road - Bengaluru">Old Airport Road - Bengaluru</option>
                    <option value="Old Airport Road - Bengaluru">Old Airport Road - Bengaluru</option>
                    <option value="mymonsing">mymonsing</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Borishal">Borishal</option>
                    <option value="Dinajpur">Dinajpur</option>
                    <option value="Foridpur">Foridpur</option>
                    <option value="sylet">sylet</option> 
                </Form.Select>
                </Col> 
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                <Form.Select aria-label="Default select example">
                    <option>Serch by doctor name</option>
                    <option value="(Col) Dr. Monik Mehta">(Col) Dr. Monik Mehta</option>
                    <option value="Dr. (COL) R D Holla">Dr. (COL) R D Holla</option>
                    <option value="Dr. A Aruna Prasad">Dr. A Aruna Prasad</option>
                    <option value="Dr. A. Naga Srinivaas">Dr. A. Naga Srinivaas</option>
                    <option value="Dr. Abdul Majeed">Dr. Abdul Majeed</option>
                    <option value="Dr. Abhijit Joshi">Dr. Abhijit Joshi</option>
                    <option value="Dr. Abhinibesh Chatterjee">Dr. Abhinibesh Chatterjee</option>
                    <option value="Dr. Abhishek Patil">Dr. Abhishek Patil</option>
                    <option value="Dr. Anand khan">Dr. Anand khan</option>
                    <option value="Dr. Anan mahmud">Dr. Anan mahmud</option>
                    <option value="Dr. Ananas murad">Dr. Ananas murad</option>
                    <option value="Dr. murad khan">Dr. murad khan</option> 
                    <option value="(Col) Dr. Monik Mehta">(Col) Dr. Monik Mehta</option>
                    <option value="Dr. (COL) R D Holla">Dr. (COL) R D Holla</option>
                    <option value="Dr. A Aruna Prasad">Dr. A Aruna Prasad</option>
                    <option value="Dr. A. Naga Srinivaas">Dr. A. Naga Srinivaas</option>
                    <option value="Dr. Abdul Majeed">Dr. Abdul Majeed</option>
                    <option value="Dr. Abhijit Joshi">Dr. Abhijit Joshi</option>
                    <option value="Dr. Abhinibesh Chatterjee">Dr. Abhinibesh Chatterjee</option>
                </Form.Select>
                </Col>  
            </Row>
          </Container>
        </section>
    );
};

export default Specialities;