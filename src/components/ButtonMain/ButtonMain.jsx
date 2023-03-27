import React from 'react'
import './ButtonMain.css'
import { Link as Anchor } from 'react-router-dom'

export default function ButtonMain(props) {
    return (
        <Anchor to='/mangas/:page' className={props.class + ' btn'}>{props.text}</Anchor>
    )
}
