import Hero from "../components/Hero/Hero";
import IndexLayout from "../layouts/IndexLayout/IndexLayout";
import MainLayout from '../layouts/MainLayout/MainLayout'
import Index from "./Index/Index";
import AuthForm from "./AuthForm/AuthForm";
import MangaForm from "./MangaForm/MangaForm";
import ChapterForm from './ChapterForm/ChapterForm'
<<<<<<< HEAD
import Mangas from "./Mangas/Mangas";
=======
import Chapters from "../components/Chapters/Chapters";


>>>>>>> f034c991e08e199adc2febc0c13974cc973ffe76

import { createBrowserRouter } from "react-router-dom"



export const router = createBrowserRouter([

    

    {
        path:'/',
        element: <IndexLayout/>,
        children:[
            {path:'/',element:<Index/>},
            {path:'/hero',element:<Hero/>},
            {path:'/auth',element:<AuthForm/>}
        ]

    },
    {
        path:'/',
        element: <MainLayout/>,
        children:[

            {path:'register',element : <AuthForm />},
            {path:'signin',element : <AuthForm text ={'false'}/>},
            {path:'/manga-form', element: <MangaForm />},
            {path: '/chapter-form/:manga_id', element: <ChapterForm/>},
            {path: '/manga/:page', element: <Mangas/>},
            {path: '/chapters/:id/:page',element: <Chapters /> }

        ]
    } 
    
])