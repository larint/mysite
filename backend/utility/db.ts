import { default as profile } from '../db/profile.json'
import { default as resume } from '../db/resume.json'
import { default as project } from '../db/project.json'
import { default as skill } from '../db/skill.json'
import { string_to_slug } from './helper'
import { GitAPI } from '../services/git_api'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'

class DB {

    static saveProfile = async (profileData: any) => {
        let contentEncode = Buffer.from(JSON.stringify(profileData)).toString('base64')

        let api = new GitAPI()
        return await api.createFile(`backend/db/profile.json`, { message: 'create profile', content: contentEncode })
    }

    static getProfile = async () => {
        let api = new GitAPI()
        let d = await api.getFile(`backend/db/profile.json`)
        if (d.content) {
            let data = JSON.parse(Buffer.from(d.content, 'base64').toString('utf-8'))
            data.sha = d.sha

            return data
        }
        return {}
    }

    static updateProfile = async (profileData: any, sha: string) => {
        let contentEncode = Buffer.from(JSON.stringify(profileData)).toString('base64')

        let api = new GitAPI()
        return await api.updateFile(`backend/db/profile.json`, { message: 'update profile', content: contentEncode, sha: sha })
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

    static getStatisticPost = async () => {
        let api = new GitAPI()
        let list = await api.getFile(`backend/db/blog`)

        // fs.readFile('/Users/mrq/Downloads/screenshot.png', async (err, data) => {
        //     api.createFile(`backend/db/blog/image.png`, { message: 'create image', content: data.toString('base64') })
        // })

        return new Promise<void>(async (res, rej) => {
            let stats: any = {
                total: list.length,
                month: {}
            }
            let now = new Date,
                mon: { [key: string]: any } = {},
                total = 0,
                currentYear = now.getFullYear()
            for (let m = 1; m <= 12; m++) {
                mon['month_' + m] = 0
            }

            for await (const file of list) {
                try {
                    if (file.name.includes('.json')) {
                        let d = await api.getFile(file.path)
                        let data = JSON.parse(Buffer.from(d.content, 'base64').toString('utf-8'))
                        let month = (new Date(data.createAt)).getMonth() + 1
                        let year = (new Date(data.createAt)).getFullYear()
                        if (currentYear == year) {
                            mon['month_' + month] += 1
                        }
                        total++
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            stats.total = total
            stats.month = mon
            res(stats)
        })
    }

    static getPost = async (id: string) => {
        let api = new GitAPI()
        let d = await api.getFile(`backend/db/blog/${id}.json`)

        let data = JSON.parse(Buffer.from(d.content, 'base64').toString('utf-8'))
        data.sha = d.sha

        return data
    }

    static deletePost = async (id: string, sha: string) => {
        if (!id) {
            return false
        }
        let api = new GitAPI()
        return await api.deleteFile(`backend/db/blog/${id}.json`, { message: 'delete post', sha: sha })
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

    static getListPost = async () => {
        let api = new GitAPI()
        let list = await api.getFile(`backend/db/blog`)

        return new Promise<void>(async (res, rej) => {
            let posts: any = []
            for (const file of list) {
                try {
                    if (file.name.includes('.json')) {
                        let d = await api.getFile(file.path)
                        let data = JSON.parse(Buffer.from(d.content, 'base64').toString('utf-8'))
                        let post = {
                            createAt: data.createAt,
                            id: data.id,
                            slug: data.slug,
                            title: data.title,
                            sha: file.sha
                        }
                        posts.push(post)
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            res(posts)
        })
    }
}

export { DB }