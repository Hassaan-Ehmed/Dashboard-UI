import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import dashboardSlice from './slices/dashboard/index'

export const store = configureStore({

    reducer:{
        dashboard:dashboardSlice
    }
})


export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch