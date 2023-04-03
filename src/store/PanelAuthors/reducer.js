import { createReducer } from "@reduxjs/toolkit";
import getAuthors from "./actions";

const { panelAuthors } = getAuthors

const initialState = {
    authors: []
}

const reducer = createReducer(
    initialState,
    (builder) => builder
    .addCase(
        panelAuthors.fulfilled,
        (state,actions) => {
            let newState = {
                ...state,
                authors: actions.payload.authors
            }
            return newState
        }
    )
)

export default reducer