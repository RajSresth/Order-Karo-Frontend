import { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { setCity } from '../redux/userSlice';
import axios from "axios";


const useGetCity = () => {
  const dispatch = useDispatch();
//   const userData = useSelector((state) => state.user.userData);

  useEffect(()=> {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const apiKey = import.meta.env.VITE_GEOAPIFY_APIKEY;

            const {data} = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${apiKey}`);
            
            const {address_line1,state,country} = data?.results[0];
            dispatch(setCity(address_line1 + " " +state));
        })
  }, [])
}

export default useGetCity;