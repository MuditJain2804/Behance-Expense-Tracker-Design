import React from 'react'
import { TbSquareRoundedChevronLeft } from "react-icons/tb";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { LuCalendarDays } from "react-icons/lu";
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import { PiDeviceMobileCamera } from "react-icons/pi";
import { PiPizza } from "react-icons/pi";
import { PiHeartbeat } from "react-icons/pi";
import { PiCar } from "react-icons/pi";
import { BsSafe } from "react-icons/bs";
import { PiWifiHigh } from "react-icons/pi";
import { PiDrop } from "react-icons/pi";
import { TbSchool } from "react-icons/tb";
import { PiBuildings } from "react-icons/pi";
import { FaBasketShopping } from "react-icons/fa6";
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import { TbWorldShare } from "react-icons/tb";

const Expense = ({setActiveComponent}) => {
  function handleClick(){
    setActiveComponent('Details')
  }
  function backhandler(){
    setActiveComponent('Home')
  }
  function clickHandler(){
    setActiveComponent('Category')
  }
  return (
    <div style={{backgroundColor:"#1D1D1D",position:"relative",height:"96vh",width:"100vw"}}>
      <div style={{position:"absolute",top:"5%",left:"3%",width:"94%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div><TbSquareRoundedChevronLeft onClick={backhandler} size="20" style={{color:"white"}}/></div>
        <div style={{color:"white",fontSize:"20px",fontWeight:"bold"}}>Expenses</div>
        <div style={{display:"flex",gap:"10px"}}>
          <div><LuCalendarDays onClick={handleClick} size={20} style={{color:"white"}}/></div>
          <div><NotificationsNoneOutlinedIcon style={{color:"white"}}/></div>
        </div>
      </div>
      <div style={{position:"absolute",top:"10%",left:"3%",width:"94%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{color:"white"}}>Categories</div>
        <div><Fab onClick={clickHandler} sx={{width:"30px",height:"25px",backgroundImage:"linear-gradient(to bottom, #8647FB,#B366FC)"}}><AddIcon style={{color:"white"}} /></Fab></div>
      </div>
      <div style={{position:"absolute",top:"15%",left:"3%",width:"94%",color:"#BDEDFB"}}>
        Choose category to add your expense
      </div>
      <div className='container'>
        <div className='item'>
          <div style={{backgroundColor:"#614848",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><PiCar color='white'/></div>
          <div style={{color:"white"}}>Transport</div>
        </div>
        <div className='item'>
          <div style={{backgroundColor:"#214431",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><BsSafe color='white'/></div>
          <div style={{color:"white"}}>Bank loan</div>
        </div>
        <div className='item'>
          <div style={{backgroundColor:"#5b1d2f",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><PiPizza color='white'/></div>
          <div style={{color:"white"}}>Food</div>
        </div>
        <div className='item'>
          <div style={{backgroundColor:"#614848",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><PiHeartbeat color='white'/></div>
          <div style={{color:"white"}}>Health</div>
        </div>
        <div className='item'>
          <div style={{backgroundColor:"#5f3415",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><PiDeviceMobileCamera color='white'/></div>
          <div style={{color:"white"}}>Recharge</div>
        </div>
        <div className='item'>
          <div style={{backgroundColor:"#162641",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><PiWifiHigh color='white'/></div>
          <div style={{color:"white"}}>Internet</div>
        </div>
        <div className='item'>
          <div style={{backgroundColor:"#4b877f",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><PiDrop color='white'/></div>
          <div style={{color:"white"}}>Tax</div>
        </div>
        <div className='item'>
          <div style={{backgroundColor:"#13405f",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><TbSchool color='white'/></div>
          <div style={{color:"white"}}>Education</div>
        </div>
        <div className='item'>
          <div style={{backgroundColor:"#615727",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><PiBuildings color='white'/></div>
          <div style={{color:"white"}}>Hotel</div>
        </div>
      </div>
      <div style={{position:"absolute",top:"62%",left:"3%",width:"94%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{color:"white"}}>Expenses on Jan,2024</div>
        <div><Fab sx={{width:"30px",height:"25px",backgroundImage:"linear-gradient(to bottom, #8647FB,#B366FC)"}}><AddIcon style={{color:"white"}} /></Fab></div>
      </div>
      <div style={{position:"absolute",top:"67%",left:"3%",width:"94%",color:"#BDEDFB"}}>
        Top spendings
      </div>
      <div style={{position:"absolute",top:"72%",left:"3%",width:"94%",display:"flex",flexDirection:"column",gap:"7px"}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
            <div style={{backgroundColor:"#2f4b41",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><FaBasketShopping color='white'/></div>
            <div style={{color:"white"}}>Grocery</div>
          </div>
          <div style={{color:"red"}}>-$ 1,000</div>
        </div>
        <div style={{height:"1px",backgroundImage:"linear-gradient(to bottom, #8647FB,#B366FC)"}}></div>
      </div>
      <div style={{position:"absolute",top:"82%",left:"3%",width:"94%",display:"flex",flexDirection:"column",gap:"7px"}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
            <div style={{backgroundColor:"#711d37",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}><HouseOutlinedIcon /></div>
            <div style={{color:"white"}}>Housing</div>
          </div>
          <div style={{color:"red"}}>-$ 20,000</div>
        </div>
        <div style={{height:"1px",backgroundImage:"linear-gradient(to bottom, #8647FB,#B366FC)"}}></div>
      </div>
      <div style={{position:"absolute",top:"92%",left:"3%",width:"94%",display:"flex",flexDirection:"column",gap:"7px"}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
            <div style={{backgroundColor:"#125160",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><TbWorldShare color='white'/></div>
            <div style={{color:"white"}}>Internet</div>
          </div>
          <div style={{color:"red"}}>-$ 1,500</div>
        </div>
      </div>
    </div>
  )
}

export default Expense