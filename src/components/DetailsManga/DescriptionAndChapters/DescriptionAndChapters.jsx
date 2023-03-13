import React, { useState, useRef } from 'react'
import './DescriptionAndChapters.css'
import './BtnDescriptionChapters.css'
import Description from './Description/Description'
import ChaptersList from './ChaptersList/ChaptersList'


export default function DescriptionAndChapters() {

  let inputRef = useRef(false);

  const [open, setOpen] = useState(false); 

  async function handleClick() {
    setOpen(inputRef.current.checked);
  }


  return (
    <div className='description-and-chapters'>
      <div className="btn-container">
        <label className="switch btn-color-mode-switch">
          <input type="checkbox" className="input-details" ref={inputRef} onClick={handleClick} name="color_mode" id="color_mode" value="1" />
          <label htmlFor="color_mode" data-on="Chapters" data-off="Manga" className="btn-color-mode-switch-inner"></label>
        </label>
      </div>
      {!open ? <Description/> : <ChaptersList/>}
      
      {/*!open ? '' : botones de paginacion */}
    </div>
  )
}
