import { configureStore } from "@reduxjs/toolkit";
import textReducer from './search/reducer'
import eventReducer from './Events/reducer'
import checkReducer from './checks/reducer'
import alertReducer from './Alert/reducer'

export const store = configureStore({
    reducer:{
        text: textReducer,
        events: eventReducer,
        checks: checkReducer, 
        alert: alertReducer
    }
})