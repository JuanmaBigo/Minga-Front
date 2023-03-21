import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import mangasActions from '../../../../store/Mangas/actions';
const { get_chapter, read_chapters } = mangasActions;


export default function SelectChapter(props) {

    // let dispatch = useDispatch()
    // let [chapters, setChapters] = useState([])

    // useEffect(() => {
    //     dispatch(read_chapters({ id: manga_id, limit: 0 }))
    // }, []);

    // setChapters(chapters)

    return (
        <select name={props.name} ref={props.parentref} className='select-chapter'>
            {/* <option value=''>Insert category</option>
            {
                chapters.map((cat) => (
                    <option id={cat._id} key={cat.name} value={cat._id}> {cat.name} </option>
                ))
            } */}
        </select>

    )
}



