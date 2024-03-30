import React, { useState } from 'react'
import Expense from '../screens/Expense'
import Analysis from '../screens/Analysis'
import Transaction from '../screens/Transaction'
import { RiHome4Line } from "react-icons/ri";
import { GrAnalytics } from "react-icons/gr";
import { VscGraph } from "react-icons/vsc";
import { GrTransaction } from "react-icons/gr";
import { AppBar, BottomNavigation, BottomNavigationAction, Box, Button, IconButton, List, ListItem, ListItemButton, Menu, MenuItem, Paper, Toolbar } from '@mui/material'
import Dashboard from '../screens/Dashboard'

const Navbar = () => {
    const [activeComponent,setActiveComponent] = useState('Home')
    const components = {
        'Home' : <Dashboard/>,
        'Expense' : <Expense/>,
        'Analysis' : <Analysis/>,
        'Transaction' : <Transaction/>
    }
    function handleChange(event,newValue){
        setActiveComponent(newValue)
    }
  return (
    <div >
        <Paper sx={{position:"fixed", bottom: 0, left: 0, right: 0 }}>
            <BottomNavigation value={activeComponent} onChange={handleChange} style={{width:"100vw",backgroundColor:"black",display:"flex",justifyContent:"space-between",}} >
                <BottomNavigationAction value='Home'  style={{color:"white"}}  icon={<RiHome4Line />} />
                <BottomNavigationAction value='Expense' style={{color:"white"}}  icon={<GrAnalytics />} />
                <BottomNavigationAction value='Analysis' style={{color:"white"}}  icon={<VscGraph />} />
                <BottomNavigationAction value='Transaction' style={{color:"white"}}  icon={<GrTransaction />} />
            </BottomNavigation>
        </Paper>
        
        <div>
            {components[activeComponent]}    
        </div>
    </div>
  )
}

export default Navbar