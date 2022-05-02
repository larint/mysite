import axios from "axios"

/* BASE URL */
export const AD_SITE_URL = "https://recv.vercel.app" //SERVER
// export const AD_SITE_URL = "http://localhost:3001" //LOCAL

export const AD_BASE_URL = AD_SITE_URL + "/api/ad"

/* BACKEND API URLS */
export const API_AD_SAVE_POST = AD_BASE_URL + "/blog/save"
export const API_AD_GET_LIST_POST = AD_BASE_URL + "/blog/list"
export const API_AD_GET_POST = AD_BASE_URL + "/blog/get-post"
export const API_AD_UPDATE_POST = AD_BASE_URL + "/blog/save"
export const API_AD_DELETE_POST = AD_BASE_URL + "/blog/delete"
export const API_AD_GET_STATS_POST = AD_BASE_URL + "/blog/get-statistic"
export const API_AD_GET_PROFILE = AD_BASE_URL + "/get-profile"
export const API_AD_SAVE_PROFILE = AD_BASE_URL + "/save-profile"
export const API_AD_LOGIN = AD_BASE_URL + "/do-login"
export const API_AD_LOGOUT = AD_BASE_URL + "/do-logout"
export const API_AD_CHECK_AUTH = AD_BASE_URL + "/check-auth"

/* AXIOS CONFIG */
const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: AD_BASE_URL
})


export async function savePost(data) {
    return await axiosInstance.post(API_AD_SAVE_POST, data)
}

export async function updatePost(data) {
    return await axiosInstance.put(API_AD_UPDATE_POST, data)
}

export async function getPost(data) {
    return await axiosInstance.post(API_AD_GET_POST, data)
}

export async function getListPost(data) {
    return await axiosInstance.post(API_AD_GET_LIST_POST, data)
}

export async function deletePost(data) {
    return await axiosInstance.post(API_AD_DELETE_POST, data)
}

export async function getStatisticPost() {
    return await axiosInstance.post(API_AD_GET_STATS_POST)
}

export async function getProfile(data) {
    return await axiosInstance.post(API_AD_GET_PROFILE, data)
}

export async function saveProfile(data) {
    const formData = new FormData()
    for (const key in data) {
        let val = data[key]
        formData.append(key, val)
    }

    const axiosIns = axios.create({
        withCredentials: true,
        baseURL: AD_BASE_URL,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    })

    return await axiosIns.post(API_AD_SAVE_PROFILE, formData)
}

export async function doLogin(data) {
    return await axiosInstance.post(API_AD_LOGIN, data)
}

export async function doLogout() {
    return await axiosInstance.post(API_AD_LOGOUT)
}

export async function checkAuth() {
    return await axiosInstance.post(API_AD_CHECK_AUTH)
}