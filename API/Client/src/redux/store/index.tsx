import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import rootReducer from "../reducers"

const store = configureStore({
  reducer: rootReducer,
  middleware: [ thunk ]
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type ActionDispatch = typeof store.dispatch

export default store