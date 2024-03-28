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
        <div style={{position:"absolute",top:"15%",display:"flex",flexDirection:"column",gap:"5%",margin:"5%"}}>
        <div style={{fontSize:"24px",fontWeight:"bold"}}>Welcome,</div>
        <div style={{fontSize:"16px"}}>Plan, track and manage your spends for your financial success.</div>
        </div>
        <Button onClick={clickHandler} variant='contained' style={{backgroundColor:"black",width:"90%",marginLeft:"5%",position:"absolute",top:"70%"}}>Get Started</Button>
    </div>
  )
}

export default Onboarding