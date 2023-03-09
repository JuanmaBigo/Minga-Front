import React from 'react'
import './checksManga.css'
import {useRef} from 'react'

export default function ChecksManga() {
  let check = useRef()
  
  return (
    <form className='form-checks'>
        <label className='class-checks1' htmlFor="All">All</label>
        <input className='input-checks' type="checkbox" name="All" id="All" value='' ref={check}/>

        <label className='class-checks2' htmlFor="shonen">Shonen</label>
        <input className='input-checks' type="checkbox" name="shonen" id="shonen" value='shonen'/>

        <label className='class-checks3' htmlFor="seinen">Seinen</label>
        <input className='input-checks' type="checkbox" name="seinen" id="seinen" value='seinen'/>
        
        <label className='class-checks4' htmlFor="shojo">Shojo</label>
        <input className='input-checks' type="checkbox" name="shojo" id="shojo" value='shojo'/>

        <label className='class-checks5' htmlFor="kodomo">Kodomo</label>
        <input className='input-checks' type="checkbox" name="kodomo" id="kodomo" value='kodomo'/>
    </form>
  )
}
