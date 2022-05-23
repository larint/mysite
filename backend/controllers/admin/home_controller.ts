import { Request, Response, } from 'express'
import fs from 'fs'
import multer from 'multer'
import path from 'path'
import { DB } from '../../utility/db'
import formidable from 'formidable'
import { writeLog } from '../../utility/helper'

class HomeController {

    index = async (req: Request, res: Response) => {

        return res.json({ msg: 'react' })
    }

    log = async (req: Request, res: Response) => {
        fs.readFile(path.join(path.dirname(__dirname), 'log/app.log'), 'utf8', (err, data) => {
            return res.json({ msg: data })
        })
    }

    savePost = async (req: Request, res: Response) => {
        let post = await DB.savePost(req.body.title, req.body.content)
        if (post) {
            return res.status(200).json({
                message: 'create post success'
            })
        }

        return res.sendStatus(201)
    }

    updatePost = async (req: Request, res: Response) => {
        let post = await DB.updatePost(req.body.title, req.body.content, req.body.sha, req.body.id)
        if (post) {
            return res.status(200).json({
                message: 'update post success'
            })
        }

        return res.sendStatus(201)
    }

    deletePost = async (req: Request, res: Response) => {
        let post = await DB.deletePost(req.body.id, req.body.sha)
        if (post) {
            return res.status(200).json({
                message: 'delete post success'
            })
        }

        return res.sendStatus(201)
    }

    getListPost = async (req: Request, res: Response) => {
        let posts = await DB.getListPost()
        return res.status(200).json(posts)
    }

    getPost = async (req: Request, res: Response) => {
        let id = req.body.id

        let post = await DB.getPost(id)

        return res.status(200).json(post)
    }

    getStatisticPost = async (req: Request, res: Response) => {
        let stats = await DB.getStatisticPost()
        return res.status(200).json(stats)
    }

    getProfile = async (req: Request, res: Response) => {
        let profile = await DB.getProfile()
        return res.status(200).json(profile)
    }

    saveProfile = async (req: Request, res: Response) => {
        const form = formidable({
            multiples: true
        })
        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.log(err);
                return
            }
            let profileData = {
                name: fields.displayName,
                job: fields.position,
                birthDay: fields.birthday,
                contact: {
                    skype: fields.skype ? fields.skype : '',
                    phone: fields.phone ? fields.phone : '',
                    email: fields.email ? fields.email : '',
                    address: fields.address ? fields.address : '',
                },
                password: "",
                social: {
                    fb: fields.fb ? fields.fb : '',
                    github: fields.github ? fields.github : '',
                    insta: fields.insta ? fields.insta : '',
                },
                intro: fields.intro,
                avatar: '',
            }

            let sha: any = fields.sha
            let file: any = files.avatar
            if (sha) {
                if (file) {
                    fs.readFile(file.filepath, async (err, data) => {
                        if (err) {
                            console.log(err)
                            return
                        }
                        let base64data = Buffer.from(data).toString('base64')
                        profileData.avatar = base64data
                        let profile = await DB.updateProfile(profileData, sha)
                        return res.status(200).json(profile)
                    })
                } else {
                    let data = await DB.getProfile()
                    profileData.avatar = data.avatar
                    let profile = await DB.updateProfile(profileData, sha)
                    return res.status(200).json(profile)
                }

            } else {
                fs.readFile(file.filepath, async (err, data) => {
                    if (err) {
                        console.log(err)
                        return
                    }
                    let base64data = Buffer.from(data).toString('base64')
                    profileData.avatar = base64data
                    let profile = await DB.saveProfile(profileData)
                    return res.status(200).json(profile)
                })
            }
        })
    }

    checkAuth = async (req: Request, res: Response) => {
        if (req.session?.user) {
            return res.status(200).json({
                message: 'login success',
                user: req.session.user
            })
        }

        return res.sendStatus(201)
    }

    doLogin = async (req: Request, res: Response) => {
        let username = req.body.username
        let remember = req.body.remember
        let password = Buffer.from(req.body.password as string).toString('base64')
        if (username == process.env.USER_ADMIN && password == process.env.PASS_ADMIN) {
            req.session.user = username
            return res.status(200).json({
                message: 'login success',
                username: username
            })
        }

        return res.sendStatus(201)
    }

    doLogout = async (req: Request, res: Response) => {
        if (req.session?.user) {
            req.session?.destroy(() => { })
            return res.status(200).json({
                message: 'logout success'
            })
        }

        return res.sendStatus(201)
    }
}

export default new HomeController