import React from 'react'
import { TbSquareRoundedChevronLeft } from "react-icons/tb";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { TextField,Button } from '@mui/material';

const AddTransaction = ({setActiveComponent}) => {
  function backhandler(){
    setActiveComponent('Transaction')
  }
  function clickHandler(){
    setActiveComponent('Home')
  }
  return (
    <div style={{backgroundColor:"#1D1D1D",position:"relative",height:"96vh",width:"100vw"}}>
      <div style={{position:"absolute",top:"5%",left:"3%",width:"94%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div><TbSquareRoundedChevronLeft onClick={backhandler} size="20" style={{color:"white"}}/></div>
        <div style={{color:"white",fontSize:"20px",fontWeight:"bold"}}>Transactions</div>
        <div><NotificationsNoneOutlinedIcon style={{color:"white"}}/></div>
      </div>
      <div style={{position:"absolute",top:"15%",left:"3%",width:"94%",color:"white"}}>To:Helen</div>
      <div><TextField type='number' placeholder='Enter amount' inputProps={{style : {color:"white"}}} value={3000} fullWidth style={{position:"absolute",top:"20%",left:"3%",width:"94%",border:"1px solid white"}}/></div>
      <div style={{position:"absolute",top:"35%",left:"3%",width:"94%",color:"white"}}>Add messaage :</div>
      <div style={{position:"absolute",top:"40%",left:"3%",width:"92%",color:"#14b7a7",height:"15%",borderRadius:"5px",backgroundColor:"#303638",padding:"1%"}}>Payment for buying clothes in Max</div>
      <Button onClick={clickHandler} variant='contained' style={{position:"absolute",top:"70%",left:"3%",width:"94%",backgroundImage:"linear-gradient(to bottom, #8647FB,#B366FC)"}}>Pay</Button>
    </div>
  )
}

export default AddTransaction