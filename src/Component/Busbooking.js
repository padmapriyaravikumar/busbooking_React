import React from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/esm/Button'
import { locations } from './Data'
// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
const Busbooking = ({selectedseats,searchState,setselectedseats,setsearchstate}) => {
    const navigate=useNavigate()
  return (
    <div>
      <style>{`
      .medifull
      {
        width:800px;
        hwight:500px;
        background:linear-gradient(90deg,#f1c7ed,pink);
        border-radius:20px;
        margin-left:160px;
      }

      `}</style>
    <div className='medifull'>
    <div className='text-center'>
        <h5>{searchState.From} To {searchState.To}</h5>
        <h5>Date:{searchState.Date}</h5>
        <br/>
        <h5>Please fill below detail</h5>
        {selectedseats.map((data)=>(
          <div>
            <div className='my-3'>Seat No:{data}</div>
            <Form.Group className="d-flex justify-content-center">
                <Form.Label>Name:</Form.Label>
                <Form.Control className='ms-2 mb-3 width-300'
                 placeholder="Name" type="text"/>
            </Form.Group>
            <Form.Group className="d-flex justify-content-center">
                <Form.Label>Age:</Form.Label>
                <Form.Control className='ms-2 mb-3 width-300'
                 placeholder="Age" type="number"/>
            </Form.Group>
            </div>)) 
            }
             <div>

<select>

  <option value="kid">Medicine for kids</option>

  <option value="adult">Medicine for Adult</option>

  <option value="senor">Medicine for seniorcitizen</option>

</select>

</div>
<br/>
<div>
<select>

<option value="fev">Fever</option>
<option value="cool">cold&cough</option>

<option value="stomach">stomachache</option>

<option value="head">Headache</option>
<option value="leg">Legpain</option>
<option value="oth">Other</option>
</select>
</div>
<br/>
<div>
  <input/>
  <Button
      component="label"
      role={undefined}
      variant="success"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload files
      <VisuallyHiddenInput
        type="file"
        onChange={(event) => console.log(event.target.files)}
        multiple
      />
    </Button>
</div>
<br/>

            
          <Button onClick={()=>{ alert('your ticket booked successfully') ;
          setsearchstate( {
            From:locations[0],
            To:locations[2],
            Date:""
    })
    setselectedseats([])
            navigate("/bussearch");}}  style={{backgroundColor:'white',borderColor:'#E11584',color:'#E11584',border:'2px solid'}}>PAY NOW 
          </Button>
    </div>
    </div>
    </div>
  )
}

export default Busbooking