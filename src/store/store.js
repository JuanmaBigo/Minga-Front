import { configureStore } from "@reduxjs/toolkit";
import textReducer from './search/reducer'
import mangaReducer from './Mangas/reducer'
import checkReducer from './checks/reducer'
import alertReducer from './Alert/reducer'
import authorReducer from './AuthorProfile/reducer'

export const store = configureStore({
    reducer:{
        text: textReducer,
        mangas: mangaReducer,
        checks: checkReducer, 
        alert: alertReducer,
        author:authorReducer
    }
})