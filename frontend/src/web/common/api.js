import axios from "axios"

/* BASE URL */
// export const SITE_URL = "https://mysite-larint.vercel.app" //LOCAL
export const SITE_URL = "http://localhost:3001" //LOCAL

export const BASE_URL = SITE_URL + "/api"
export const UPLOADS_URL = SITE_URL + "/uploads/"

/* BACKEND API URLS */
export const API_GET_PROFILE = BASE_URL + "/get-profile"

/* QUERY KEY */
export const QUERY_KEY_GET_PROFILE = "getProfile"

/* AXIOS CONFIG */
const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: BASE_URL,
})


export async function getProfile() {
    return await axiosInstance.post(API_GET_PROFILE)
}
