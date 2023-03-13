import React from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import "./DetailsManga.css"

export default function DetailsManga() {
    let { id, page } = useParams();
    // console.log("id: ", id, "page: ", page);

    let url = "http://localhost:8080/api/mangas/" + id;
    // console.log(url)


    axios.get(url)
        .then(function (response) {
            // console.log(response);
        });
    return (
        <div className='MangaDetails'>
        <h1>MangaDetails</h1>
        <h2>aca van los detalles de un manga</h2>
        
        </div>
    )
}
