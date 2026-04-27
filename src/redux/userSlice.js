import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: null,
    },
    reducers:{
        setUserData: (state,action) => {

        }
    }
})

export const {setUserData} = userSlice.actions;
export default userSlice.reducer;