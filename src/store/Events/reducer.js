import { createReducer } from "@reduxjs/toolkit";
import eventsActions from './actions'

const {read_events} = eventsActions

const initialState ={
    events: []
}

const reducer = createReducer(
    initialState,
    (builder) => builder
    .addCase(
        read_events.fulfilled,
        (state,actions)=>{
            let newState = {
                ...state,
                events: actions.payload.events
            }
            return newState
        }
    )
)

export default reducer