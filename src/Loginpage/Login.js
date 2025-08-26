import React from 'react'
import './Login.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate=useNavigate();
    // const navigate1=useNavigate();
    const handlesign =()=>
    {
        navigate("/signup");
    }
    const changeprops =()=>
    {
        navigate("/")
    }
  return (
    <div className="full">
        <div className="wrapper">
            <div className="login-box">
                <div className="login-header1">
                    <span>PLACEBO</span>
                    </div>
                    <br></br>
                    <div className="login-header2">
                    <span>LOGIN</span>
                </div>
                <div className="input_box">
                    <input type="text" id="user" className="input-field" required></input>
                    <label for="user" className="label" >Username</label>
                   <div className="icons"> <AccountCircleIcon/></div>
                </div>
                <div className="input_box">
                    <input type="password" id="pass" className="input-field" required></input>
                    <label for="pass" className="label">Password</label>
                   <div className="icons"><VisibilityOffIcon/></div>
                </div>
                <div className="remember-forgot">
                    <div className="remember-me">
                        <input type="checkbox" id="remember">
                        </input>
                        <label for="remember">Remember me</label>
                    </div>
                    <div className="forgot">
                        <a href="#">Forgot Password??</a>
                    </div>
                </div>
                <div className="input_box">
                    <input type="submit" className="input-submit" value="Login" onClick={changeprops}></input>
                </div>
                <div className="Register" onClick={handlesign}>
                    <span>Don't have an account? <a href="#">Register</a></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login