import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Buses } from './Data'
import Button from 'react-bootstrap/esm/Button'
// import { Buses } from './Data'
const a =1;
const Container=styled.div`
        background-color:;
        padding:1rem;
        border-radius:5px;
        box-shadow:0px 4px 8px rgba(0,0,0,0.2);
        width:1000px;
        height:520px;
        border:4px solid pink;
        margin-left:80px;

`
const TicketContainer=styled.div`
padding:0.5rem;
`
const TicketItem=styled.li`
list-style-type:none;
margin:0.5rem;
padding:1px;
background-color:white;
border-radius:5px;
 box-shadow:0px 2px 4px rgba(0,0,0,0.1);
 display:flex;
 justify-content:space-between;
 align-items:center;
 text-align:center;
`
const BusLayout = ({selectedseats,setselectedseats}) => {


    const { id }=useParams();
    const navigate=useNavigate();
    const selectedBus=Buses.find((data)=>data.id === parseInt(id));
    const isSleeper=selectedBus.busType==='Sleeper';
    const seatwidth=isSleeper ? '80px':'25px'

    const isSeatAvailable=(seat)=>selectedBus.availableSeats.includes(seat);
    const selectSeat=(seat)=>
    {
        if(selectedseats?.includes(seat))
        {
                const seats=selectedseats.filter((selectedseat)=>selectedseat!==seat);
                setselectedseats(seats);
                return 
        }
        setselectedseats((prevState)=>([...prevState,seat]));

    }
    const isSeatSelected=(seat) => selectedseats.includes(seat);
    const generateSeats =(array,key="")=>
        array.map((seats)=>
        Array.isArray(seats)?(
            <div className='d-flex'>
        {
            seats.map((seat)=>(<TicketItem style={{
                width:seatwidth,background:
                isSeatSelected(`${key}${seat}`) ?"pink":
                 isSeatAvailable(`${key}${seat}`)?"#f1c7ed":'#C5C6C7',
            cursor:isSeatAvailable(`${key}${seat}`)?"pointer":""
            } }key={seat}
            onClick={()=> selectSeat(`${key}${seat}`)}
            >
                 {key}{seat}
            </TicketItem>))
        }</div>):
        <TicketItem style={{
            width:seatwidth,background:
            isSeatSelected(`${key}${seats}`) ?"pink":
            isSeatAvailable(`${key}${seats}`)?"#f1c7ed":'#C5C6C7',
            cursor:isSeatAvailable(`${key}${seats}`)?"pointer":""
        }}
        onClick={()=> selectSeat(`${key}${seats}`)}
        
        >
            {key}{seats}

        </TicketItem>)
  return (
        <div>
    <style>
    {`
    .centername
    {
    text-align:center;
    }
    
    `
    
    }
    </style>
        <Container>
            {/* <h2>{selectedBus.name}</h2> */}
            {/* {`${a}`} */}
            <h2 className='centername'>{selectedBus.name}</h2>
            <h4 className='centername'>Tickets</h4>
            <h5 className='centername'>{selectedBus.busType}</h5>
            <div className='d-flex'>
            <div className='d-flex mb-2 align-items-center'>
                <h6>Available-</h6>

                <TicketItem style={{width:seatwidth,background:'#f1c7ed'}}>
                    {1}
                </TicketItem>
            </div>
            <div className='d-flex mb-2 align-items-center'>
                <h6>Booked</h6>

                <TicketItem style={{width:seatwidth ,background:'#C5C6C7'}}>
                    {1}
                </TicketItem>
            </div>
            <div className='d-flex mb-2 align-items-center'>
                <h6>Selected</h6>

                <TicketItem style={{width:seatwidth,background:'pink'}}>
                    {1}
                </TicketItem>
            </div>
            </div>
            <ul className='d-flex flex-wrap'>
                {
                    isSleeper?(<>
                    <TicketContainer className='d-flex align-items-center'>
                        <h6 className='p-3'>Upper</h6>
                        <div className='d-flex flex-wrap'>
                            {generateSeats(selectedBus.seatLayout.upper.first,"U")}
                        <div className='d-flex mt-4'>
                            {generateSeats(selectedBus.seatLayout.upper.second,"U")}
                        </div>
                        </div>
                    </TicketContainer>
                    <TicketContainer className='d-flex align-items-center'>
                        <h6 className='p-3'>Lower</h6>
                        <div className='d-flex flex-wrap'>
                            {generateSeats(selectedBus.seatLayout.lower.first,"L")}
                        <div className='d-flex mt-4'>
                            {generateSeats(selectedBus.seatLayout.lower.second,"L")}
                        </div>
                        </div>
                    </TicketContainer>
                    </>):
                    (
                    <TicketContainer className='d-flex align-items-center'>
                        <div>Seater</div>
                        {/* <div className='d-flex flex-wrap'> */}
                        <div>
                            {generateSeats(selectedBus.seatLayout.first)}
                        <div className='mt-4'>
                            {generateSeats(selectedBus.seatLayout.second)}
                        </div>
                        </div>
                    </TicketContainer>)
                }
            </ul>
            <div className='d-flex justify-content-center'>
                {selectedseats?.length >0 &&(<h4>Selected seats-{selectedseats.join(", ")}</h4>)}
            </div>
            <div>
                <center>
                {/* <Button className='ms-3' variant="success"></Button> */}
                <Button className='ms-3' style={{backgroundColor:'pink',borderColor:'pink',color:'black'}}
                onClick={()=> navigate("/bus/book")}
                disabled={!(selectedseats&&selectedseats?.length>0)}
                >Book now</Button>
                </center>
            </div>
        </Container>
        
    </div>
  )
}

export default BusLayout