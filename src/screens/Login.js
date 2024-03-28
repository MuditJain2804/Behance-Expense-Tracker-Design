import React, { useState } from 'react'
import { TbSquareRoundedChevronLeft } from "react-icons/tb";
import { Box, Button, Checkbox, IconButton, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  function handleTogglePasswordVisibility(){
    setShowPassword(!showPassword)
  }
  return (
    <div style={{backgroundColor:"black",height:"100vh",width:"100%",position:"relative"}}>
        <div style={{position:"absolute",top:"5%",left:"3%"}}><TbSquareRoundedChevronLeft size="8%" style={{color:"white"}}/></div>
        <div style={{color:"white",position:"absolute",top:"15%",left:"3%",fontSize:"20px",fontWeight:"500"}}>Login</div>
        <Box component='form'>
        <div style={{display:"flex",flexDirection:"column",position:"absolute",top:"22%",left:"3%",width:"94%",height:"100%"}}>
          <TextField inputProps={{style : {color:"white"}}} placeholder='Email address or User name' style={{border:"1px solid white",marginBottom:"1em"}}></TextField>
          <TextField
            type={showPassword ? 'text' : 'password'} placeholder='Password'
            style={{border:"1px solid white"}} 
            inputProps={{style : {color:"white"}}}
            InputProps={{
              endAdornment:(
                <InputAdornment position='end'>
                  <IconButton style={{color:"#B366FC"}} onClick={handleTogglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOffOutlined/> : <VisibilityOutlined/>}
                  </IconButton>
                </InputAdornment>
              )
            }}>
          </TextField>
        </div>
            <div style={{display:"flex",position:"absolute",top:"43%"}}>
            <Checkbox style={{color:"white"}}/>
            <div style={{color:"white"}}>Remember me </div>
            </div>
            <div style={{position:"absolute",top:"43%",right:"3%",color:"#B366FC"}}>Forgot password ?</div>
            <Button variant='contained' style={{position:"absolute",top:"75%"}}>Login</Button>
        </Box>
    </div>
  )
}

export default Login