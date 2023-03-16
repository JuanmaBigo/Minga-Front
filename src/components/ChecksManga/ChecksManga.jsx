import React from 'react'
import './checksManga.css'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import checkActions from '../../store/checks/actions'
const {captureChecks} = checkActions

export default function ChecksManga(props) {

  const dispatch = useDispatch()
  let url = 'http://localhost:8080/api/mangas/category-manga'

    let [ categories, setCategories ] = useState([])
        useEffect(
            () => {
                axios.get(url)
                .then( response => setCategories( response.data.categories ) )
                .catch(e => {
                console.log(e);
            })
            },
            [url]
        )

        let category_name=categories.map(cat => cat.name)
        let category_id=categories.map(cat => cat._id)

        const checkboxValues = useSelector(store => store.checks.checks);
        

        const handleCheck = (event) => {
          const { value } = event.target;
          let newValues;
          if (checkboxValues.includes(value)) {
              newValues = checkboxValues.filter(v => v !== value);
          } else {
              newValues = [...checkboxValues, value];
          }
          dispatch(captureChecks({inputCheck:newValues}));
          
      };

  
  return (
    <form className='form-checks' ref={props.parentref} >

        <label className={`class-checks2 ${checkboxValues.includes(category_id[0])? 'select-checks2':''}`} htmlFor={category_name[0]}>{category_name[0]}</label>
        <input className='input-checks' type="checkbox" name={category_name[0]} id={category_name[0]} value={category_id[0]} defaultChecked={checkboxValues.includes(category_id[0])} onChange={handleCheck}/>

        <label className={`class-checks3 ${checkboxValues.includes(category_id[1])? 'select-checks3':''}`} htmlFor={category_name[1]}>{category_name[1]}</label>
        <input className='input-checks' type="checkbox" name={category_name[1]} id={category_name[1]} value={category_id[1]} defaultChecked={checkboxValues.includes(category_id[1])} onChange={handleCheck}/>
        
        <label className={`class-checks4 ${checkboxValues.includes(category_id[2])? 'select-checks4':''}`} htmlFor={category_name[2]}>{category_name[2]}</label>
        <input className='input-checks' type="checkbox" name={category_name[2]} id={category_name[2]} value={category_id[2]} defaultChecked={checkboxValues.includes(category_id[2])} onChange={handleCheck}/>

        <label className={`class-checks5 ${checkboxValues.includes(category_id[3])? 'select-checks5':''}`} htmlFor={category_name[3]}>{category_name[3]}</label>
        <input className='input-checks' type="checkbox" name={category_name[3]} id={category_name[3]} value={category_id[3]} defaultChecked={checkboxValues.includes(category_id[3])} onChange={handleCheck} />

    </form>
  )
}
