import React from 'react'
import './Landingpage.css'
import { useNavigate } from 'react-router-dom'
// import './Home1' 
const Landingpage = () => {
    const navigate=useNavigate();
  const  handle=()=>
    {
        // console.log("hwi")
        navigate("/login");
    }
    const  signhandle=()=>
        {
            // console.log("hwi")
            navigate("/signup");
        }
        const  signhandlebus=()=>
            {
                // console.log("hwi")
                navigate("/bussearch");
            }
            const  handleservice=()=>
              {
                  // console.log("hwi")
                  navigate("/pageservices");
              }
  return (
    <div>
    <div className='fl'>
        <div className='bar'>
            {/* <img src='https://img.freepik.com/premium-vector/minimal-abstract-logo-bus-icon-school-bus-vector-silhouette-isolated-design-template_653669-2867.jpg' width='80px' height='80px' ></img> */}
    <h3>PLACEBO</h3>
    <br></br>
  
    <div class="dropdown">
        <button className='home111'>Ticket</button>
        <div className="content">
            <button className='button1' onClick={signhandlebus}>BookTicket</button>
            <br></br>
            {/* <br></br> */}
            <button className='button1'>CancelTicket</button>
            <br></br>
            <button className='button1'>Changedate</button>
            <br></br>
            {/* <br></br> */}
            <button className='button1'>ShowmyTicket</button>
        {/* <a href="">Ticket</a> */}
        {/* <a href="">Bookings</a> */}
        </div>
      </div>
     {/* <a href="">Services</a>
     <a href="">login</a>
     <button></button><a href="" onClick={handle}>Signup</a> */}
        <button className='button2' onClick={handleservice}>Services</button>
        <br></br>
        <button className='button2' onClick={handle}>Login</button>
        <br></br>
        <button className='button2' onClick={signhandle}>Signup</button>
        <br></br>
        </div>
    </div>
    <div className='offersimages'>
    <div className='backimagehome'>
        <h6 className='india'>India's No. 1 Online Bus Ticket Booking Site</h6>
    <img  className='imagehome'src='https://www.easemytrip.com/images/bus-img/bus-1200x630.png' width='300px' height='250px'></img>
    </div>
   
    <div className='gradient_background'>
    <h6 className='travel'>Traveling Together, Thriving Together!!!!!</h6>
    <img className='imageoffer'src='https://pbs.twimg.com/media/CvsFAnRVUAAcwOb.jpg' width='250px' height='200px'></img>
      <h6 className='travel'> Get 50% on CashBack on BusBooking</h6>

        
    </div>
  </div>
    
    
    </div>

  )
}

export default Landingpage