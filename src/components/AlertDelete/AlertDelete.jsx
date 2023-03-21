import React from 'react'
import './alertDelete.css'

export default function AlertDelete({ onYes, onNo, text }) {
  return (
    <div className='alertSave'>
        <div className= 'alert'>
            <h2 className='text-alert'>{text}</h2>
            <div className='cont-btn-delet'>
<<<<<<< HEAD
                <button className='btn-alertSave border-btn' onClick={onYes}>Yes, i'm sure</button>
=======
                <button className='btn-alertSave border-btn' onClick={onYes}>Yes, I'm sure</button>
>>>>>>> f0124b49839cc39e00aa5ba94aaffa0a908526d9
                <button className='btn-alertSave' onClick={onNo}>No</button>
            </div>
        </div>
    </div>
  )
}
