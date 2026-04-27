import { useEffect } from "react";
import axios from "axios";
import { serverUrl } from "../constants/constant";

const useGetCurrentUser = () => {
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const { data } = await axios.get(`${serverUrl}/api/user/current`, {withCredentials: true});
        console.log("data:", data);
      } catch (error) {
        console.log("Get Current user error", error.response.data);
      }
    };

    getCurrentUser();
  }, []);
};

export default useGetCurrentUser;
