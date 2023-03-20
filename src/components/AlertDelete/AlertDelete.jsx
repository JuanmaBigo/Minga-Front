import React from 'react'
import './alertDelete.css'

export default function AlertDelete({ onYes, onNo, text }) {
  return (
    <div className='alertSave'>
        <div className= 'alert'>
            <h2 className='text-alert'>{text}</h2>
            <div className='cont-btn-delet'>
                <button className='btn-alertSave border-btn' onClick={onYes}>Yes, im sure</button>
                <button className='btn-alertSave' onClick={onNo}>No</button>
            </div>
        </div>
    </div>
  )
}
