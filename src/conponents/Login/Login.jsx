import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
    const [Error, setError] = useState("");
    const [show, setShow] = useState(false);

    const {loginUser} = useContext(AuthContext);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const navigate = useNavigate();

    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        setError("");
        loginUser(email, password)
        .then(result => {
            console.log(result)
            navigate(from, {replace: true});
        })
        .catch(error =>{
            console.log(error);
            setError(error.message);
        })
        form.reset();
    }

  return (
    <div className="margin-div">
      <div className="form-container">
        <h3 className="form-title">Please Log in</h3>
        <form onSubmit={handleLogin} className="form">
          <div className="form-control">
            <label>Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="form-control">
            <label>Password</label>
            <input type={show ? "text" : "password"} name="password" id="password" required />
          </div>

          <p onClick={() => setShow(!show)} className="show-password">
            {show ? "Hide password" : "Show password"}
          </p>
          <input className="submit-btn" type="submit" value="Log in" />

          <div className="form-message-div form-message">
            <span className="">New to Ema-john? </span>
            <Link to="/Singup" className="text-orange">
              Create New Account
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

export default Login;
