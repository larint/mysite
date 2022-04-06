import { default as profile } from '../db/profile.json'
import { default as resume } from '../db/resume.json'
import { default as project } from '../db/project.json'
import { default as post } from '../db/post.json'
import { default as skill } from '../db/skill.json'
import { string_to_slug } from './helper'
import { GitAPI } from '../services/git_api'
import { glob } from 'glob'
import { appRoot } from '../config/constant'
import fs from 'fs'
import { v4 as uuidv4 } from 'uuid'

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

    static getSkill = async () => {
        return skill
    }

    static getPost = async (id: string) => {
        let api = new GitAPI()
        let post = await api.getFile(`backend/db/blog/${id}.json`)
        return post
    }

    static updatePost = async (title: string, content: string, sha: string, id: string) => {
        if (!content) {
            return false
        }

        let slug = string_to_slug(title)

        let post = {
            title: title,
            slug: slug,
            content: content,
            createAt: Date.now(),
            id: id
        }

        let contentEncode = Buffer.from(JSON.stringify(post)).toString('base64')

        let api = new GitAPI()
        return await api.updateFile(`backend/db/blog/${id}.json`, { message: 'update post', content: contentEncode, sha: sha })
    }

    static savePost = async (title: string, content: string) => {
        if (!content) {
            return false
        }

        let fileName = uuidv4()
        let slug = string_to_slug(title)

        let post = {
            title: title,
            slug: slug,
            content: content,
            createAt: Date.now(),
            id: fileName
        }

        let contentEncode = Buffer.from(JSON.stringify(post)).toString('base64')

        let api = new GitAPI()
        return await api.createFile(`backend/db/blog/${fileName}.json`, { message: 'create post', content: contentEncode })
    }

    static getListPost = async (callback: (data: any[]) => void) => {

        glob(`${appRoot}/backend/db/blog/*.json`, {}, function (er, files) {
            let posts = []
            for (const f of files) {
                let data: any = fs.readFileSync(f, { encoding: 'utf8', flag: 'r' })
                data = JSON.parse(data)
                data.content = ''
                posts.push(data)
            }
            callback(posts)
        })

    }
}

export { DB }