import React from 'react'
import Header from '../../components/Header/Header'

export default function IndexLayout(props) {
  return (
    <div>
        <Header/>
        {props.children}
    </div>
  )
}
