import { createReducer } from "@reduxjs/toolkit";
import checkActions from './actions'
const {captureChecks, captureState} = checkActions

const initiateState= {
    checks: [],
    checkbox: []
}

const reducer = createReducer(
    initiateState,
    (builder) => builder
    .addCase(
        captureChecks,
        (state,action) => {
            let newState = {
                ...state,
                checks : action.payload.checks  
            }
            return newState
        }
    )
    .addCase(
        captureState,
        (state,action) => {
            let newState = {
                ...state,
                checkbox : action.payload.checkbox  
            }
            return newState
        }
    )
)



export default reducer