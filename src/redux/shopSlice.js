import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    shopData: [],
  },
  reducers: {
    setShopData: (state, action) => {
      state.shopData = action.payload;
    },
    addShop: (state,action) => {
      state.shopData.push(action.payload)
    },
    removeShop: (state, action) => {
      state.shopData = state.shopData.filter(shop => shop._id !== action.payload);
    }
  },
});

export const { setShopData,addShop,removeShop } = shopSlice.actions;
export default shopSlice.reducer;
