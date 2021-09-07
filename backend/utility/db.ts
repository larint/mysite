import { default as profile } from '../db/profile.json'
import { default as resume } from '../db/resume.json'
import { default as project } from '../db/project.json'
import { default as post } from '../db/post.json'

class DB {

    static getProfile = async () => {
        return profile
    }

    static getResume = async () => {
        return resume
    }

    static getProject = async () => {
        return project
    }

    static getPost = async () => {
        return post
    }
}

export { DB }