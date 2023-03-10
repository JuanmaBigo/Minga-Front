import React,{useRef,useState,useEffect} from 'react'
import './manga.css'
import searchImg from '../../assets/img/Search.png'
import CardsManga from '../CardsManga/CardsManga'
import ChecksManga from '../ChecksManga/ChecksManga'
import TypeManga from '../TypeManga/TypeManga'
import { useSelector,useDispatch } from 'react-redux'
import textAction from '../../store/search/actions'
import eventActions from '../../store/Events/actions'
const {captureText} = textAction
const {read_events} = eventActions

export default function Manga() {
    const title = useRef("")
    const dispatch = useDispatch()
    let category = useRef()
    const [reload,setReload] = useState(false)
    
    let mangas = useSelector(store => store.events.events)

    useEffect(
        () => {
           
            if (!mangas.length){
                dispatch(read_events({inputText:title.current.value}))
            }
            
        },
        [reload,title]
    )

    function handleChange(){
        setReload(!reload)
        dispatch(captureText({inputText: title.current.value}))
    }

    let defaultText = useSelector(store => store.text.text)
    
    
  return (
    <div className='manga'>
        <div className='search-manga'>
            <h2 className='name-page'>Manga</h2>
            <div className='cont-searh-manga'>
                <img className='img-search' src={searchImg} alt="search" />
                <form className='form-search' >
                    <input ref={title} defaultValue={defaultText} className='input-search' type="text" name="title" id="title" placeholder='Find your manga here' onChange={handleChange}/>
                </form>
            </div>
        </div>
        <div className='card-manga'>
            <div className='cont-checks'>
                <TypeManga/>
                <ChecksManga parentref={category}/>
            </div>
            <div className='cont-cards'>
                {mangas.map((manga) => (
                    <CardsManga key={manga.title} title_={manga.title}  category_={manga.category_id} photo={manga.cover_photo}/>
                ))}   
            </div>
            <div className='page-manga'>
                <button className='btn-prev'>Prev</button>
                <button className='btn-next'>Next</button>
            </div>
        </div>
    </div>
  )
}
