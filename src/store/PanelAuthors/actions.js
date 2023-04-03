import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../configHost";

const panelAuthors = createAsyncThunk(

    'panelAuthors',
    async ({ token }) => {
        let url = apiUrl+'auth/authors/admin'
        let headers = { headers: { 'Authorization': `Bearer ${token}`}}
        try {
            let response = await axios.get( url, headers )
            return { authors: response.data}
        } catch (error) {
            console.log(error);
            return {
                authors: []
            }
        }
    }
)

const getAuthors = { panelAuthors }
export default getAuthors