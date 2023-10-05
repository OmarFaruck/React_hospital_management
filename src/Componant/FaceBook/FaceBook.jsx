import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import '../FaceBook/FaceBook.css'
import Button from 'react-bootstrap/esm/Button';
const FaceBook = () => {
    return (
        <>
        <Button variant="link" type='submit'>
        < FaFacebookSquare className='FaceBook'/>
        </Button>
           
        </>
    );
};

export default FaceBook;