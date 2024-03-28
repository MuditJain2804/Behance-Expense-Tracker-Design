import { Avatar, Fab } from '@mui/material'
import React from 'react'
import image from '../assets/1.jpg'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AddIcon from '@mui/icons-material/Add'
import { TbChartCircles } from "react-icons/tb";
import { RiMastercardLine } from "react-icons/ri";

const Home = () => {
  return (
    <div style={{position:"relative",height:"100vh",width:"100vw",backgroundColor:"black"}}>
    <div><NotificationsNoneOutlinedIcon style={{position:"absolute",top:"2%",right:"3%",color:"white",marginTop:"0.3em"}}/></div>
        <div style={{display:"flex",position:"absolute",top:"2%",left:"3%",gap:"1em",width:"100%"}}>
            <Avatar src={image}/>
            <div style={{display:"flex",flexDirection:"column"}}>
              <div style={{color:"white",fontSize:"1em",fontWeight:"500"}}>Hello Zelensky,</div>
                <div style={{color:"silver",fontSize:"0.75em"}}>"Invest in what matters most"</div>
            </div>
        </div>
        <div style={{display:"flex",position:"absolute",top:"15%",width:"94%",left:"3%",justifyContent:"space-between"}}>
          <div style={{color:"white"}}>Cards</div>
          <div><Fab sx={{width:"30px",height:"30px",backgroundImage:"linear-gradient(to bottom, #8647FB,#B366FC)"}}><AddIcon style={{color:"white"}} /></Fab></div>
        </div>
        <div style={{position:"absolute",top:"24%",left:"3%",width:"94%",backgroundImage:"linear-gradient(to right, #F8D3B3,#A0C7AB,#3DB8A0)"}}>
          <div style={{display:"flex",flexDirection:"column",color:"white",padding:"20px",gap:"20px"}}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div>ADRBank</div>
              <TbChartCircles/>
            </div>
            <div>8763 2736 9873 0329</div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div>
                <div>Card Holder Name</div>
                <div>Zelensky</div>
              </div>
              <div>
                <div>Expiry Date</div>
                <div>10/28</div>
              </div>
              <div><RiMastercardLine/></div>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Home