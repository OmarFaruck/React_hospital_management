import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const location=useLocation();
    const [user]=useAuthState(auth);

    if (user) {
        return children;
        
    }else{
        return <Navigate state={location.pathname} to='/SINGIN' replace/>
    }
};

export default RequireAuth;