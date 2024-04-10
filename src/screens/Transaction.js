import React from 'react'
import { TbSquareRoundedChevronLeft } from "react-icons/tb";
import HistoryIcon from '@mui/icons-material/History';
import { RxPerson } from "react-icons/rx";
import { RiQrScan2Line } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { Button, TextField } from '@mui/material';

const Transaction = ({setActiveComponent}) => {
  function handleClick(){
    setActiveComponent('TransactionHistory')
  }
  function backhandler(){
    setActiveComponent('Home')
  }
  function clickHandler(){
    setActiveComponent('AddTransaction')
  }
  return (
    <div style={{backgroundColor:"#1D1D1D",position:"relative",height:"96vh",width:"100vw"}}>
      <div style={{position:"absolute",top:"5%",left:"3%",width:"94%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div><TbSquareRoundedChevronLeft onClick={backhandler} size="20" style={{color:"white"}}/></div>
        <div style={{color:"white",fontSize:"20px",fontWeight:"bold"}}>Transactions</div>
        <div onClick={handleClick}><HistoryIcon style={{color:"white"}}/></div>
      </div>
      <div style={{position:"absolute",top:"15%",left:"3%",width:"94%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <div style={{padding:"12px",borderRadius:"5px",backgroundImage:"linear-gradient(to bottom, #8647FB,#B366FC)"}}><RxPerson size={20} color='white'/></div>
          <div style={{color:"white",fontSize:"0.8em"}}>Send to contacts</div>
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <div style={{padding:"12px",borderRadius:"5px",border:"1px solid #B366FC"}}><RiQrScan2Line size={20} color='white'/></div>
          <div style={{color:"white",fontSize:"0.8em"}}>Scan QR code</div>
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <div style={{padding:"12px",borderRadius:"5px",border:"1px solid #B366FC"}}><IoWalletOutline size={20} color='white'/></div>
          <div style={{color:"white",fontSize:"0.8em"}}>Bank Transfer/UPI</div>
        </div>
      </div>
      <div style={{position:"absolute",top:"30%",left:"3%",width:"94%",display:"flex",flexDirection:"column",gap:"10px"}}>
        <div style={{color:"white"}}>Enter number manually</div>
        <div><TextField type='number' inputProps={{style : {color:"white"}}} placeholder='Enter number' fullWidth style={{border:"1px solid white"}}/></div>
      </div>
      <div style={{position:"absolute",top:"50%",display:"flex",justifyContent:"center",width:"100%",color:"white"}}>or</div>
      <div style={{position:"absolute",top:"55%",display:"flex",justifyContent:"center",width:"100%",color:"#B366FC"}}>Fetch from contacts</div>
      <Button onClick={clickHandler} variant='contained' style={{position:"absolute",top:"70%",left:"3%",width:"94%",backgroundImage:"linear-gradient(to bottom, #8647FB,#B366FC)"}}>Select</Button>
    </div>
  )
}

export default Transaction