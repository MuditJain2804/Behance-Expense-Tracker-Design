import React from 'react'
import { TbSquareRoundedChevronLeft } from "react-icons/tb";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { GoPeople } from "react-icons/go";
import { PiPencil } from "react-icons/pi";
import { Button } from '@mui/material';

const Details = ({setActiveComponent}) => {
  function backhandler(){
    setActiveComponent('Expense')
  }
    const daysInMonth = new Date(2024, 3 + 1, 0).getDate();
    const firstDay = new Date(2024, 3, 1).getDay();
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const emptySlotsArray = Array.from({ length: firstDay }, (_, i) => null);

  return (
    <div style={{backgroundColor:"#1D1D1D",position:"relative",height:"96vh",width:"100vw"}}>
      <div style={{position:"absolute",top:"5%",left:"3%",width:"94%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div><TbSquareRoundedChevronLeft onClick={backhandler} size="20" style={{color:"white"}}/></div>
        <div style={{color:"white",fontSize:"20px",fontWeight:"bold"}}>Details</div>
        <div><NotificationsNoneOutlinedIcon style={{color:"white"}}/></div>
      </div>
      <div style={{position:"absolute",top:"12%",color:"white",width:"85%",left:"3%",backgroundImage:"linear-gradient(to bottom, #8647FB,#B366FC)",borderRadius:"10px",padding:"1em"}}>
      <div style={{fontWeight:"500"}}>April 2024</div>
      <div className="days-grid">
        {}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="day-name">{day}</div>
        ))}
        {}
        {emptySlotsArray.map((_, index) => (
          <div key={`empty-${index}`} className="empty"></div>
        ))}
        {}
        {daysArray.map((day) => (
          <div key={day} className="day" style={{color: day === 18 && "black",backgroundColor: day === 18 && "#BDEDFB"}}>{day}</div>
        ))}
      </div>
    </div>
    <div style={{position:"absolute",top:"63%",left:"3%",width:"94%",display:"flex",flexDirection:"column",gap:"8px"}}>
        <div style={{display:"flex",justifyContent:"space-between",color:"white",alignItems:"end"}}>
          <div style={{fontWeight:"500",fontSize:"20px"}}>April 18, 2024</div>
          <div style={{fontSize:"12px"}}>8.00 a.m</div>
        </div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
            <div style={{backgroundColor:"#615727",height:"2.5em",width:"2.5em",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><GoPeople color='white'/></div>
            <div style={{color:"white"}}>Friends</div>
          </div>
          <div style={{display:"flex",flexDirection:"column"}}>
            <div style={{color:"white",fontSize:"12px"}}>Helen</div>
            <div style={{color:"red",fontSize:"12px"}}>-$ 500</div>
          </div>
        </div>
        <div style={{height:"1px",backgroundImage:"linear-gradient(to bottom, #8647FB,#B366FC)"}}></div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{color:"white"}}>Category</div>
          <div style={{color:"white"}}>Expense</div>
        </div>
        <div style={{height:"1px",backgroundImage:"linear-gradient(to bottom, #8647FB,#B366FC)"}}></div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{color:"white"}}>Note</div>
          <div><PiPencil color='#B366FC' size={25}/></div>
        </div>
    </div>
    <div style={{position:"absolute",top:"95%",left:"3%",width:"94%",display:"flex",justifyContent:"space-between"}}>
      <Button variant='contained'  style={{width:"45%",backgroundColor:"#9D2F2F"}}>Cancel</Button>
      <Button variant='contained' style={{width:"45%",color:"black",backgroundColor:"#74E969"}}>OK</Button>
    </div>
    </div>
  )
}

export default Details