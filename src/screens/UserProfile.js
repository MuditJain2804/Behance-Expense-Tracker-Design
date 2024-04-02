import React from 'react'
import { TbSquareRoundedChevronLeft } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import image from '../assets/1.jpg'
import { Avatar, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { PiBank } from "react-icons/pi";
import { PiLockKey } from "react-icons/pi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { PiCreditCard } from "react-icons/pi";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { PiInfo } from "react-icons/pi";
import { PiSignOut } from "react-icons/pi";

const UserProfile = () => {
    const navigate = useNavigate()
    function backHandler(){
        navigate('/home')
    }
    const list = ['Bank sync', 'Security', 'Document', 'Credit score', 'FAQ', 'Help center', 'Sign out' ]
    const icons = {
        'Bank sync':<PiBank />,
        'Security':<PiLockKey/>,
        'Document':<HiOutlineDocumentText/>, 
        'Credit score':<PiCreditCard/>, 
        'FAQ':<FaRegCircleQuestion/>, 
        'Help center':<PiInfo/>, 
        'Sign out':<PiSignOut/>
    }
  return (
    <div style={{backgroundColor:"black",position:"relative",height:"100vh",width:"100%"}}>
        <div style={{position:"absolute",top:"5%",left:"3%"}}><TbSquareRoundedChevronLeft size="8%" style={{color:"white"}} onClick={backHandler}/></div>
        <div style={{position:"absolute",top:"10%",display:"flex",flexDirection:"column",width:"100%"}}>
            <div style={{display:"flex",justifyContent:"center"}}><Avatar src={image} /></div>
            <div style={{color:"white",display:"flex",justifyContent:"center"}}>Zelensky</div>
        </div>
        <div style={{position:"absolute",top:"24%",left:"4%",width:"92%",height:"1px",backgroundImage:"linear-gradient(to bottom, #8647FB,#B366FC)"}}></div>
        <Box sx={{position:"absolute",top:"26%",left:"3%"}}>
            <List disablePadding >
                {list.map((text,index) => 
                    <ListItem>
                        <ListItemIcon style={{color:"#B366FC"}}>{icons[text]}</ListItemIcon>
                        <ListItemText style={{color:"white"}} primary={text}></ListItemText>
                    </ListItem>
                )}
            </List>
        </Box>
    </div>
  )
}

export default UserProfile