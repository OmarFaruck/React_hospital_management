 import React, { useState } from 'react';
 import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import '../SINGIN/SINGIN.css'
import { NavLink } from 'react-router-dom';
import FaceBook from '../FaceBook/FaceBook';
import FaGoogle from '../FaGooglePage/FaGoogle';
import FaGithub from '../FaGithubPage/FaGithub';  
import FaEnvelope from '../FaEnvelopePage/FaEnvelope';
 const SINGIN = () => {
  const messegediv = document.getElementById('messege_div');
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  if (error) {
    messegediv.innerHTML=Error;
  }
  if (loading) {

    messegediv.innerHTML='<p>Loading...</p>'; 
  }
  if (user) {
    messegediv.innerHTML='Registered User success';  
     
  }
  return (
    <section id='SINGIN' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}> 
    <div className="container SINGIN">
      
      <div className="text-center">
        <h2 style={{color:'white', paddingTop:'25px'}}>Sing In</h2>
      </div>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color:'white', fontSize:'25px'}}>Email address</Form.Label>
        <Form.Control type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{color:'white', fontSize:'25px'}}>Password</Form.Label>
        <Form.Control type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
      </Form.Group> 
      <div id="messege_div"></div>
      <Button variant="primary" size='lg' onClick={() => createUserWithEmailAndPassword(email, password)} type="submit">
        Submit
      </Button> 

      <div className="font_icon"> 
       <NavLink className= "nav-link" to="/"><FaGoogle/></NavLink> 
       <NavLink className= "nav-link" to="/"><FaGithub/></NavLink>  
       <NavLink className= "nav-link" to="/"><FaEnvelope/></NavLink>  
       <NavLink className= "nav-link" to="/"><FaceBook/></NavLink> 
      </div>

      <div className="d-flex">
      <p>Already have an account</p> 
        <NavLink className= "nav-link" to="/Signup"><h5 style={{marginLeft:'15px', color:'red'}}>SignUp</h5></NavLink>
      </div>
      </div>
    </section>
  );
 };
 
 export default SINGIN;