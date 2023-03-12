import React from 'react'
import './noCard.css'
import { useSelector } from 'react-redux' 

export default function NoCard() {

    let text = useSelector(store => store.text.text)

  return (
    <div className='nocard'>
        <p className='textnocard'>No matches in the Search "{text}"</p>
    </div>
  )
}
