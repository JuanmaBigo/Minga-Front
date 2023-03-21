import React from 'react'
import FormEditChapter from './FormEditChapter/FormEditChapter'
import Chapter from './Chapter/Chapter'
import './EditChapter.css'

export default function EditChapter() {
  return (
    <div className='edit-chapter-page'>
      <FormEditChapter/>
      <Chapter/>
    </div>
  )
}
