import React from 'react'
import './alertSave.css'

export default function AlertSave({ onAccept,text }) {
  return (
    <div className='alertSave'>
        <div className= 'alert'>
            <h2 className='text-alert'>{text}</h2>
            <button className='btn-alertSave' onClick={onAccept}>Acept</button>
        </div>
    </div>
  )
}
