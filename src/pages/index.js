import React from 'react'
import Hero from "../components/Hero/Hero";
import IndexLayout from "../layouts/IndexLayout/IndexLayout";
import MainLayout from '../layouts/MainLayout/MainLayout'
import Index from "./Index/Index";
import AuthForm from "./AuthForm/AuthForm";
import MangaForm from "./MangaForm/MangaForm";
import ChapterForm from './ChapterForm/ChapterForm'
import Mangas from "./Mangas/Mangas";
import Chapters from "../components/Chapters/Chapters";
import MangaDetails from './MangaDetails/MangaDetails';
import AuthorForm from './AuthorForm/AuthorForm';
import AuthorProfile from './AuthorProfile/AuthorProfile';
import MyMangas from './MyMangas/MyMangas';
import EditChapterPage from './EditChapter/EditChapterPage';
import VerifyMail from './VerifyMail/VerifyMail';
import DonatePage from './Donate/DonatePage';
import DonateSuccess from './Donate/DonateSuccess';
import { Navigate } from 'react-router-dom';
import NewRole from './NewRole/NewRole';
import CompanyForm from './CompanyForm/CompanyForm';

import { createBrowserRouter } from "react-router-dom"

let token = localStorage.getItem('token')

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

            {path:'register',element : token? <Navigate to='/'/>:<AuthForm />},
            {path:'signin',element : token? <Navigate to='/'/>:<AuthForm text ={'false'}/>},
            {path:'/manga-form', element: <MangaForm />},
            {path: '/chapter-form/:manga_id', element: <ChapterForm/>},
            {path: '/mangas/:page', element: <Mangas/>},
            {path: '/chapters/:id/:page',element: <Chapters /> },
            {path: '/manga/:id/:page', element: <MangaDetails/>},
            {path: '/author-form' , element:<AuthorForm/>},
            {path: '/profile', element:<AuthorProfile/>},
            {path: '/mymangas', element: <MyMangas />},
            {path: '/edit/:manga_id', element:<EditChapterPage/>},
            {path: '/verify/:verify_code',element:<VerifyMail/>},
            {path: '/donate', element:<DonatePage/>},
            {path: '/donate/success', element:<DonateSuccess/>},
            {path: '/company-form', element:<CompanyForm/>},
            {path: '/new-role', element:<NewRole/>}

        ]
    } 
    
])