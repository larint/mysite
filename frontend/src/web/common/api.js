import axios from "axios"

/* BASE URL */
// export const SITE_URL = "https://recv.vercel.app" //SERVER
export const SITE_URL = "http://localhost:3001" //LOCAL

export const BASE_URL = SITE_URL + "/api"
export const UPLOADS_URL = SITE_URL + "/uploads/"

/* BACKEND API URLS */
export const API_GET_PROFILE = BASE_URL + "/get-profile"
export const API_GET_RESUME = BASE_URL + "/get-resume"
export const API_GET_PROJECT = BASE_URL + "/get-project"
export const API_GET_BLOG = BASE_URL + "/get-blog"
export const API_GET_POST = BASE_URL + "/get-post"
export const API_GET_OTHER_POST = BASE_URL + "/get-other-post"
export const API_GET_SKILL = BASE_URL + "/get-skill"
export const API_SEND_CONTACT = BASE_URL + "/send-contact"
export const API_GET_CAPTCHA = BASE_URL + "/get-captcha"

/* QUERY KEY */
export const QUERY_KEY_GET_PROFILE = "getProfile"
export const QUERY_KEY_GET_RESUME = "getResume"
export const QUERY_KEY_GET_PROJECT = "getProject"
export const QUERY_KEY_GET_BLOG = "getBlog"
export const QUERY_KEY_GET_POST = "getPost"
export const QUERY_KEY_GET_OTHER_POST = "getOtherPost"
export const QUERY_KEY_GET_SKILL = "getSkill"
export const QUERY_KEY_GET_CAPTCHA = "getCaptcha"

/* AXIOS CONFIG */
const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: BASE_URL,
})


export async function getProfile() {
    return await axiosInstance.post(API_GET_PROFILE)
}

export async function getResume() {
    return await axiosInstance.post(API_GET_RESUME)
}

export async function getProject() {
    return await axiosInstance.post(API_GET_PROJECT)
}

export async function getBlog() {
    return await axiosInstance.post(API_GET_BLOG)
}

export async function getPost(data) {
    return await axiosInstance.post(API_GET_POST, data)
}

export async function getOtherPost(slugPost) {
    return await axiosInstance.post(API_GET_OTHER_POST, {
        slug: slugPost
    })
}

export async function getSkill(slugPost) {
    return await axiosInstance.post(API_GET_SKILL)
}

export async function getCaptcha() {
    return await axiosInstance.post(API_GET_CAPTCHA)
}

export function sendContact(name, email, content, captcha) {
    return axiosInstance.post(API_SEND_CONTACT, {
        name: name,
        email: email,
        content: content,
        captcha: captcha
    })
}