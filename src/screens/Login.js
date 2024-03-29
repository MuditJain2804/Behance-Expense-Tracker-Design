import React, { useState } from 'react'
import { TbSquareRoundedChevronLeft } from "react-icons/tb";
import { Box, Button, Checkbox, IconButton, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  function handleTogglePasswordVisibility(){
    setShowPassword(!showPassword)
  }
  function backHandler(){
    navigate('/onboarding')
  }
  function submitHandler(event){
    event.preventDefault()
    navigate('/home')
  }
  return (
    <div style={{backgroundColor:"black",height:"100vh",width:"100%",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"5%",left:"3%"}}><TbSquareRoundedChevronLeft size="8%" style={{color:"white"}} onClick={backHandler}/></div>
        <div style={{color:"white",position:"absolute",top:"15%",left:"3%",fontSize:"20px",fontWeight:"500"}}>Login</div>
        <Box component='form' onSubmit={submitHandler}>
        <div style={{display:"flex",flexDirection:"column",position:"absolute",top:"22%",left:"3%",width:"94%",height:"100%"}}>
          <TextField required inputProps={{style : {color:"white"}}} placeholder='Email address or User name' style={{border:"1px solid white",marginBottom:"1em"}}></TextField>
          <TextField required
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
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <div style={{display:"flex"}}>
              <Checkbox edge='start' size='small' style={{color:"white"}}/>
              <div style={{color:"white",paddingTop:"5%"}}>Remember me </div>
            </div>
            <div style={{color:"#B366FC",marginTop:"0.5em"}}>Forgot password ?</div>
          </div>
        </div>
        <Button type='submit' variant='contained' style={{position:"absolute",top:"65%",left:"3%",width:"94%",backgroundImage:"linear-gradient(to bottom, #8647FB,#B366FC)"}}>Login</Button>
        <div style={{position:"absolute",top:"80%",width:"94%",left:"3%",color:"white",display:"flex",justifyContent:"center"}}>New user?&nbsp;<span style={{color:"#B366FC"}}>Create</span></div>
        </Box>
    </div>
  )
}

export default Login