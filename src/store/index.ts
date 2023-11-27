import {configureStore} from "@reduxjs/toolkit";
import {themeSlice} from "./rootSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer : {
        themeSlice
    },
    middleware : (getDefaultMiddleware)=>{
        return getDefaultMiddleware();
    }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useTypedDispatch:()=> AppDispatch  = useDispatch
export const useTypedSelector :TypedUseSelectorHook<RootState> = useSelector