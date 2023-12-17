import './App.css'
import Login from './components/Login/Login'
import Home from './components/Home/Home';
 import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import PrivateRoutes from '../src/utils/PrivateRoutes';

function App() {

  return (
    <>
     
     <BrowserRouter>
      <Routes>
    
      <Route path="/" element={<Login />} />
      <Route element={<PrivateRoutes />}>
      <Route path="/home"  element={<Home />} />  
      </Route>
      
      {/* <Route
      path="/home"
      element={
    <PrivateRoutes>
      <Home />
    </PrivateRoutes>
  }
/>  */}

      </Routes>
    
    
      </BrowserRouter>
      

    </>
  )
}

export default App

