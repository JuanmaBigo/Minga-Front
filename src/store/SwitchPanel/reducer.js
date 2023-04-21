import { createReducer } from "@reduxjs/toolkit";
import suiche from "./actions";

const { switchPanel } = suiche

const initialState = {
    state: false,
    id: ''
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            switchPanel,
            ( state, actions ) => {
                let newState = {
                    ...state,
                    state: actions.payload.state,
                    id: actions.payload.id
                }
                return newState
            }
        )
)

export default reducer