import React from 'react'
import Header from '../Component/Header'
import './Services.css'
import { useNavigate } from 'react-router-dom'
const Services = () => {
  const navigate=useNavigate()
  const servicetologin=()=>
  {
    navigate("/login")
  }
  const servicetosignup=()=>
    {
      navigate("/signup")
    }
  return (
    <div>
         
        
         <div className='fl'>
        <div className='bar'>
            
    <h3>PLACEBO</h3>
    <br></br>
  
    <div class="dropdown">
        <button className='home111'>Ticket</button>
        <div className="content">
            <button className='button1' >BookTicket</button>
            <br></br>
           
            <button className='button1'>CancelTicket</button>
            <br></br>
            <button className='button1'>Changedate</button>
            <br></br>
            <button className='button1'>ShowmyTicket</button>
        
        </div>
      </div>
     
        <button className='button2'>Services</button>
        <br></br>
        <button className='button2' onClick={servicetologin} >Login</button>
        <br></br>
        <button className='button2' onClick={servicetosignup}>Signup</button>
        <br></br>
        </div>
    </div>
   <div className='sidephoto'>
   <div className='servicewhole'>
    <div className='Servicesheader2'>
     #      Types of Services
    </div>
    <br></br>
    <br></br>
    
    <h6 className='Servicesheader2'>AC Sleeper Buses</h6>
    <br></br>
    {/* <br></br> */}
    
    <h6 className='Servicesheader2'>NON-AC Sleeper Buses</h6>
    <br></br>
    {/* <br></br> */}
    
    <h6 className='Servicesheader2'>Air Condition Buses</h6>
    <br></br>
    {/* <br></br> */}
    
    <h6 className='Servicesheader2'>Deluxe Buses</h6>
    <br></br>
    {/* <br></br> */}
    
    <h6 className='Servicesheader2'>UltraDeluxe Buses</h6>
    
    

    </div>
    <div className='gradient_background'>
    <h6 className='travel'>Traveling Together, Thriving Together!!!!!</h6>
    <img className='imageoffer'src='https://coachbuildersindia.com/wp-content/uploads/2024/04/Flipkart-bus-booking-coupons-Upto-25-off-till-April-17-1024x536.webp' width='250px' height='200px'></img>
      <h6 className='travel'> Get 50% on CashBack on BusBooking</h6>

    </div>
    </div>
    </div>
  )
}

export default Services