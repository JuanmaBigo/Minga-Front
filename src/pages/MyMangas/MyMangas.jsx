import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './mymangas.css'
import getmangas from '../../store/MyMangas/actions'
import CardsManga from '../../components/CardsManga/CardsManga'
import ChecksManga from '../../components/ChecksManga/ChecksManga'
import ModalDelete from '../../components/ModalDelete/ModalDelete'


export default function MyMangas() {
    
    let { my_mangas } = getmangas
    const dispatch = useDispatch()
    let token = localStorage.getItem('token')
    let deleteState = useSelector(store => store.showModalDelete.state)


    useEffect(
        () => {
            dispatch(my_mangas({token}))
        },
        [ deleteState ]
    )
    let mangas = useSelector(store => store.getmangas.mangas)
    let name = ''
    if (mangas[0]?.author_id.name || mangas[0]?.author_id.last_name){
        name = mangas[0].author_id.name
        if( mangas[0]?.author_id.last_name ){
            name += ' ' + mangas[0].author_id.last_name
        }
    }
        
    return (
        <div className='manga'>
        <div className='search-manga'>
            <h2 className='name-page'>{name}</h2>
        </div>
        <div className='card-manga'>
            <div className='cont-checks'>
                <ChecksManga />
            </div>
            <div className='cont-cards'>
                {
                    mangas.map((manga) => 
                        <CardsManga key={manga._id} title_={manga.title}  category_={manga.category_id} photo={manga.cover_photo} _id={manga._id} /> )
                } 
            </div>
            {
                deleteState ? <ModalDelete /> : null
            }
        </div>
    </div>
    )
}
