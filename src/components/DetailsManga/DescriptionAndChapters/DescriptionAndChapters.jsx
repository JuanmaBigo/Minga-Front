import React, { useState, useRef, useEffect } from 'react'
import './DescriptionAndChapters.css'
import './BtnDescriptionChapters.css'
import Description from './Description/Description'
import ChaptersList from './ChaptersList/ChaptersList'
import { useSelector, useDispatch } from 'react-redux';
import eventsActions from '../../../store/checks/actions';
const { captureState } = eventsActions;


export default function DescriptionAndChapters() {


  let estachek = useSelector(store => store.checks.checkbox)


  let inputRef = useRef(false);



  const [checked, setChecked] = useState(false);


  let dispatch = useDispatch()

  function handleChange() {
    setChecked(!checked)
    dispatch(captureState({ buttonState: checked }))
  }



  return (
    <div className='description-and-chapters'>
      <div className="btn-container">
        <label className="switch btn-color-mode-switch">
          <input type="checkbox" className="input-details" ref={inputRef} name="color_mode" id="color_mode" value="1"
            defaultChecked={checked} onChange={handleChange} style={{ userSelect: "none" }}/>
          <label htmlFor="color_mode" data-on="Chapters" data-off="Manga" className="btn-color-mode-switch-inner"></label>
        </label>
      </div>
      {!checked ? <Description /> : <ChaptersList />}

    
    </div>
  )
}
