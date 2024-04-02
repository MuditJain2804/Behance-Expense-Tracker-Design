import { Route, Routes } from 'react-router-dom';
import Splash from './screens/Splash';
import Onboarding from './screens/Onboarding';
import Login from './screens/Login';
import Home from './screens/Home';
import UserProfile from './screens/UserProfile';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Splash/>}></Route>
      <Route path='/onboarding' element={<Onboarding/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/profile' element={<UserProfile/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
