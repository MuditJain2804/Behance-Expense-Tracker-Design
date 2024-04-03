import React, { useState } from 'react'
import { TbSquareRoundedChevronLeft } from "react-icons/tb";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Fab, FormControl, MenuItem, Select } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import { ArrowDropDown } from '@mui/icons-material';
import { BarChart } from '@mui/x-charts';

const Analysis = ({setActiveComponent}) => {
  const month = ['January','February','March','April','May','June','July','August','September','October','November','December']
  const [selectedMonth, setSelectedMonth] = useState('February')
  const [quater, setQuater] = useState('January-March')
  function handleChange(event){
    setSelectedMonth(event.target.value)
  }
  function changeHandler(event){
    setQuater(event.target.value)
  }
  function backhandler(){
    setActiveComponent('Home')
  }
  const dataset = [
    {
      Income : '250',
      Expense : '200',
      Month : 'January'
    },
    {
      Income : '225',
      Expense : '100',
      Month : 'February'
    },
    {
      Income : '125',
      Expense : '75',
      Month : 'March'
    },
  ]
  const chartSetting = {
    height: 200,

  };
  return (
    <div style={{backgroundColor:"#1D1D1D",position:"relative",height:"94vh",width:"100%",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"5%",left:"3%",width:"94%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div><TbSquareRoundedChevronLeft onClick={backhandler} size="20" style={{color:"white"}}/></div>
        <div style={{color:"white",fontSize:"20px",fontWeight:"bold"}}>Analysis</div>
        <div><NotificationsNoneOutlinedIcon style={{color:"white"}}/></div>
      </div>
      <div style={{position:"absolute",top:"12%",left:"3%",width:"94%",display:"flex",flexDirection:"column",gap:"1em"}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{color:"#BDEDFB"}}>Total Income</div>
          <div><Fab sx={{width:"30px",height:"25px",backgroundImage:"linear-gradient(to bottom, #8647FB,#B366FC)"}}><AddIcon style={{color:"white"}} /></Fab></div>
        </div>
        <div>
          <FormControl size='small' sx={{width:"40%"}}>
            <Select sx={{border:"1px solid #B366FC",color:"white"}} onChange={handleChange} value={selectedMonth} IconComponent={() => <ArrowDropDown sx={{color:"#B366FC"}}/>}>
              {month.map((text,index) => 
              <MenuItem  value={text} >{text}</MenuItem>
              )}
            </Select>
          </FormControl>
        </div>
        <div style={{color:"white"}}>$ 5,000</div>
        <div style={{height:"1px",backgroundColor:"#434343"}}></div>
      </div>
      <div style={{position:"absolute",top:"40%",left:"3%",width:"94%",display:"flex",flexDirection:"column",gap:"1em"}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{color:"#BDEDFB"}}>Average Expense</div>
          <div><Fab sx={{width:"30px",height:"25px",backgroundImage:"linear-gradient(to bottom, #8647FB,#B366FC)"}}><AddIcon style={{color:"white"}} /></Fab></div>
        </div>
        <div>
          <FormControl size='small' sx={{width:"40%"}}>
            <Select sx={{border:"1px solid #B366FC",color:"white"}} onChange={handleChange} value={selectedMonth} IconComponent={() => <ArrowDropDown sx={{color:"#B366FC"}}/>}>
              {month.map((text,index) => 
              <MenuItem  value={text} >{text}</MenuItem>
              )}
            </Select>
          </FormControl>
        </div>
        <div style={{color:"white"}}>$ 3,000</div>
        <div style={{height:"1px",backgroundColor:"#434343"}}></div>
      </div>
      <div style={{position:"absolute",top:"65%",left:"3%",width:"94%",display:"flex",flexDirection:"column"}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{color:"#BDEDFB"}}>Spending limit</div>
          <div>
            <FormControl size='small' >
              <Select sx={{border:"1px solid #B366FC",color:"white"}} onChange={changeHandler} value={quater} IconComponent={() => <ArrowDropDown sx={{color:"#B366FC"}}/>}> 
                <MenuItem value='January-March' >January-March</MenuItem>
                <MenuItem value='April-June' >April-June</MenuItem>
                <MenuItem value='July-September' >July-September</MenuItem>
                <MenuItem value='October-December' >October-December</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div >
          <BarChart dataset={dataset}  xAxis={[{ scaleType: 'band', dataKey: 'Month', categoryGapRatio: 0.7, barGapRatio: 0.4 }]} 
          yAxis={[{ tickLabelStyle:{fill:"white"} }]} 
            series={[
              { dataKey: 'Income', label: 'Income',color:"#8647FB"},
              { dataKey: 'Expense', label: 'Expense',color:"#BDEDFB"},
            ]}
            {...chartSetting}
            grid={{horizontal:true }}
            slotProps={{
              legend: {
                position: { vertical: 'top', horizontal: 'left' },
                labelStyle: {
                fontSize: 14,
                fill: 'white',
                },
              },
            }}
            bottomAxis={{disableTicks:true}}
          >
          </BarChart>
        </div>
      </div>
    </div>
  )
}

export default Analysis