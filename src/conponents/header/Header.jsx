import React, { useContext } from 'react';
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {
    const {user, logoutUser} = useContext(AuthContext);
    return (
        <nav className='header'>
            <Link to="/"><img src={logo} alt="logo" /></Link> 

            <div className='links'>
                <Link to="/Order">Order</Link>
                <Link to="/Order-Review">Order Review</Link>
                <Link to="/Manage-Inventory">Manage Inventory</Link>
                <Link to="/Login">Login</Link>
                <Link to="/Singup">Sing up</Link>
                {user && 
                    <>
                        <p className='user-email'>{user.email}</p>
                        <button onClick={logoutUser} className='sing-out-btn'>Sing Out</button>
                    </>
                }
            </div>
        </nav>
    );
};

export default Header;