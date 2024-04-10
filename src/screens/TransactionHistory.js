import React from 'react'
import { TbSquareRoundedChevronLeft } from "react-icons/tb";
import { PiDeviceMobileCamera } from "react-icons/pi";
import { PiPizza } from "react-icons/pi";
import { PiHeartbeat } from "react-icons/pi";
import AddIcon from '@mui/icons-material/Add'
import { Fab } from '@mui/material';

const TransactionHistory = ({setActiveComponent}) => {
  function backhandler(){
    setActiveComponent('Transaction')
  }
  function clickHandler(){
    setActiveComponent('Transaction')
  }
  return (
    <div style={{backgroundColor:"#1D1D1D",position:"relative",height:"96vh",width:"100vw"}}>
      <div style={{position:"absolute",top:"5%",left:"3%",width:"94%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div><TbSquareRoundedChevronLeft onClick={backhandler} size="20" style={{color:"white"}}/></div>
        <div style={{color:"white",fontSize:"20px",fontWeight:"bold"}}>Transaction History</div>
        <div></div>
      </div>
      <div style={{position:"absolute",top:"15%",left:"3%",width:"94%",color:"#BDEDFB",fontSize:"1.2em"}}>
        Transaction on Feb,2024
      </div>
      <div style={{position:"absolute",top:"25%",left:"3%",width:"94%",display:"flex",flexDirection:"column"}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{display:"flex",gap:"15px"}}>
            <div style={{backgroundColor:"#5F3415",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><PiDeviceMobileCamera size={20} color='white'/></div>
            <div style={{display:"flex",flexDirection:"column"}}>
              <div style={{color:"white"}}>Airtel Recharge</div>
              <div style={{color:"gray",fontSize:"10px"}}>01/02/2024</div>
              <div style={{color:"#B366FC",fontSize:"10px"}}>Details</div>
            </div>
          </div>
          <div style={{color:"red"}}>-$ 1,000</div>
        </div>
        <div style={{color:"white"}}>Recharge</div>
      </div>
      <div style={{position:"absolute",top:"40%",left:"3%",width:"94%",display:"flex",flexDirection:"column"}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{display:"flex",gap:"15px"}}>
            <div style={{backgroundColor:"#5B1D2F",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><PiPizza size={20} color='white'/></div>
            <div style={{display:"flex",flexDirection:"column"}}>
              <div style={{color:"white"}}>Pizza</div>
              <div style={{color:"gray",fontSize:"10px"}}>01/02/2024</div>
              <div style={{color:"#B366FC",fontSize:"10px"}}>Details</div>
            </div>
          </div>
          <div style={{color:"red"}}>-$ 500</div>
        </div>
        <div style={{color:"white"}}>Food</div>
      </div>
      <div style={{position:"absolute",top:"55%",left:"3%",width:"94%",display:"flex",flexDirection:"column"}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{display:"flex",gap:"15px"}}>
            <div style={{backgroundColor:"#3D441F",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><PiHeartbeat size={20} color='white'/></div>
            <div style={{display:"flex",flexDirection:"column"}}>
              <div style={{color:"white"}}>Derma treatment</div>
              <div style={{color:"gray",fontSize:"10px"}}>03/02/2024</div>
              <div style={{color:"#B366FC",fontSize:"10px"}}>Details</div>
            </div>
          </div>
          <div style={{color:"red"}}>-$ 500</div>
        </div>
        <div style={{color:"white"}}>Health</div>
      </div>
      <div style={{position:"absolute",top:"70%",left:"3%",width:"94%",display:"flex",flexDirection:"column"}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{display:"flex",gap:"15px"}}>
            <div style={{backgroundColor:"#3D441F",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><PiHeartbeat size={20} color='white'/></div>
            <div style={{display:"flex",flexDirection:"column"}}>
              <div style={{color:"white"}}>Medicine</div>
              <div style={{color:"gray",fontSize:"10px"}}>03/02/2024</div>
              <div style={{color:"#B366FC",fontSize:"10px"}}>Details</div>
            </div>
          </div>
          <div style={{color:"red"}}>-$ 500</div>
        </div>
        <div style={{color:"white"}}>Health</div>
      </div>
      <div><Fab onClick={clickHandler} sx={{position:"absolute",top:"90%",right:"3%",width:"30px",height:"25px",backgroundImage:"linear-gradient(to bottom, #8647FB,#B366FC)"}}><AddIcon style={{color:"white"}} /></Fab></div>
    </div>
  )
}

export default TransactionHistory