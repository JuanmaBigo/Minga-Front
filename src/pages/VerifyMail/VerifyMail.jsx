import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import './verifyMail.css'
import { Link as Anchor } from 'react-router-dom'
import apiUrl from '../../configHost'



export default function VerifyMail() {
    const [userlocal,setuserlocal] =useState()
    const user = localStorage.getItem('user')
    const {verify_code} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
       (async ()=>{
        if(userlocal?.is_verify){
            setTimeout(()=> {
                return navigate('/')
            },3000)
        }else {
            if ( verify_code){
                //get request
                const response = await axios.get(apiUrl+'auth/verify?verify_code='+verify_code)//apiurl llega hasta api/

                // console.log('res',response);

                localStorage.setItem('user',JSON.stringify(response.data))
                setuserlocal(response.data)
            }
        }
       })()

    },[verify_code,user])

    

  return (
    <div className='cont-verify'>
       <h1>Verified</h1>
       <Anchor className='a-redirect' to='/'>Back to home</Anchor>
    </div>
  )
}
