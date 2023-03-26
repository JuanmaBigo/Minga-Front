import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './mymangas.css'
import getmangas from '../../store/MyMangas/actions'
import CardsMyMangas from '../../components/CardsMyMangas/CardsMyMangas'
import ChecksManga from '../../components/ChecksManga/ChecksManga'
import ModalDelete from '../../components/ModalDelete/ModalDelete'
import ModalEdit from '../../components/ModalEdit/ModalEdit'
import StaticCardMyMangas from '../../components/StaticCardMyMangas/StaticCardMyMangas'
import { Link as Anchor } from 'react-router-dom'


export default function MyMangas() {
    
    let { my_mangas } = getmangas
    const dispatch = useDispatch()
    let token = localStorage.getItem('token')
    let deleteState = useSelector(store => store.showModalDelete.state)
    let editState = useSelector(store => store.showModalEdit.state)



    useEffect(
        () => {
            dispatch(my_mangas({token}))
        },
        [ deleteState, editState ]
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
                <StaticCardMyMangas />
                {
                    mangas.map((manga) => 
                        <CardsMyMangas key={manga._id} title_={manga.title}  category_={manga.category_id} photo={manga.cover_photo} _id={manga._id} /> )
                } 
            </div>
            { deleteState ? <ModalDelete /> : null }
            { editState ? <ModalEdit /> : null }
        </div>
        {/* <div className='page-manga'>
                {pageNumber === 1 ? "" :<Anchor  className='btn-prev' to={'/mangas/' + (pageNumber - 1)}>Prev</Anchor>}
                {mangas.length === 6 || mangas.length === 10 ? <Anchor  className='btn-next' to={'/mangas/' + (pageNumber + 1)}>Next</Anchor>: ""}
        </div> */}
    </div>
    )
}
