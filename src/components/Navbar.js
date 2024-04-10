import React, { useState } from 'react'
import { RiHome4Line } from "react-icons/ri";
import { GrAnalytics } from "react-icons/gr";
import { VscGraph } from "react-icons/vsc";
import { GrTransaction } from "react-icons/gr";
import { BottomNavigation, BottomNavigationAction,Paper } from '@mui/material'


const Navbar = ({activeComponent,setActiveComponent}) => {
    function handleChange(event,newValue){
        setActiveComponent(newValue)
    }
  return (
    <div >
        <Paper >
            <BottomNavigation value={activeComponent} onChange={handleChange} style={{width:"100vw",backgroundColor:"#1D1D1D",display:"flex",justifyContent:"space-between",}} >
                <BottomNavigationAction value='Home'  style={{color:"white" }}  icon={<RiHome4Line size={18} style={{border: activeComponent === 'Home' ? '2px solid #1D1D1D' : 'none',backgroundImage: activeComponent === 'Home' && "linear-gradient(to bottom, #8647FB,#B366FC)", borderRadius: '50%',padding:"4px"}} />} />
                <BottomNavigationAction value='Expense' style={{color:"white"}}  icon={<GrAnalytics size={18} style={{border: activeComponent === 'Expense' ? '2px solid #1D1D1D' : 'none',backgroundImage: activeComponent === 'Expense' && "linear-gradient(to bottom, #8647FB,#B366FC)", borderRadius: '50%',padding:"4px"}} />} />
                <BottomNavigationAction value='Analysis' style={{color:"white"}}  icon={<VscGraph size={18} style={{border: activeComponent === 'Analysis' ? '2px solid #1D1D1D' : 'none',backgroundImage: activeComponent === 'Analysis' && "linear-gradient(to bottom, #8647FB,#B366FC)", borderRadius: '50%',padding:"4px"}} />} />
                <BottomNavigationAction value='Transaction' style={{color:"white"}}  icon={<GrTransaction size={18} style={{border: activeComponent === 'Transaction' ? '2px solid #1D1D1D' : 'none',backgroundImage: activeComponent === 'Transaction' && "linear-gradient(to bottom, #8647FB,#B366FC)", borderRadius: '50%',padding:"4px"}} />} />
            </BottomNavigation>
        </Paper>
        
    </div>
  )
}

export default Navbar