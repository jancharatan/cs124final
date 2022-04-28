import { configureStore } from '@reduxjs/toolkit'
import storeSlice from '../features/storeSlice'

export default configureStore({
  reducer: {
      store: storeSlice,
  },
})
