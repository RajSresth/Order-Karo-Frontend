import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    shopData: null, // null = not fetched yet, [] = fetched but empty
  },
  reducers: {
    setShopData: (state, action) => {
      state.shopData = action.payload;
    },

    addShop: (state, action) => {
      state.shopData.push(action.payload);
    },

    removeShop: (state, action) => {
      state.shopData = state.shopData.filter(
        (shop) => shop._id !== action.payload,
      );
    },

    addItemToShop: (state, action) => {
      const { shopId, item } = action.payload;
      const shop = state.shopData.find((s) => s._id === shopId);
      if (shop) {
        shop.items.push(item);
      }
    },

    updateItemInShop: (state, action) => {
      const { shopId, updatedItem } = action.payload;
      const shop = state.shopData.find((s) => s._id === shopId);
      if (shop) {
        const index = shop.items.findIndex((i) => i._id === updatedItem._id);
        if (index !== -1) {
          shop.items[index] = updatedItem;
        }
      }
    },

    clearShopState: (state) => {
      state.shopData = null;
    },
  },
});

export const {
  setShopData,
  addShop,
  removeShop,
  addItemToShop,
  updateItemInShop,
  clearShopState,
} = shopSlice.actions;

export default shopSlice.reducer;
