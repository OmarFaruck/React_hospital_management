import React from 'react';
import { FaGooglePlusSquare } from 'react-icons/fa';
import '../FaGooglePage/FaGoogle.css'
import Button from 'react-bootstrap/esm/Button'; 
import auth from '../../Firebase/Firebase.init'; 
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const FaGoogle = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const messegediv = document.getElementById('messege_div');

    if (error) {
        messegediv.innerHTML=' <p>Error: {error.message}</p>';
       
      }
      if (loading) {
        messegediv.innerHTML='<p>Loading...</p>'; 
      }
      if (user) {
        messegediv.innerHTML='Signed In User'; 
       
      }
    return (
        <>
        <div id="messege_div"></div>
        <Button variant="link" type='submit' onClick={() => signInWithGoogle()}>
            <FaGooglePlusSquare className='FaGoogle'/>
        </Button>
        </>
    );
};

export default FaGoogle;