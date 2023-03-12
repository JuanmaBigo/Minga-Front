import { createAction } from "@reduxjs/toolkit";

let captureChecks = createAction(
    'captureChecks',
    ({inputCheck}) =>{

        return{
            payload:{checks: inputCheck}
        }
        
    }
)

const actions = {captureChecks}

export default actions