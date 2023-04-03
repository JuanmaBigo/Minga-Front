import React from 'react'
import './paneladmin.css'
import line_entities from '../../assets/img/Line entities.png'
import PanelAuthors from '../PanelAuthors/PanelAuthors'

export default function PanelAdmin() {
    return (
    <div className='PanelAdmin'>
        <div className='title-admin'>
            <h1>Panel</h1>
        </div>
        <div className='entities'>
            <h3>Entities</h3>
            <img className='line-entities' src={line_entities} /> 
            <PanelAuthors />
        </div>
    </div>
    )
}
