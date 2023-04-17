import React, { useContext } from 'react';
import "./PrivateRoute.css";
import { AuthContext } from '../../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='loading-loader'>Loading..........</div>
    }

    if(user){
        return children;
    }

    return (
        <Navigate to="/Login" state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;