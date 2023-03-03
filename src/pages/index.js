import Hero from "../components/Hero/Hero";
import IndexLayout from "../layouts/IndexLayout/IndexLayout";
import MainLayout from '../layouts/MainLayout/MainLayout'
import Index from "./Index/Index";
import AuthForm from "./AuthForm/AuthForm";
import ChapterForm from "./ChapterForm/ChapterForm"


import { createBrowserRouter } from "react-router-dom"



export const router = createBrowserRouter([

    

    {
        path:'/',
        element: <IndexLayout/>,
        children:[
            {path:'/',element:<Index/>},
            {path:'/hero',element:<Hero/>},
            {path:'/auth',element:<AuthForm/>},
            {path: '/chapter-form', element: <ChapterForm/>}
        ]

    },
    {
        path:'/',
        element: <MainLayout/>,
        children:[
            {path:'register',element : <AuthForm text ='register'/>},
            {path:'signin',element : <AuthForm text ={false}/>}
        ]
    }
    
])