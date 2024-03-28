import React from 'react'
import backgroundImage from "../assets/Background Image.png"
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Onboarding = () => {
    const navigate = useNavigate();
    function clickHandler(){
        navigate('/login')
    }
  return (
    <div style={{height:"100vh",width:"100%",overflow:"hidden",position:"relative"}}>
        <img src={backgroundImage} style={{width:"100%",height:"100%",position:"absolute",opacity:"50%",zIndex:"-2"}}/>
        <div>
        <h1 style={{position:"absolute",top:"15%",padding:"5%"}}>Welcome,</h1>
        <div style={{position:"absolute",top:"27%",fontSize:"16px",padding:"5%"}}>Plan, track and manage your spends for your financial success.</div>
        </div>
        <Button onClick={clickHandler} variant='contained' style={{backgroundColor:"black",width:"90%",marginLeft:"5%",position:"absolute",top:"65%"}}>Get Started</Button>
    </div>
  )
}

export default Onboarding