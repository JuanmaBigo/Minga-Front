import React,{useRef,useState,useEffect} from 'react'
import './manga.css'
import search from '../../assets/img/Search.png'
import CardsManga from '../CardsManga/CardsManga'
import ChecksManga from '../ChecksManga/ChecksManga'
import TypeManga from '../TypeManga/TypeManga'
import axios from 'axios'

export default function Manga() {
    let category = useRef()

    // console.log(category.current[1]);

    // let dataInputs = []
        

    //     Object.values(category.current).forEach(inputForm => {
    //         if(inputForm.name){
    //             dataInputs.push(inputForm)
    //         }
    //     })

        
    // console.log(dataInputs );

    let url = 'http://localhost:8080/api/mangas'

    let [ mangas, setCategories ] = useState([])
        useEffect(
            () => {
                axios.get(url)
                .then( response => setCategories( response.data.mangas ) )
                .catch(e => {
                console.log(e);
            })
            },
            [url]
        )

  return (
    <div className='manga'>
        <div className='search-manga'>
            <h2 className='name-page'>Manga</h2>
            <div className='cont-searh-manga'>
                <img className='img-search' src={search} alt="search" />
                <form className='form-search' >
                    <input className='input-search' type="text" name="title" id="title" placeholder='Find your manga here' />
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
