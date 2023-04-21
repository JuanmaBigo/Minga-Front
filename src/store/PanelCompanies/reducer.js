import { createReducer } from "@reduxjs/toolkit";
import getCompanies from "./actions";

const { panelCompanies } = getCompanies

const initialState = {
    companies: []
}

const reducer = createReducer(
    initialState,
    (builder) => builder
    .addCase(
        panelCompanies.fulfilled,
        (state,actions) => {
            let newState = {
                ...state,
                companies: actions.payload.companies
            }
            return newState
        }
    )
)

export default reducer