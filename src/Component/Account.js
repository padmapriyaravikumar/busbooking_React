import React from 'react'
import { Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Account = () => {
  return (
    <div>
      <style>
        {
          `
          .firstbox
          {
          width:350px;
          height:350px;
          
          border:2px solid pink;
          border-radius:20px;
          // background:linear-gradient(90deg,#f1c7ed,pink);
          }
          .secondbox
          {
           width:350px;
          height:350px;
          
          border:2px solid pink;
          border-radius:20px;
          background:linear-gradient(90deg,#f1c7ed,pink);
          
          }
          .thirdbox
          {

            width:350px;
          height:350px;
          
          border:2px solid pink;
          border-radius:20px;
          // background:linear-gradient(90deg,#f1c7ed,pink);
          }
          .combobox
          {
          display:flex;
          gap:20px;
          margin-left:10px;
          padding:20px;
          }
          `
        }
      </style>
         <div className='fl'>
        <div className='bar'>
          <h3>PLACEBO</h3>
  </div>
    </div>

<div className='combobox'>
<div className='firstbox'>
      <div className='account' >
     <center>
      <Avatar style={{backgroundColor:"pink",width:'75px',height:'75px',marginTop:'10px',color:'black'}}>PP</Avatar>
     <br></br>
     <h5 style={{fontFamily:"italic"}}>PADMA PRIYA R</h5>
     <h7 style={{fontFamily:"sansserif"}}>abcderf@gmail.com</h7>
     <br></br>
     <h7 style={{fontFamily:"sansserif"}}>9876543221</h7>
     <br></br>
     <h7 style={{fontFamily:"sansserif"}}>Member since 2020</h7>
     <br></br>
     </center>
      </div>
      </div>
    <div className='secondbox'>
      <center>
      <h5 style={{padding:"10px"}}>REWARDS</h5>
      <img style={{width:"150px",height:"150px"}}src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-rating-two-stars-3d-render-png-image_13149964.png"></img>
      <h6>Trip reward 2 <strong>Active</strong></h6>
      <h6>Take 1 trips before 03 dec 2024 && get a </h6>
        <strong>FREE TICKET</strong>
      </center>
    </div>
    <div className='thirdbox'>
        <center>
          <h5 style={{padding:"20px"}}>OFFERS</h5>
          <img  style={{borderradius:"20px",padding:"20px"}}src="https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-274X148.png"></img>
          <h6>Save upto Rs.250 on bus Tickets</h6>
        </center>

    </div>

    </div>

    </div>
  )
}

export default Account