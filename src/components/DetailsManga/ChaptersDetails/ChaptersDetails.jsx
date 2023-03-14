import React, {useEffect, useState} from 'react'
import axios from 'axios';

export default function ChaptersDetails(props) {

    const [chapters, setChapters] = useState([]);

    useEffect(
        () => {
            axios.get(props.url)
                .then(function (response) {
                    setChapters(response.data.chapters)
                })
        },
        []
    )

    console.log(chapters)

    return (
        <div>

        </div>
    )
}
