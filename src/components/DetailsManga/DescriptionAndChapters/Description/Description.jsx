import React, {useEffect, useState} from 'react'
import './Description.css'
import { useSelector } from 'react-redux';


export default function Description() {

  let description = useSelector(store => store.events.manga.description)

  return (
    <div className='description-of-manga'>{description}</div>
  )
}
