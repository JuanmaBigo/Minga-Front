import React, {useEffect} from "react";
import { useParams } from 'react-router-dom';
import "./DetailsManga.css"
import DetailsMain from "./DetailsMain/DetailsMain"
import LikeButtons from "./LikeButtons/LikeButtons";
import ChaptersDetails from "./ChaptersDetails/ChaptersDetails";
import RatingStats from "./RatingStats/RatingStats";
import DescriptionAndChapters from "./DescriptionAndChapters/DescriptionAndChapters";
import { useSelector, useDispatch } from 'react-redux';
import eventsActions from '../../store/Events/actions';
const { read_manga } = eventsActions;

export default function DetailsManga() {
    
    let { id } = useParams();

    let dispatch = useDispatch()

    useEffect(() => {
            dispatch(read_manga({ id: id }))
    }, []);  

    let manga = useSelector(store => store.events.manga)
    // let chapters = useSelector(store => store.events.chapters)
    // console.log(manga)

    return (
        <div className='MangaDetails'>
            <DetailsMain manga={manga}/>
            <LikeButtons />
            <RatingStats chapterCount={15} />
            <DescriptionAndChapters/>
        </div>
    )
}
