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

/* AXIOS CONFIG */
const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: AD_BASE_URL,
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
