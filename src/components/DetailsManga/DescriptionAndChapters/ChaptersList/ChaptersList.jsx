import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router'
import ChapterComponent from './ChapterComponent/ChapterComponent'
import './ChaptersList.css'
import { useSelector, useDispatch } from 'react-redux';
import eventsActions from '../../../../store/Events/actions';
const { read_chapters } = eventsActions;


export default function ChaptersList() {
  let { id, page } = useParams();

  let dispatch = useDispatch()

  let chapters = useSelector(store => store.events.chapters)
  let manga = useSelector(store => store.events.manga)
  let count = useSelector(store => store.events.count)
  
  

  // BOTONES DE PAGINADO
  let navigate = useNavigate()

  function handleClickPrev() {
    if (page > 1) {
      page--
      navigate(`/manga/${id}/${page}`)
      dispatch(read_chapters({ id: id, page: page }))
    }
  }
  function handleClickNext() {
    if(chapters[3]){
      if (count !== chapters[3].order) {
        page++
        dispatch(read_chapters({ id: id, page: page }))
        navigate(`/manga/${id}/${page}`)
      }
    }
  }

  let displayPagination = 'button-pagination'
  if (count<5){
    displayPagination = 'button-pagination displayPagination'
  }

  return (
    <div className='chapters-list'>
      {(chapters.map((chapter) => (
        <ChapterComponent key={chapter._id} title={chapter.title} order={chapter.order} cover_photo={manga.cover_photo} _id={chapter._id} />
      )))}

      <div className='pagination-buttons-details'>
        <div className={displayPagination} onClick={handleClickPrev} style={{ userSelect: "none" }}>{`<`}</div>
        <div className={displayPagination} onClick={handleClickNext} style={{ userSelect: "none" }}>{`>`}</div>
      </div>

    </div>
  )
}
