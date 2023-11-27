import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TState, User} from "../types";

const initialState: TState = {
    currentTheme : 'dark',
    searchResult : null,
    validResult : null
}
const rootSlice = createSlice({
    name : 'themes',
    initialState,
    reducers : {
        setTheme(state, action){
            state.currentTheme = action.payload
        },
        setSearchResult(state, action: PayloadAction<User | null>){
            state.searchResult = action.payload
        },
        setValidResult(state, action){
            state.validResult = action.payload
        }
    }

})
export const {setTheme, setValidResult, setSearchResult} = rootSlice.actions
export const themeSlice = rootSlice.reducer
