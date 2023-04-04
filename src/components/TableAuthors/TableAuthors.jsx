import React, { useEffect } from 'react'
import './tableauthors.css'
import getAuthors from '../../store/PanelAuthors/actions.js'
import icono from '../../assets/img/profile.png'
import { useDispatch, useSelector } from 'react-redux'
import SwitchPanel from '../SwitchPanel/SwitchPanel'


export default function TableAuthors() {

    const { panelAuthors } = getAuthors
    const dispacht = useDispatch()
    let token = localStorage.getItem('token')
    
    
    useEffect(
        () => {
            dispacht(panelAuthors({token}))
        },
        []
        )
        
        let activeAuthors = useSelector(store => store.panelAuthors.authors.activeAuthors)
        let inactiveAuthors = useSelector(store => store.panelAuthors.authors.inactiveAuthors)

    return (
    <div>
        <table>
            <tbody>
            { (activeAuthors) ? 
                ( activeAuthors.map( (active) => ( 
                    <tr>
                        <td className='celda-icono'><img className='icon-photo' src={icono} alt='celda-icon'/></td>
                        <td>{active.name}</td>
                        <td>{active.city}</td>
                        <td>{active.country}</td>
                        <td className='celda-photo'><img className='table-photo' src={active.photo} alt='celda-photo' /></td>
                        <td className='celda-switch' id={active._id} > <SwitchPanel /></td>
                    </tr>
                )))
                : null
            }
            </tbody>
            <tbody>
            { (inactiveAuthors) ? 
                ( inactiveAuthors.map( (inactive) => ( 
                    <tr>
                        <td className='celda-icono'><img className='icon-photo' src={icono} alt='celda-icon'/></td>
                        <td>{inactive.name}</td>
                        <td>{inactive.city}</td>
                        <td>{inactive.country}</td>
                        <td className='celda-photo'><img className='table-photo' src={inactive.photo} alt='celda-photo' /></td>
                        <td className='celda-switch'> <SwitchPanel /> </td>
                    </tr>
                )))
                : null
            }
            </tbody>
        </table>
    </div>
    )
}
