import { createAction } from "@reduxjs/toolkit";

const switchPanel = createAction(
    'switchPanel',
    ({state,id}) => {
        return {
            payload: {
                state: state,
                id: id
            }
        }
    }
)

const suiche = { switchPanel }

export default suiche