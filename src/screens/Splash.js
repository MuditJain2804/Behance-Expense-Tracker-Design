import React from 'react'
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CircleIcon from '@mui/icons-material/Circle';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
    const navigate = useNavigate();
    function clickHandler(){
        navigate('/onboarding')
    }
  return (
    <div style={{backgroundImage:"linear-gradient(to bottom, #8647FB,#B366FC)",height:"100vh",width:"100vw"}}>
        <div style={{display:"flex",height:"100vh",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <div onClick={clickHandler} style={{display:"flex",gap:"50%",justifyContent:"center"}}>
                <div style={{position:"relative"}}>
                    <CircleIcon fontSize='large' style={{position:"absolute"}}/>
                    <ShowChartIcon fontSize='small' style={{position:"absolute",top:"7",left:"7",color:"white"}}/>
                </div>
                <div style={{fontSize:"24px",fontWeight:"bold"}}>Spends</div>
            </div>
            <div style={{fontSize:"16px"}}>"Smart saving, brighter future."</div>
        </div>
        
    </div>
  )
}

export default Splash