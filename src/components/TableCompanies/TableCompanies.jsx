import React, { useEffect } from 'react'
import './tablecompanies.css'
import getCompanies from '../../store/PanelCompanies/actions.js'
import { useDispatch, useSelector } from 'react-redux'
import icon from '../../assets/img/company-icon.png'
import SwitchPanel from '../SwitchPanel/SwitchPanel'


export default function TableCompanies() {

    const { panelCompanies } = getCompanies
    const dispatch = useDispatch()
    let token = localStorage.getItem('token')
    
    useEffect(
        () => {
            dispatch(panelCompanies({token}))
        },
        []
    )
    
    let activeCompanies =  useSelector(store => store.panelCompanies.companies.activeCompanies)
    let inactiveCompanies =  useSelector(store => store.panelCompanies.companies.inactiveCompanies)
    // console.log(inactiveCompanies);


    return (
    <div className='TableCompanies'>
        <table>
            <tbody>
                { ( activeCompanies ) ?
                    ( activeCompanies.map( (active ) => (
                        <tr>
                            <td className='celda-icono'><img className='icon-photo' src={icon} alt='celda-icon'/></td>
                            <td>{active.name}</td>
                            <td className='celda-website'>{`www.${active.website.slice(8)}`}</td>
                            <td className='celda-photo'><img className='table-photo' src={active.logo} alt='celda-photo' /></td>
                            <td className='celda-switch'><SwitchPanel /></td>
                        </tr>
                    ))
                    ) :
                    null
                }
            </tbody>
            <tbody>
                { (inactiveCompanies) ?
                    ( inactiveCompanies.map( (inactive) => (
                        <tr>
                            <td className='celda-icono'><img className='icon-photo' src={icon} alt='celda-icon'/></td>
                            <td>{inactive.name}</td>
                            <td className='celda-website'>{`www.${inactive.website.slice(8)}`}</td>
                            <td className='celda-photo'><img className='table-photo' src={inactive.logo} alt='celda-photo' /></td>
                            <td className='celda-switch'><SwitchPanel /></td>
                        </tr>
                    )
                    )) :
                    null
                }
            </tbody>
        </table>
    </div>
    )
}
