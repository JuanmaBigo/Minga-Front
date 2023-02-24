import React from 'react'
import './ButtonMain.css'

export default function ButtonMain(props) {
    return (
        <button className={props.class + ' btn'}>{props.text}</button>
    )
}
