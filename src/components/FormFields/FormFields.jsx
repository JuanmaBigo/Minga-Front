import React from 'react'
import './formFields.css'


export default function FormFields(props) {
  return (
    <fieldset>
        <legend>{props.legend}</legend>
        <input className='input-fieldset' type={props.type} id={props.id} name={props.name} required />
        <img src={props.src} alt={props.src} />
    </fieldset>
  )
}
