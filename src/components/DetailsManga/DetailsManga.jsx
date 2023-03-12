import React from "react";
// import axios from "axios";
import { useParams } from 'react-router-dom';
import "./DetailsManga.css"
import DetailsMain from "./DetailsMain/DetailsMain"
import LikeButtons from "./LikeButtons/LikeButtons";
import ChaptersDetails from "./ChaptersDetails/ChaptersDetails";
import RatingStats from "./RatingStats/RatingStats";
import DescriptionAndChapters from "./DescriptionAndChapters/DescriptionAndChapters";


export default function DetailsManga() {
    let { id, page } = useParams();
    let url = 'http://localhost:8080/api/mangas/' + id;
    let urlChapters = 'http://localhost:8080/api/chapters?manga_id=' + id + '&page=' + page;

    return (
        <div className='MangaDetails'>
            <DetailsMain url={url} />
            <LikeButtons />
            <RatingStats chapterCount={265} />
            <DescriptionAndChapters urlManga={url} urlChapters={urlChapters}/>
        </div>
    )
}
