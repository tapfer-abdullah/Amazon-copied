import React, { useContext, useState } from 'react';
import "./SingUp.css";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const SingUp = () => {

    const {createUser} = useContext(AuthContext);
    const [Error, setError] = useState("");

    const handleSingUp = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        console.log(email, password, confirmPassword)

        setError("");
        if(password !== confirmPassword){
            setError("Password does not not match")
            return
        }
        else if(password.length < 6){
            setError("Password must be at least 6 characters")
            return;
        }

        createUser(email, password)
        .then(result => console.log(result.user))
        .catch(error => {
            console.log(error);
            setError(error.message)
        })
        form.reset();
    }

    return (
        <div className="margin-div">
      <div className="form-container">
        <h3 className="form-title">Please Sing up</h3>
        <form onSubmit={handleSingUp} className="form">
          <div className="form-control">
            <label>Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="form-control">
            <label>Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <div className="form-control">
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" id="confirmPassword" required />
          </div>

          <input className="submit-btn" type="submit" value="Sing up" />

          <div className="form-message-div form-message">
            <span className="">Already have an account? </span>
            <Link to="/Login" className="text-orange">
            Login
            </Link>
          </div>

        <p className="error-message">
            {Error && <span>{Error}</span>}
        </p>

        </form>
      </div>
    </div>
    );
};

export default SingUp;