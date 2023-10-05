import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import '../FaGithubPage/FaGithub.css'
import Button from 'react-bootstrap/esm/Button';
const FaGithub = () => {
    return (
        <>
         <Button variant="link" type='submit'>
        <FaGithubSquare className='FaGithub'/>
        </Button>
            
        </>
    );
};

export default FaGithub;