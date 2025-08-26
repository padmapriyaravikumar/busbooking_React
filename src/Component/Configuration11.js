import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bussearch from './Bussearch'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { locations } from './Data'
import BusLayout from './BusLayout'
import Busbooking from './Busbooking'
import Login from '../Loginpage/Login'
import Signup from '../Signuppage/Signup'
import Landingpage from '../Landingpage/Landingpage'
import Services from '../Landingpage/Services'
import Account from './Account'
const Configuration11 = () => {
    const[searchState,setsearchstate]=useState(
        {
                From:locations[0],
                To:locations[2],
                Date:"",
        }
    )
    const [selectedseats,setselectedseats]=useState([])
  return (
    <div>
       {/* <Header></Header> */}
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage/>}></Route>
        <Route path="/login" element ={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/account" element={<Account/>}></Route>
        <Route path="/pageservices" element={<Services/>}></Route>
            <Route path='/bussearch' element={<Bussearch searchState={searchState} setsearchstate={setsearchstate}/>}/>
            <Route path='/bus/:id' element={<BusLayout selectedseats={selectedseats} setselectedseats={setselectedseats}/>}/>
            <Route path='/bus/book' element={<Busbooking selectedseats={selectedseats}  searchState={searchState}
            setselectedseats={setselectedseats}
            setsearchstate={setsearchstate}/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Configuration11