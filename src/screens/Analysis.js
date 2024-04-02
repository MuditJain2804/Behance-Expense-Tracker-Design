import React, { useState } from 'react'
import { TbSquareRoundedChevronLeft } from "react-icons/tb";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Fab, FormControl, MenuItem, Select } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import { ArrowDropDown } from '@mui/icons-material';

const Analysis = () => {
  const month = ['January','February','March','April','May','June','July','August','September','October','November','December']
  const [selectedMonth, setSelectedMonth] = useState('')
  function handleChange(event){
    setSelectedMonth(event.target.value)
  }
  return (
    <div style={{backgroundColor:"#1D1D1D",position:"relative",height:"94vh",width:"100%",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"5%",left:"3%",width:"94%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div><TbSquareRoundedChevronLeft size="20" style={{color:"white"}}/></div>
        <div style={{color:"white",fontSize:"20px"}}>Analysis</div>
        <div><NotificationsNoneOutlinedIcon style={{color:"white"}}/></div>
      </div>
      <div style={{position:"absolute",top:"12%",left:"3%",width:"94%",display:"flex",flexDirection:"column"}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{color:"#BDEDFB"}}>Total Income</div>
          <div><Fab sx={{width:"30px",height:"25px",backgroundImage:"linear-gradient(to bottom, #8647FB,#B366FC)"}}><AddIcon style={{color:"white"}} /></Fab></div>
        </div>
        <div>
          <FormControl size='small' sx={{width:"40%"}}>
            <Select sx={{border:"1px solid white",color:"white"}} onChange={handleChange} value={selectedMonth} IconComponent={() => <ArrowDropDown sx={{color:"white"}}/>}>
              {month.map((text,index) => 
              <MenuItem  value={text} >{text}</MenuItem>
              )}
            </Select>
          </FormControl>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Analysis