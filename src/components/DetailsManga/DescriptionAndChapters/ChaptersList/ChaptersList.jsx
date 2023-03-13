import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ChapterComponent from './ChapterComponent/ChapterComponent'
import './ChaptersList.css'
import { useSelector, useDispatch } from 'react-redux';
import eventsActions from '../../../../store/Events/actions';
const { read_chapters } = eventsActions;


export default function ChaptersList() {
  let { id, page } = useParams();

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(read_chapters({ id: id, page: page }))
  }, []);

  let chapters = useSelector(store => store.events.chapters)

  let manga = useSelector(store => store.events.manga)

  return (
    <div className='chapters-list'>
      {(chapters.map((chapter) => (
        <ChapterComponent key={chapter._id} title={chapter.title} order={chapter.order} cover_photo={manga.cover_photo} _id={chapter._id} />
      )))}
    </div>
  )
}
