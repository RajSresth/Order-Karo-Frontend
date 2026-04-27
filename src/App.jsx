import React from 'react'
import {Routes,Route} from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import useGetCurrentUser from './hooks/useGetCurrentUser';

const App = () => {
  useGetCurrentUser();
  
  return (
   <Routes>
      <Route path='/'  />
      <Route path='signup' element={<Signup/>} />
      <Route path='login' element={<Login/>} />
      <Route path="forget-password" element={<ForgetPassword/>} />
   </Routes>
  )
}

export default App