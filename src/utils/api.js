import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: import.meta.env.VITE_GOOGLE_API, 
    cx: import.meta.env.VITE_CX_API,  
};

export const fetchDataFromApi = async (payload) => {
    try {
        const { data } = await axios.get(BASE_URL, {
            params: { ...params, ...payload },
        });
        return data;
    } catch (error) {
        console.error("Error fetching data from API:", error);
        throw error;
    }
};
