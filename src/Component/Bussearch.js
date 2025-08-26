import React, { useState } from 'react'
// import Form, { FormCheck } from 'react-bootstrap'
// import BusSearch 
import './Bussearch.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import { Buses, locations } from './Data'
import BusList from './BusList'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
const Container = styled.div`
// background-color:pink;
width:750px;
height:300px;
padding:1rem;
border-radius:15px;
box-shadow:0px 4px 8px rgba(0,0,0,0.2);
text-align:center;
margin-left:200px;
// background-image: radial-gradient(pink 55%, #f1c7ed 15%);
 background: linear-gradient(90deg, #fc94af,#f1c7ed);

`
const Bussearch = ({searchState,setsearchstate}) => {

  const navi=useNavigate();
  const searchtoservice=()=>
  {
    navi('/pageservices')

  }
  const searchtoaccount=()=>
  {
    navi("/account")
  }
  const [filteredBus,setFilteredBus]=useState(null);
  const handleSearch =()=>{
    setFilteredBus(Buses.filter((data)=>
      data.source===searchState.From&&
    data.destination===searchState.To&&
    data.availableDates.includes(searchState.Date)
    )
  )
  }
  return (
    <div>
      {/* <Header></Header>  */}

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
     
        <button className='button2' onClick={searchtoservice}>Services</button>
        <br></br>
        <button className='button2' >Help</button>
        <br></br>
        <button className='button2' onClick={searchtoaccount} >Account</button>
        <br></br>
        </div>
    </div>
<br></br>



   <Container>
    {/* mb-3 is margin-bottom 3 */}
    <h4 className='mb-3' style={{fontFamily:'italic'}}>FIND A BUSES</h4>
   
    <div className='d-flex flex-column align-items-center'>
    <Form.Select className='mb-3 width-300' 
      value={searchState.From}
      onChange={(e)=> setsearchstate((prevState)=>({
        ...prevState,
        From:e.target.value
      }))}>
{/* FORM SELECT FOR DROP DOWN */}
        {locations.map((data)=>(
          <option key={`${data}-source`} value={data}>
            {data}
          </option>
        ))}
      </Form.Select>
      <Form.Select className='mb-3 width-300' 
      value={searchState.To}
      onChange={(e)=> setsearchstate((prevState)=>({
        ...prevState,
        To:e.target.value
      }))}>
{/* FORM SELECT FOR DROP DOWN */}
        {locations.map((data)=>(
          <option key={`${data}-destination`} value={data}>
            {data}
          </option>
        ))}
      </Form.Select>
      <input className="form-control mb-3 width-300" type='date'
      value={searchState.Date}
      onChange={(e)=>setsearchstate((prevState)=>({
        ...prevState,Date:e.target.value})
  )}/>
      
    </div>
    <Button className='mb-3' style={{color:'#E11584',backgroundColor:'white',borderColor:'#E11584',border:'2px solid '}} onClick={handleSearch}>SEARCH
</Button>
<br></br>
<br></br>
<br></br>
      {
      filteredBus&&filteredBus?.length>0
      &&<BusList buses={filteredBus}/>}
      {filteredBus &&filteredBus.length < 1 &&<h4 style={{fontFamily:'italic',width:'350px',height:'40px',background:'#f1c7ed',marginLeft:'200px',padding:'4px',border:'2px solid',borderColor:'#E11584',borderRadius:'20px'}}>NO BUSES FOUND</h4>
      }
   </Container>
   </div>
  )
}

export default Bussearch