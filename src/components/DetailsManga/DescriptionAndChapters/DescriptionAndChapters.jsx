import React, { useState, useRef, useEffect } from 'react'
import './DescriptionAndChapters.css'
import './BtnDescriptionChapters.css'
import Description from './Description/Description'
import ChaptersList from './ChaptersList/ChaptersList'
import { useSelector, useDispatch } from 'react-redux';
import eventsActions from '../../../store/checks/actions';
const { captureState } = eventsActions;


export default function DescriptionAndChapters() {

  let inputRef = useRef();
  
  let dispatch = useDispatch()
  
  let isChecked = useSelector(store => store.checks.checked)
  
  function handleChange(event) {
    const checked = event.target.checked;
    dispatch(captureState({ buttonState: checked }))
  }
  

  return (
    <div className='description-and-chapters'>
      <div className="btn-container">
        <label className="switch btn-color-mode-switch">
          <input type="checkbox" className="input-details" ref={inputRef} name="color_mode" id="color_mode" value="1"
            defaultChecked={isChecked} onChange={handleChange} style={{ userSelect: "none" }}/>
          <label htmlFor="color_mode" data-on="Chapters" data-off="Manga" className="btn-color-mode-switch-inner"></label>
        </label>
      </div>
      {!isChecked ? <Description /> : <ChaptersList />}

    
    </div>
  )
}
