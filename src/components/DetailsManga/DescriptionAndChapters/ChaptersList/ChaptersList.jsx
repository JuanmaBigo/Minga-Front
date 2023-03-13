import React, { useRef, useState, useEffect } from 'react'
import ChapterComponent from './ChapterComponent/ChapterComponent'
import './ChaptersList.css'
import { useSelector } from 'react-redux';


export default function ChaptersList() {

  let chapters = useSelector(store => store.events.chapters)
  console.log(chapters)

  return (
    <div className='chapters-list'>
      {/* {(chapters.map((chapter) => (
        <ChapterComponent key={chapter.order} title={chapter.title} order={chapter.order}/>
      )))} */}
    </div>
  )
}
