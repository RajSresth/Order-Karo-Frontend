import React from 'react'
import {Routes,Route, Navigate} from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import useGetCurrentUser from './hooks/useGetCurrentUser';
import { useSelector } from 'react-redux';
import Home from './pages/Home';

const App = () => {
  useGetCurrentUser();
  const userData = useSelector((state) => state.user.userData);
  const loading = useSelector((state) => state.user.loading); 

 
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-orange-600 text-xl font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <Routes>
      <Route path='/' element={userData ? <Home/> : <Navigate to={"/login"} />} />
      <Route path='/signup' element={userData ? <Navigate to={"/"} /> : <Signup/>} />
      <Route path='/login' element={userData ? <Navigate to={"/"} /> : <Login/>} />
      <Route path='/forget-password' element={userData ? <Navigate to={"/"} /> : <ForgetPassword/>} />
    </Routes>
  )
}

export default App