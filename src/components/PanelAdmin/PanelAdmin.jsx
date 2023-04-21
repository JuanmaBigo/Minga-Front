import React from 'react'
import './paneladmin.css'
import line_entities from '../../assets/img/Line entities.png'
import TableAuthors from '../TableAuthors/TableAuthors'
import TableCompanies from '../TableCompanies/TableCompanies'

export default function PanelAdmin() {
    return (
    <div className='PanelAdmin'>
        <div className='title-admin'>
            <h1>Panel</h1>
        </div>
        <div className='entities'>
            <h3>Entities</h3>
            <img className='line-entities' src={line_entities} /> 
            <div>
            {/* <TableAuthors /> */}
            <TableCompanies/> 
            </div>
        </div>
    </div>
    )
}
