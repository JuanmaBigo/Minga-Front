import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./DetailsManga.css"
import DetailsMain from "./DetailsMain/DetailsMain"
import LikeButtons from "./LikeButtons/LikeButtons";
import RatingStats from "./RatingStats/RatingStats";
import DescriptionAndChapters from "./DescriptionAndChapters/DescriptionAndChapters";
import { useDispatch } from 'react-redux';
import mangasActions from '../../store/Mangas/actions';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
const { read_manga, read_chapters } = mangasActions;

export default function DetailsManga() {

    let { id, page } = useParams();



    let dispatch = useDispatch()
    // let chapters = useSelector(store => store.mangas.chapters)

    useEffect(() => {
        dispatch(read_manga({ id: id }))
        dispatch(read_chapters({ id: id, page: page }))
    }, []);


    return (
        <div className='MangaDetails'>
            <ScrollToTop />
            <DetailsMain />
            <LikeButtons />
            <RatingStats />
            <DescriptionAndChapters />
        </div>
    )
}
