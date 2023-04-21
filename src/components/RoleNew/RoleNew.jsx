import React from 'react'
import './rolenew.css'
import RoleNewRight from '../RoleNewRight/RoleNewRight'
import RoleNewLeft from '../RoleNewLeft/RoleNewLeft'


export default function RoleNew() {
    return (
        <div className='rolenew'>
            <RoleNewLeft />
            <RoleNewRight />
        </div>
    )
}
