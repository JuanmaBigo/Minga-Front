import React, {useRef, useState, useEffect} from 'react'
import ChapterComponent from './ChapterComponent/ChapterComponent'
import './ChaptersList.css'


export default function ChaptersList(props) {
  let urlChapters = props.urlChapters;
  


  return (
    <div className='chapters-list'>
      <ChapterComponent/>
      <ChapterComponent/>
      <ChapterComponent/>
      <ChapterComponent/>
      <ChapterComponent/>

    </div>
  )
}
