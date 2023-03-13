import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const read_events = createAsyncThunk(
    'read_events',
    async ({ inputText, inputCheck, inputPage }) => {
        let url = `http://localhost:8080/api/mangas?page=${inputPage}&title=${inputText.trim()}&category_id=${inputCheck.join()}`
        try {
            let response = await axios.get(url)
            return {
                events: response.data.mangas
            }
        } catch (error) {
            return {
                events: []
            }
        }
    }
)

const read_manga = createAsyncThunk(
    'read_manga',
    async ({ id }) => {
        let url = 'http://localhost:8080/api/mangas/' + id;

        try {
            let response = await axios.get(url)
            return {
                manga: response.data.manga
            }
        } catch (error) {
            return {
                manga: []
            }
        }
    }
)

const read_chapters = createAsyncThunk(
    'read_chapters',
    async ({ id, page }) => {
        let url = 'http://localhost:8080/api/chapters?'+'manga_id='+id+'&page='+ page;

        try {
            let response = await axios.get(url)
            return {
                chapters: response.data.chapters
            }
        } catch (error) {
            return {
                chapters: []
            }
        }
    }
)

const actions = { read_events, read_manga, read_chapters }

export default actions