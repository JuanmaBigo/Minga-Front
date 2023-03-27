import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../configHost";


const read_mangas = createAsyncThunk(
    'read_mangas',
    async ({ inputText, inputCheck, inputPage }) => {
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let url = apiUrl + `mangas?page=${inputPage}&title=${inputText.trim()}&category_id=${inputCheck.join()}`
        try {
            let response = await axios.get(url, headers)
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
        let url = apiUrl + 'mangas/' + id;
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
        if (page) {
            url = apiUrl + 'chapters?' + 'manga_id=' + id + '&page=' + page;
        }
        if (limit === 0) {
            url = apiUrl + 'chapters?' + 'manga_id=' + id + '&limit=' + limit;
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
        if (id) {

            let token = localStorage.getItem('token')
            let headers = { headers: { 'Authorization': `Bearer ${token}` } }
            let url = apiUrl + 'chapters/' + id;
            try {
                let response = await axios.get(url, headers)
                console.log(response)
                return {
                    chapter: response.data.chapter
                }
            } catch (error) {
                return {
                    chapter: {}
                }
            }
        } else {
            return {
                chapter: {}
            }
        }

    }
)



const actions = { read_mangas, read_manga, read_chapters, get_chapter }

export default actions