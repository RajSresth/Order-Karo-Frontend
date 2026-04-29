import React from 'react'
import Nav from '../components/Nav'
import UserDashboard from "../components/UserDashboard";
import AdminDashboard from "../components/AdminDashboard";
import RiderDashboard from "../components/RiderDashboard";
import { useSelector } from 'react-redux';

const Home = () => {
    const userData = useSelector((state) => state.user.userData);
    console.log("userData:",userData);
  return (
    <div className="w-full min-h-screen ">
        {userData?.role === "user" && <UserDashboard/>}
        {userData?.role === "admin" && <AdminDashboard/>}
        {userData?.role === "rider" && <RiderDashboard/>}
    </div>
  )
}

export default Home