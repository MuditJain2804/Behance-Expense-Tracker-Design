import React, { useState } from 'react'
import { TbSquareRoundedChevronLeft } from "react-icons/tb";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { PiDeviceMobileCamera } from "react-icons/pi";
import { PiPizza } from "react-icons/pi";
import { PiHeartbeat } from "react-icons/pi";
import { PiCar } from "react-icons/pi";
import { BsSafe } from "react-icons/bs";
import { PiWifiHigh } from "react-icons/pi";
import { PiDrop } from "react-icons/pi";
import { TbSchool } from "react-icons/tb";
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'


const Category = ({setActiveComponent}) => {
  const [selectedValue, setSelectedValue] = useState('Expense')
  function backhandler(){
    setActiveComponent('Home')
  }
  function handleChange(event){
    const newValue = event.currentTarget.value;
    setSelectedValue(newValue)
  }
  return (
    <div style={{backgroundColor:"#1D1D1D",position:"relative",height:"94vh",width:"100%",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"5%",left:"3%",width:"94%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div><TbSquareRoundedChevronLeft onClick={backhandler} size="20" style={{color:"white"}}/></div>
        <div style={{color:"white",fontSize:"20px",fontWeight:"bold"}}>Category</div>
        <div><NotificationsNoneOutlinedIcon style={{color:"white"}}/></div>
      </div>
      <ToggleButtonGroup size='small' onChange={handleChange} exclusive value={selectedValue} style={{position:"absolute",top:"10%",left:"3%",display:"flex",alignItems:"center",justifyContent:"center",width:"94%"}} >
        <ToggleButton size='small' style={{color:"white", borderBottom: selectedValue === "Expense" ? '4px solid #B366FC' : 'none'}} value='Expense'>Expense</ToggleButton>
        <ToggleButton size='small' style={{color:"white", borderBottom: selectedValue === "Income" ? '4px solid #B366FC' : 'none'}} value='Income'>Income</ToggleButton>
      </ToggleButtonGroup>
        {
          selectedValue === 'Expense' &&
          <div style={{position:"absolute",top:"20%",left:"3%",width:"94%",display:"flex",flexDirection:"column",gap:"15px"}}>
            <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
              <div style={{backgroundColor:"#614848",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><PiCar color='white'/></div>
              <div style={{color:"white"}}>Transport</div>
            </div>
            <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
              <div style={{backgroundColor:"#614848",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><PiHeartbeat color='white'/></div>
              <div style={{color:"white"}}>Medicine</div>
            </div>
            <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
              <div style={{backgroundColor:"#4b877f",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><PiDrop color='white'/></div>
              <div style={{color:"white"}}>Tax</div>
            </div>
            <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
              <div style={{backgroundColor:"#214431",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><BsSafe color='white'/></div>
              <div style={{color:"white"}}>Office</div>
            </div>
            <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
              <div style={{backgroundColor:"#5f3415",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><PiDeviceMobileCamera color='white'/></div>
              <div style={{color:"white"}}>Phone bill</div>
            </div>
            <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
              <div style={{backgroundColor:"#13405f",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><TbSchool color='white'/></div>
             <div style={{color:"white"}}>Education</div>
            </div>
            <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
              <div style={{backgroundColor:"#5b1d2f",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><PiPizza color='white'/></div>
              <div style={{color:"white"}}>Food</div>
            </div>
            <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
              <div style={{backgroundColor:"#162641",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><PiWifiHigh color='white'/></div>
              <div style={{color:"white"}}>Internet</div>
            </div>
            <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
              <div style={{backgroundColor:"#4b877f",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><PiDrop color='white'/></div>
              <div style={{color:"white"}}>Electricity</div>
            </div>
          </div>
        }
      <div style={{position:"absolute",top:"92%",right:"3%"}}><Fab sx={{width:"30px",height:"25px",backgroundImage:"linear-gradient(to bottom, #8647FB,#B366FC)"}}><AddIcon style={{color:"white"}} /></Fab></div>
    </div>
  )
}

export default Category