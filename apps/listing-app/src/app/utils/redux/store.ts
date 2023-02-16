import { configureStore } from '@reduxjs/toolkit'
import listingReducer from './reducers/listing.reducer'
const store = configureStore({
  reducer: {
    listings: listingReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
