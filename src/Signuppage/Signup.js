import React, { useState } from 'react'
import './Signup.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate1=useNavigate();
    const handlelogin =()=>
    {
        navigate1("/login");
    }
     const mailregex=/^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/
    // const mailregex=/^[a-zA-Z0-9,-%+-]+@[a-zA-Z0-9]+?.[a-zA-Z]{2,3}$/
    
    const [name,setName]=useState("");
    const [nameerror,setNameerror]=useState(false);
    const [email,setEmail]=useState("");
    const [emailerror,setEmailerror]=useState(false);
    const [pass,setPass]=useState("");
    const [passerror,setPasserror]=useState(false);
    const [phone,setPhone]=useState("");
    const [phonerror,setPhoneerror]=useState(false);
    const handlename=(e)=>
    {
        setName(e.target.value);
    }
    const handleemail=(e)=>
    {
        setEmail(e.target.value);
    }
    const handlepass=(e)=>
    {
        setPass(e.target.value);
    }
    const handlephone=(e)=>
    {
        setPhone(e.target.value);
    }
    const handlesignuperror=(e)=>
    {
        // const emailregex=
        e.preventDefault();
        if(name.length===""&&email.length===""&&phone.length===""&&pass.length==="")
        {
            alert("All input field is required***");
        }
        else if(name.length<5)
        {
            // alert("must be");
            setNameerror(!nameerror);
        }
        else if(!mailregex.test(email))
        {
            setEmailerror(!emailerror);
        }
        else if(pass.length<8)
        {
            setPasserror(!passerror);
        }
    }
  return (
    <div className="wholebody">
        <div className="wrapper1">
            <div className="Signup-page">
            <div className="signup-header1">
                <span>PLACEBO</span>
            </div>
            <div className="signup-header2">
                <span>SIGNUP</span>
            </div>
            <div className="input-box1">
                {/* <input onChange={handlename}></input> */}
                {/* <button onClick={handlesignuperror}>Signup</button> */}
                <input type="text" id="first" className='field' required onChange={handlename}></input>
                { nameerror && <p style={{color:"red"}}>username must be greater than 5 characters</p>
                }
                <label for="first" className="label1" >Enter your Name</label>
                <div className="icons1">
                    <AccountCircleIcon/>
                </div>
            </div>
            <div className="input-box1">
                <input type="email" id="emailid" className='field' required onChange={handleemail}></input>
                {
                    emailerror&&<p style={{color:"red",textAlign:'center'}}>Invalid email Id</p>
                }
                <label for="emailid" className="label1">Enter your Email</label>
                <div className="icons1">
                    <EmailOutlinedIcon/>
                </div>
            </div>
            <div className="input-box1">
                <input type="text" id="phone" className='field' required onChange={handlephone}></input>
                <label for="phone" className="label1">Enter your Phone number</label>
                <div className="icons1">
                    <FormatListNumberedIcon/>
                </div>
            </div>
            <div className="input-box1">
                <input type="password" id="pass" className='field' required onChange={handlepass}></input>
                {
                    passerror&&<p>password must be greater than 8 characters</p>
                }
                <label for="pass" className="label1">Enter your Password</label>
                <div className="icons1">
                    <VisibilityOffIcon/>
                </div>
            </div>
            <div className="create" >
           {/* <input type="submit" className="sign"value="Signup"onClick={handlesignuperror} onClick={handlelogin}></input> */}
          <button className="sign" onClick={handlesignuperror}>signup</button>
            </div>
            <div className="login11">
                <span >If already have an account?<a href='#' onClick={handlelogin}> Login</a></span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Signup