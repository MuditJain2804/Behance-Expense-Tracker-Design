import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Expense from './Expense'
import Analysis from './Analysis'
import Transaction from './Transaction'
import Dashboard from './Dashboard';
import AddTransaction from './AddTransaction'
import TransactionHistory from './TransactionHistory'
import Category from './Category';
import Details from './Details';

const Home = () => {
  const [activeComponent,setActiveComponent] = useState('Home')
  const components = {
    'Home' : <Dashboard/>,
    'Expense' : <Expense setActiveComponent={setActiveComponent}/>,
    'Analysis' : <Analysis setActiveComponent={setActiveComponent}/>,
    'Transaction' : <Transaction setActiveComponent={setActiveComponent}/>,
    'AddTransaction' : <AddTransaction setActiveComponent={setActiveComponent}/>,
    'TransactionHistory' : <TransactionHistory setActiveComponent={setActiveComponent}/>,
    'Category' : <Category setActiveComponent={setActiveComponent}/>,
    'Details' : <Details setActiveComponent={setActiveComponent}/>
  }
  return (
    <div style={{ position: 'relative', minHeight: '100vh',width:"100vw", backgroundColor: '#1D1D1D',overflow:"hidden" }}>
      <div style={{ paddingBottom: '70px',paddingRight:"15px" }}>
        {components[activeComponent]}
      </div>
      <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <Navbar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
      </div>
    </div>
  )
}
export default Home