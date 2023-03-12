import { createReducer } from "@reduxjs/toolkit";
import checkActions from './actions'
const {captureChecks} = checkActions

const initiateState= {
    checks: []
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
)

export default reducer