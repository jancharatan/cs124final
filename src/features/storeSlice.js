import { createSlice } from '@reduxjs/toolkit'

export const storeSlice = createSlice({
  name: 'store',
  initialState: {
    category: 'All Items',
    checkoutItem: {
      name: "Nintendo Switch",
      options: {
        "Rental Period": "1 Month",
        "Extra Controllers": 0,
        "Color": "Grey"
      },
      price: 44
    }
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setCheckoutItem: (state, action) => {
      state.checkoutItem = action.payload;
    }
  },
})

export const { setCategory, setCheckoutItem } = storeSlice.actions

export default storeSlice.reducer