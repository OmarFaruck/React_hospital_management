import React from 'react';
import Row from 'react-bootstrap/Row';
import { FaTabletAlt } from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import '../Topbar/Topbar.css' 
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { signOut } from 'firebase/auth';


const Topbar = () => {

const [user] = useAuthState(auth);

const handleSingOut= ()=>{

 signOut(auth);
}
    return (
        <section id='topber'>
            <div className="container">
               <Row> 
                   <div className="d-flex col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4"> 
                       <div className="text-center d-flex">
                       <FaTabletAlt className='phone'/>
                        <h6 className='phn'>+8801858927228</h6> 
                        <h6 className='phn'>+8801858927228</h6> 
                        </div>     
                    </div>

                    <div className="d-flex col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                       <div className="text-center d-flex align-items-center">
                       <BsEnvelopeFill className='email'/>
                        <h6>omarfaruck1994@gmail.com</h6>
                       </div>
                    </div>
                  

                    <div className="d-flex col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        {
                            user ? (
                                <NavLink className= "nav-link" to="/Signup" ><Button variant="secondary" onClick={handleSingOut}>SING UP</Button></NavLink>
                            ) : (
                                <NavLink className= "nav-link" to="/SINGIN"><Button variant="primary">SING IN</Button ></NavLink>
                            )
                        }
                       

                       
                 
                    </div>
               </Row>
            </div>
        </section>
    );
};

export default Topbar;