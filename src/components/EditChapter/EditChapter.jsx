import React from 'react'
import FormEditChapter from './FormEditChapter/FormEditChapter'
import Chapter from './Chapter/Chapter'
import './EditChapter.css'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

export default function EditChapter() {
  return (
    <div className='edit-chapter-page'>
      <ScrollToTop />
      <FormEditChapter />
      <Chapter />
    </div>
  )
}
