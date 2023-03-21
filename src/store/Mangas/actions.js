import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const read_mangas = createAsyncThunk(
    'read_mangas',
    async ({ inputText, inputCheck, inputPage }) => {
        let url = `http://localhost:8080/api/mangas?page=${inputPage}&title=${inputText.trim()}&category_id=${inputCheck.join()}`
        try {
            let response = await axios.get(url)
            return {
                mangas: response.data.mangas
            }
        } catch (error) {
            return {
                mangas: []
            }
        }
    }
)

const read_manga = createAsyncThunk(
    'read_manga',
    async ({ id }) => {
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let url = 'http://localhost:8080/api/mangas/' + id;
        try {
            let response = await axios.get(url, headers)
            return {
                manga: response.data.manga
            }
        } catch (error) {
            return {
                manga: {}
            }
        }
    }
)

const read_chapters = createAsyncThunk(
    'read_chapters',
    async ({ id, page, limit }) => {
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let url = ''
        if(page){
            url = 'http://localhost:8080/api/chapters?'+'manga_id='+id+'&page='+ page;
        }
        if (limit === 0){
            url = 'http://localhost:8080/api/chapters?'+'manga_id='+id+'&limit='+ limit;
        }

        try {
            let response = await axios.get(url, headers)
            return {
                chapters: response.data.chapters,
                count: response.data.count
            }
        } catch (error) {
            return {
                chapters: [],
                count: 0
            }
        }
    }
)

const get_chapter = createAsyncThunk(
    'get_chapter',
    async ({ id }) => {
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let url = 'http://localhost:8080/api/chapters/'+ id;
        try {
            let response = await axios.get(url, headers)
            return {
                chapter: response.data.chapter
            }
        } catch (error) {
            return {
                chapter: {}
            }
        }
    }
)



const actions = { read_mangas, read_manga, read_chapters, get_chapter }

export default actions