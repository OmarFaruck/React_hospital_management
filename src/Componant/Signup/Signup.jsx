import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import '../SINGIN/SINGIN.css'
import { NavLink } from 'react-router-dom';
const SINGIN = () => {
 const messegediv = document.getElementById('messege_div');

 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [
  signInWithEmailAndPassword,
   user,
   loading,
   error,
 ] = useSignInWithEmailAndPassword(auth);

 if (error) {
   messegediv.innerHTML=Error;
 }
 if (loading) {

   messegediv.innerHTML='<p>Loading...</p>'; 
 }
 if (user) {
   messegediv.innerHTML='User Singin success';  
    
 }
 return (
   <section id='SINGIN' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}> 
   <div className="container SINGIN">
     
     <div className="text-center">
       <h2 style={{color:'white'}}>Sing Up</h2>
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
     <Button variant="primary" size='lg' onClick={() => signInWithEmailAndPassword(email, password)} type="submit">
       Submit
     </Button> 
     <div className="d-flex">
     <p>Already have an account</p>
       <NavLink className= "nav-link" to="/SINGIN"><h5 style={{marginLeft:'15px', color:'red'}}>SINGIN</h5></NavLink>
     </div>
     </div>
   </section>
 );
};

export default SINGIN;