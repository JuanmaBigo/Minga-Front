import { createReducer } from "@reduxjs/toolkit";
import eventsActions from './actions'

const {read_events, read_manga, read_chapters} = eventsActions

const initialState ={
    events: [],
    manga: [],
    chapters : [], 
    count: 0
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
    .addCase(
        read_manga.fulfilled,
        (state,actions)=>{
            let newState = {
                ...state,
                manga: actions.payload.manga
            }
            return newState
        }
    )
    .addCase(
        read_chapters.fulfilled,
        (state,actions)=>{
            let newState = {
                ...state,
                chapters: actions.payload.chapters,
                count: actions.payload.count
            }
            return newState
        }
    )
)

export default reducer