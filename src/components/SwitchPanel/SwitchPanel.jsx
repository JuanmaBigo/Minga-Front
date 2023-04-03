import React, { useRef } from 'react'
import './switchpanel.css'

export default function SwitchPanel(props) {

    let suiche = useRef()

    
    return (
        <label class="switch">
            <input type="checkbox" ref={suiche} />
            <span class="slider round"></span>
        </label>
    )
}

