import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../configHost";
import axios from "axios";



const panelCompanies = createAsyncThunk(

    'panelCompanies',
    async ({ token }) => {
        let url = apiUrl+'auth/companies/admin'
        let headers = { headers: { 'Authorization': `Bearer ${token}`}}
        try {
            let response = await axios.get( url, headers )
            return { companies: response.data}
        } catch (error) {
            console.log(error);
            return {
                companies: []
            }
        }
    }

)

const getCompanies = { panelCompanies }
export default getCompanies