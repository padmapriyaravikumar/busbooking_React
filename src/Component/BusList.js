import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const BusListContainer=styled.div`
background-color:#f0f0f0;
// background-color:#f1c7ed;
padding:1 rem;
border-radius:5px;
box-shadow:0px 4px 8px rgba(0,0,0,0.2);`
const BusItem =styled.div`
background-color:white;
padding:1rem;
margin:0.5rem 0;
border-radius:50px;
box-shadow:4px 8px 4px  #ffC0CB;`
const BusList = ({buses}) => {
    const navigate1=useNavigate();
  return (
    <div>
        <BusListContainer>
        <h3>AVAILABLE BUSES</h3>
        {
            buses.map((bus)=>(
                <BusItem className='d-flex align-items-center justify-content-between'key={bus.id}>
                    <div>
                        
                        <h4 style={{fontFamily:'italic'}}>{bus.name}</h4>
                        <p><strong>{bus.source}</strong></p>
                       <h6>TO</h6>
                        <p><strong>{bus.destination}</strong></p>
                        
                        <p><strong> {bus.departureTime}- {bus.arrivalTime}</strong></p>
                        {/* <p>DepartureTime: {bus.departureTime}</p> */}
                        {/* <p>ArrivalTime: {bus.arrivalTime}</p> */}
                        <p>Price: {bus.price}</p>
                        <p>Type: {bus.busType}</p>
                    </div>
                    <Button className='mb-3' style={{backgroundColor:'pink',borderColor:'pink',color:'black'}} 
                    onClick={()=>navigate1(`/bus/${bus.id}`)}>Book now</Button>
                   <h6>AvailableSeats: {bus.availableSeats.length}</h6>
                </BusItem>
                
            ))
            }
            </BusListContainer>
    </div>
  )
}

export default BusList