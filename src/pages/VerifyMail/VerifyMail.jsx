import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import './verifyMail.css'

export default function VerifyMail() {
    const [userlocal,setuserlocal] =useState()
    const user = localStorage.getItem('user')
    const {verify_code} = useParams()
    const navigate = useNavigate()

    // console.log(user);
    // console.log('verify_code',verify_code);

    

    useEffect(()=>{
       (async ()=>{
        if(userlocal?.is_verify){
            setTimeout(()=> {
                return navigate('/')
            },3000)
        }else {
            if ( verify_code){
                //get request
                const response = await axios.get('http://localhost:8080/api/auth/verify?verify_code='+verify_code)//apiurl llega hasta api/

                // console.log('res',response);

                localStorage.setItem('user',JSON.stringify(response.data))
                setuserlocal(response.data)
            }
        }
       })()

    },[verify_code,user])

    

  return (
    <div className='cont-verify'>
       {userlocal?.is_verified?<h1>verificado</h1>:<h1>no verificado</h1>}
    </div>
  )
}
