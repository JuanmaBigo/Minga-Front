import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Description.css'

export default function Description(props) {

  let [ description, setDescription ] = useState([])

  useEffect(
      () => {
          axios.get(props.url)
          .then( response => setDescription(response.data.manga.description))
          .catch(error => console.log(error))
      },
      []
  )     

  return (
    <div className='description-of-manga'>{description}</div>
  )
}
