import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router'
import ChapterComponent from './ChapterComponent/ChapterComponent'
import './ChaptersList.css'
import { useSelector, useDispatch } from 'react-redux';
import mangasActions from '../../../../store/Mangas/actions';
const { read_chapters } = mangasActions;


export default function ChaptersList() {
  let { id, page } = useParams();

  let dispatch = useDispatch()

  let chapters = useSelector(store => store.mangas.chapters)
  let count = useSelector(store => store.mangas.count)
  
  

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
        <ChapterComponent key={chapter.title} title={chapter.title} order={chapter.order} cover_photo={chapter.cover_photo} _id={chapter._id} />
      )))}

      <div className='pagination-buttons-details'>
        <div className={displayPagination} onClick={handleClickPrev} style={{ userSelect: "none" }}>{`<`}</div>
        <div className={displayPagination} onClick={handleClickNext} style={{ userSelect: "none" }}>{`>`}</div>
      </div>

    </div>
  )
}
