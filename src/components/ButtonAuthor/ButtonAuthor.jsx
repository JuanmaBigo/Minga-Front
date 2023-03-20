import React from 'react'
import './buttonAuthor.css'

export default function ButtonAuthor(props) {
  return (
    <div>
        <button className={`btn-send-author ${props.class}`} onClick={props.onClick} >{props.value}</button>
    </div>
  )
}
