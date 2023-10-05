import React from 'react'; 
import { FaEnvelopeSquare } from 'react-icons/fa';
import '../FaEnvelopePage/FaEnvelope.css'
import Button from 'react-bootstrap/esm/Button'; 

const FaEnvelope = () => {
    

    return (
        <> 
        <Button variant="link" type='submit'>
           <FaEnvelopeSquare className='FaEnvelope'/>
        </Button>
            
        </>
    );
};

export default FaEnvelope;