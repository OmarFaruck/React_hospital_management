import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({children}) => {
    
    const [user]=useAuthState(auth);

    if (user) {
        return children;
        
    }else{
        return <Navigate to='/SINGIN' replace/>
    }
};

export default RequireAuth;