import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const read_events = createAsyncThunk(
    'read_events',
    async({inputText,inputCheck,inputPage}) => {
        let url = `http://localhost:8080/api/mangas?page=${inputPage}&title=${inputText.trim()}&category_id=${inputCheck.join()}`
        try{
            let response = await axios.get(url)
            return{
                events: response.data.mangas
            }
        }catch(error){
            return{
                events: []
            }
        }
    }
)

const actions = {read_events}

export default actions