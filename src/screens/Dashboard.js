import { Avatar, Fab } from '@mui/material'
import React from 'react'
import image from '../assets/1.jpg'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AddIcon from '@mui/icons-material/Add'
import { BsBrilliance } from "react-icons/bs";
import { RiMastercardLine } from "react-icons/ri";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Gauge,gaugeClasses } from '@mui/x-charts/Gauge';
import { MdFlight } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate()
  function clickhandler(){
    navigate('/profile')
  }
  return (
    <div style={{position:"relative",height:"94vh",width:"100%",backgroundColor:"#1D1D1D",overflow:"hidden"}}>
    <div><NotificationsNoneOutlinedIcon style={{position:"absolute",top:"2%",right:"3%",color:"white",marginTop:"0.3em"}}/></div>
        <div style={{display:"flex",position:"absolute",top:"2%",left:"3%",gap:"1em",width:"100%"}}>
            <div onClick={clickhandler}><Avatar src={image}/></div>
            <div style={{display:"flex",flexDirection:"column"}}>
              <div style={{color:"white",fontSize:"1em",fontWeight:"500"}}>Hello Zelensky,</div>
                <div style={{color:"silver",fontSize:"0.75em"}}>"Invest in what matters most"</div>
            </div>
        </div>
        <div style={{display:"flex",position:"absolute",top:"12%",width:"94%",left:"3%",justifyContent:"space-between",alignItems:"center"}}>
          <div style={{color:"white"}}>Cards</div>
          <div><Fab sx={{width:"30px",height:"25px",backgroundImage:"linear-gradient(to bottom, #8647FB,#B366FC)"}}><AddIcon style={{color:"white"}} /></Fab></div>
        </div>
        <div style={{position:"absolute",top:"20%",left:"5%",width:"90%",backgroundImage:"linear-gradient(to right, #F8D3B3,#A0C7AB,#3DB8A0)",borderRadius:"10px"}}>
          <div style={{display:"flex",flexDirection:"column",color:"white",padding:"20px",gap:"20px"}}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div style={{fontSize:"14px"}}>ADRBank</div>
              <BsBrilliance/>
            </div>
            <div>8763 2736 9873 0329</div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div>
                <div style={{fontSize:"14px"}}>Card Holder Name</div>
                <div style={{fontSize:"14px"}}>Zelensky</div>
              </div>
              <div>
                <div style={{fontSize:"14px"}}>Expiry Date</div>
                <div style={{fontSize:"14px"}}>10/28</div>
              </div>
              <div><RiMastercardLine/></div>
            </div>
          </div>
        </div>
        <div style={{position:"absolute",top:"53%",left:"3%",width:"94%",backgroundImage:"linear-gradient(to bottom, #8647FB,#B366FC)",borderRadius:"10px"}}>
          <div  style={{display:"flex",flexDirection:"column",color:"white",padding:"10px",gap:"5px"}}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div>Account balance</div>
              <div>Feb,2024</div>
            </div>
            <div>$ 50,000</div>
          </div>
        </div>
        <div  style={{position:"absolute",top:"70%",left:"3%",width:"94%"}}>
          <div style={{display:"flex",justifyContent:"space-between",color:"white"}}>
            <div style={{display:"flex",gap:"5px"}}>
            <div style={{ height: '30px', width: '35px',outline:"1px solid transparent",boxShadow:" 0 0 0 1px #8647FB, 0 0 0 1px #B366FC",borderRadius:"5px" }}><TrendingDownIcon style={{padding:"2px",paddingLeft:"5px"}}/></div>
              <div style={{display:"flex",flexDirection:"column"}}>
                <div style={{fontSize:"10px",color:"#B366FC"}}>Income</div>
                <div style={{fontSize:"14px"}}>$ 40,000</div>
              </div>
            </div>
            <div style={{display:"flex",gap:"5px"}}>
              <div style={{ height: '30px', width: '35px',outline:"1px solid transparent",boxShadow:" 0 0 0 1px #8647FB, 0 0 0 1px #B366FC",borderRadius:"5px" }}><TrendingUpIcon style={{padding:"2px",paddingLeft:"5px"}}/></div>
              <div style={{display:"flex",flexDirection:"column"}}>
                <div style={{fontSize:"10px",color:"#B366FC"}}>Expense</div>
                <div style={{fontSize:"14px"}}>$ 20,000</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{width:"94%",position:"absolute",left:"3%",height:"1px",top:"78%",backgroundImage:"linear-gradient(to bottom, #8647FB,#B366FC)"}}></div>
        <div style={{position:"absolute",width:"94%",left:"3%",top:"80%"}}>
          <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div style={{color:"white",fontSize:"14px"}}>Today's expense</div>
              <div style={{color:"#B366FC",fontSize:"10px"}}>View all</div>
            </div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div style={{display:"flex",backgroundColor:"#8647FB",padding:"10px"}}>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{color:"white"}}><MdFlight/>Travel</div>
                  <div style={{display:"flex",flexDirection:"column"}}>
                    <div style={{color:"white",fontSize:"10px"}}>Flight ticket</div>
                    <div style={{color:"white",fontSize:"10px"}}>Bus fare</div>
                  </div>
                </div>
                <div><Gauge  sx={{[`& .${gaugeClasses.valueArc}`]: {fill: 'white'}}} height={60} width={60} value={28}/></div>
              </div>
              <div style={{display:"flex",backgroundColor:"#EA5FFF",padding:"10px"}}>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{color:"white"}}><FaBasketShopping/>Grocery</div>
                  <div style={{display:"flex",flexDirection:"column"}}>
                    <div style={{color:"white",fontSize:"10px"}}>Rice bag</div>
                    <div style={{color:"white",fontSize:"10px"}}>Fruits</div>
                  </div>
                </div>
                <Gauge  sx={{[`& .${gaugeClasses.valueArc}`]: {fill: 'black'}}} height={60} width={60} value={40}/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Dashboard